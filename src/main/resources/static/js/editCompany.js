var app = angular.module("sampleApp", ["firebase"]);
var db = firebase.database();
var auth = firebase.auth();
var storageRef = firebase.storage().ref();
var currentBranchList = [];
var branch_counter = 0;

app.controller("CompanyCtrl", function($scope, $firebaseArray) {
	$scope.company;
	$scope.companyId;
	$scope.previousObj;
	
	auth.onAuthStateChanged(function(companyUser) {
	  if (companyUser) {
		$scope.companyId = companyUser.uid;
	    db.ref('/companies/' + companyUser.uid).once('value').then(function(snapshot) {
    	  console.log(snapshot.val());
    	  $scope.company = snapshot.val();
    	  $scope.previousObj = JSON.parse(JSON.stringify($scope.company));
    	  $scope.$apply();
    	  appendDistrictList("main_district", $scope.company.district);
    	  initSer($scope.company.ser_content, $scope.company.special_ser);
	    });
	    db.ref('/branches/').orderByChild("companyId").equalTo(companyUser.uid).once('value').then(function(snapshot) {
	    	currentBranchList=snapshot.val();
	    	initBranch(currentBranchList);
		});
	    $("#welcome").html("Welcome, " + companyUser.email);
		$("#logout-link").show();
		$("#login-link").hide();
		$("#editCompanyDiv").show();
		$("#pleaseLoginDiv").hide();
	  } else {
	    // No user is signed in.
		  console.log("No user sign in");
		  $("#logout-link").hide();
		  $("#login-link").show();
		  $("#editCompanyDiv").hide();
		  $("#pleaseLoginDiv").show();
	  }
	});
	
	$scope.updateCompany = function(){
		const file = document.querySelector('#companyBanner').files[0]
		// File or Blob named mountains.jpg

		// Upload file and metadata to the object 'images/mountains.jpg'
		if(file!=null && file.name!=null){
			const name = file.name;
			const metadata = {
			  contentType: file.type
			};
			var uploadTask = storageRef.child('companies/' + file.name).put(file, metadata);

			// Listen for state changes, errors, and completion of the upload.
			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
			  function(snapshot) {
			    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			    console.log('Upload is ' + progress + '% done');
			    switch (snapshot.state) {
			      case firebase.storage.TaskState.PAUSED: // or 'paused'
			        console.log('Upload is paused');
			        break;
			      case firebase.storage.TaskState.RUNNING: // or 'running'
			        console.log('Upload is running');
			        break;
			    }
			  }, function(error) {

			  // A full list of error codes is available at
			  // https://firebase.google.com/docs/storage/web/handle-errors
			  switch (error.code) {
			    case 'storage/unauthorized':
			      // User doesn't have permission to access the object
			      break;

			    case 'storage/canceled':
			      // User canceled the upload
			      break;

			    case 'storage/unknown':
			      // Unknown error occurred, inspect error.serverResponse
			      break;
			  }
			}, function() {
				  // Upload completed successfully, now we can get the download URL
				  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					  $scope.updateCompanyInfo(downloadURL);
				  });
			});
		}else{
			$scope.updateCompanyInfo();
		}
	};
	
	$scope.updateCompanyInfo = function(downloadUrl){
		var passObj;
		passObj = JSON.parse(JSON.stringify( $scope.company ));
		passObj.name = $scope.company.name;
		passObj.address = $scope.company.address;
		passObj.district =  $("#main_district").val();
		passObj.email = $scope.company.email;
		passObj.website =  $scope.company.website==null?"":$scope.company.website;
		passObj.tele_1 = $scope.company.tele_1;
		passObj.tele_2 = $scope.company.tele_2==null?"":$scope.company.tele_2;
		passObj.desc =  $scope.company.desc==null?"":$scope.company.desc;
		passObj.ph_fee = $scope.company.ph_fee==null?"":$scope.company.ph_fee;
		passObj.idon_fee =  $scope.company.idon_fee==null?"":$scope.company.idon_fee;
		passObj.other_fee = $scope.company.other_fee==null?"":$scope.company.other_fee;
		passObj.id = $scope.companyId;
		passObj.licenceNo = $scope.company.licenceNo;
		passObj.ser_content = getSerList();
		passObj.special_ser = getSpecSerList();
		//To init Field
		passObj.special_highlight = $scope.company.special_highlight==null?"N":$scope.company.special_highlight;
		passObj.upload_quota = $scope.company.upload_quota==null?5:$scope.company.upload_quota;
		passObj.vip_expired = $scope.company.vip_expired==null?"Y":$scope.company.vip_expired;
		passObj.vip_level = $scope.company.vip_level==null?"free":$scope.company.vip_level;
		passObj.promote_maid_quota = $scope.company.promote_maid_quota==null?0:$scope.company.promote_maid_quota;
		
		if(downloadUrl!=null){
			passObj.imgUrl = downloadUrl;
			db.ref('companies/' + $scope.companyId).update(passObj).then(function () {
				  alert("Update Success");
				  console.log("Update Success");
				  $scope.company.imgUrl = downloadUrl;
				  $scope.$apply();
				  location.reload();
			  });
		}else{
			db.ref('companies/' + $scope.companyId).update(passObj).then(function () {
				  alert("Update Success");
				  console.log("Update Success");
				  location.reload();
			  });
		}
		for(var i in currentBranchList){
			db.ref('branches/').child(i).remove();
		}
		var branchList = getBranchList();
		var mainBranch = new Object();
		mainBranch.address = $scope.company.address;
		mainBranch.district = $scope.company.district;
		mainBranch.email = $scope.company.email;
		mainBranch.tele_1 = $scope.company.tele_1;
		mainBranch.tele_2 = $scope.company.tele_2;
		mainBranch.imgUrl = $scope.company.imgUrl;
		mainBranch.isMain = true;
		branchList.push(mainBranch);
		
		for(var i in branchList){
			branchList[i].companyId = $scope.companyId;
			branchList[i].imgUrl = $scope.company.imgUrl;
			db.ref('branches/').push(branchList[i]).then(function () {
				  console.log("Update Success");
			});
		}
		
		//If there is changes on Maid fee, need to batch update
		if($scope.previousObj.ph_fee!=$scope.company.ph_fee || 
				$scope.previousObj.idon_fee!=$scope.company.idon_fee ||
					$scope.previousObj.other_fee!=$scope.company.other_fee){
			var ref = firebase.database().ref().child("maids").orderByChild("companyId").equalTo($scope.companyId);
			var myMaids = $firebaseArray(ref);
			myMaids.$loaded()
		    .then(function(){
		        angular.forEach(myMaids, function(maid) {
		        	var feeObj;
		        	if(maid.country=="philippines"){
		        		feeObj = {
								"fee": $scope.company.ph_fee
							}
		        	}else if(maid.country=="indonesia"){
		        		feeObj = {
								"fee": $scope.company.idon_fee
							}
		        	}else{
		        		feeObj = {
								"fee": $scope.company.other_fee
							}
		        	}
		        	db.ref('maids/' + maid.$id).update(feeObj);
		        })
		    });
		}
		
	}
});

function addBranch(){
	//var initHtml = $('#branchListDiv').html();
	$('#branchListDiv').append("<div class='col-sm-12'></div>" +
			"<div class='col-sm-2'><select id='district"+ branch_counter +"' class='form-control' name='branch_district' placeholder='Location' value='' required='' ></select></div>"
			+ "<div class='col-sm-10'><input id='address"+ branch_counter +"' type='text' name='branch_address' placeholder='Location' value='' required='' /></div>"
			+ "<div class='col-sm-5'>"
			+"<input id='email"+ branch_counter +"' type='text' name='branch_email' placeholder='Email' value='' />"
			+ "</div>"
			+ "<div class='col-sm-2'>"
			+"<input id='tele_1"+ branch_counter +"' type='text' name='branch_tele_1' placeholder='Company Phone' value='' />"
			+ "</div>"
			+ "<div class='col-sm-2'>"
			+"<input id='tele_2"+ branch_counter +"' type='text' name='branch_tele_2' placeholder='Mobile Phone' value='' /></div>"
			+ "</div>"
			+ "<div class='col-sm-3'><button id='deleteBtn"+ branch_counter +"' class='btn_style' onclick='deleteBranch("+ branch_counter +")'>Delete</button></div>"
			//+"<div class='col-sm-1' id='deleteBtn"+ counter +"'><a class='domper-form-btn' href='javascript:deleteWorkExp("+ counter +")'>Delete</a></div"
	);
	appendDistrictList("district"+ branch_counter, "");
	branch_counter++;
}

function deleteBranch(index){
	$("#address"+index).remove();
	$("#district"+index).remove();
	$("#email"+index).remove();
	$("#tele_1"+index).remove();
	$("#tele_2"+index).remove();
	$("#deleteBtn"+index).remove();
}

function initBranch(list){
	var counter = 1;
	$('#branchListDiv').html("");
	for(var i in list){
		if(list[i].isMain!=true){
			$('#branchListDiv').append("<div class='col-sm-12'></div>" +	
					"<div class='col-sm-2'><select id='district"+ counter +"' class='form-control' name='branch_district' placeholder='Location' value='" + list[i].district + "' required='' ></select></div>"
					+ "<div class='col-sm-10'><input id='address"+ counter +"' type='text' name='branch_address' placeholder='Location' value='" + list[i].address + "' required='' /></div>"
					+ "<div class='col-sm-5'>"
					+"<input id='email"+ counter +"' type='text' name='branch_email' placeholder='Email' value='" + list[i].email + "'  />"
					+ "</div>"
					+ "<div class='col-sm-2'>"
					+"<input id='tele_1"+ counter +"' type='text' name='branch_tele_1' placeholder='Company Phone' value='" + list[i].tele_1 + "' />"
					+ "</div>"
					+ "<div class='col-sm-2'>"
					+"<input id='tele_2"+ counter +"' type='text' name='branch_tele_2' placeholder='Mobile Phone' value='" + list[i].tele_2 + "' /></div>"
					+ "</div>"
					+ "<div class='col-sm-3'><button id='deleteBtn"+ counter +"' class='btn_style' onclick='deleteBranch("+ counter +")'>Delete</button></div>"
					//+"<div class='col-sm-1' id='deleteBtn"+ counter +"'><a class='domper-form-btn' href='javascript:deleteWorkExp("+ counter +")'>Delete</a></div"
			);
			appendDistrictList("district"+ counter,list[i].district);
			counter++;
		}
	}
	branch_counter = counter;
	
}

function appendDistrictList(element_id, selectedVal){
	var districtValues_cn = {
			"centralWestern":"中西區",
			"wanchai":"灣仔",
			"eastern":"東區",
			"southern":"南區",
			"kowloonCity":"九龍城",
			"wongTaiSin":"黃大仙",
			"kuwnTong":"觀塘",
			"yauTsimMong":"油尖旺",
			"shamShuiPo":"深水埗",
			"tsuenWan":"荃灣",
			"kwaiTsing":"葵青",
			"saiKung":"西貢",
			"shatin":"沙田",
			"taiPo":"大埔",
			"northern":"北區",
			"tuenMun":"屯門",
			"yuenLong":"元朗",
			"islands":"離島區"
	};
	
	var districtValues_en = {
			"centralWestern":"Central & Western District",
			"wanchai":"Wan Chai",
			"eastern":"Eastern District",
			"southern":"Southern District",
			"kowloonCity":"Kowloon City",
			"wongTaiSin":"Wong Tai Sin",
			"kuwnTong":"Kuwn Tong",
			"yauTsimMong":"Yau Tsim Mong",
			"shamShuiPo":"Sham Shui Po",
			"tsuenWan":"Tsuen Wan",
			"kwaiTsing":"Kwai Tsing",
			"saiKung":"Sai Kung",
			"shatin":"Sha Tin",
			"taiPo":"Tai Po",
			"northern":"Northern District",
			"tuenMun":"Tuen Mun",
			"yuenLong":"Yuen Long",
			"islands":"Islands"
	};
	
	var districtValues;
	var userLang = navigator.language || navigator.userLanguage; 
	if(userLang.includes("en")){
		districtValues = districtValues_en;
	}else{
		districtValues = districtValues_cn;
	}
	
	$.each(districtValues, function(key, value) {   
	     $('#'+element_id)
	         .append($("<option></option>")
	                    .attr("value",key)
	                    .text(value)); 
	});
	$('#'+element_id).val(selectedVal);
}

function getBranchList(){
	var branchList = [];
	var address =  $('[name=branch_address]');
	var district =  $('[name=branch_district]');
	var email =  $('[name=branch_email]');
	var tele_1 =  $('[name=branch_tele_1]');
	var tele_2 =  $('[name=branch_tele_2]');
	for(var i=0; i<address.length;i++){
		var obj = new Object();
		obj.address = address[i].value;
		obj.district = district[i].value;
		obj.email = email[i].value;
		obj.tele_1 = tele_1[i].value;
		obj.tele_2 = tele_2[i].value;
		obj.isMain = false;
		branchList.push(obj);
	}

	return branchList;
}

function initSer(serList , specSerList){
	for(var i in serList){
		$("#"+ serList[i]).prop('checked', true);
	}
	for(var i in specSerList){
		$("#"+ specSerList[i]).prop('checked', true);
	}
}

function getSerList(){
	var serList = [];
	for(var i=1; i<=13;i++){
		if($("#ser"+i).is(":checked"))
			serList.push("ser"+i);
	}
	return serList;
}

function getSpecSerList(){
	var specSerList = [];
	for(var i=1; i<=3;i++){
		if($("#specSer"+i).is(":checked"))
			specSerList.push("specSer"+i);
	}
	return specSerList;
}

function getWorkExpList(){
	var workExpList = [];
	var locationList =  $('[name=wrkExp_location]');
	var dutyList =  $('[name=wrkExp_duty]');
	var fromList =  $('[name=wrkExp_from]');
	var toList =  $('[name=wrkExp_to]');
	for(var i=0; i<locationList.length;i++){
		var obj = new Object();
		obj.location = locationList[i].value;
		obj.majorJob = dutyList[i].value;
		obj.from = fromList[i].value;
		obj.to = toList[i].value;
		workExpList.push(obj);
	}
	return workExpList;
}

function uploadImage(){
	const file = document.querySelector('#companyBanner').files[0];
	const name = file.name;
	const metadata = {
	  contentType: file.type
	};
	if(file.type!="jpg" && file.type!="png"
		&& file.type!="JPG" && file.type!="PNG"
			&& file.type!="jpeg" && file.type!="JPEG"){
		alert("Only Image File(.jpg/.jpeg/.png) is allowed");
		return;
	}

	// File or Blob named mountains.jpg

	// Upload file and metadata to the object 'images/mountains.jpg'
	var uploadTask = storageRef.child('companies/' + file.name).put(file, metadata);

	// Listen for state changes, errors, and completion of the upload.
	uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
	  function(snapshot) {
	    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	    console.log('Upload is ' + progress + '% done');
	    switch (snapshot.state) {
	      case firebase.storage.TaskState.PAUSED: // or 'paused'
	        console.log('Upload is paused');
	        break;
	      case firebase.storage.TaskState.RUNNING: // or 'running'
	        console.log('Upload is running');
	        break;
	    }
	  }, function(error) {

	  // A full list of error codes is available at
	  // https://firebase.google.com/docs/storage/web/handle-errors
	  switch (error.code) {
	    case 'storage/unauthorized':
	      // User doesn't have permission to access the object
	      break;

	    case 'storage/canceled':
	      // User canceled the upload
	      break;

	    case 'storage/unknown':
	      // Unknown error occurred, inspect error.serverResponse
	      break;
	  }
	}, function() {
	  // Upload completed successfully, now we can get the download URL
	  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
	    console.log('File available at', downloadURL);
	  });
	});
}

