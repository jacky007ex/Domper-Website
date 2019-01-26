var app = angular.module("sampleApp", ["firebase"]);
var db = firebase.database();
var auth = firebase.auth();
var storageRef = firebase.storage().ref();
var currentBranchList = [];
var branch_counter = 0;

app.controller("CompanyCtrl", function($scope, $firebaseArray) {
	$scope.company;
	$scope.companyId;
	
	auth.onAuthStateChanged(function(companyUser) {
	  if (companyUser) {
		$scope.companyId = companyUser.uid;
	    db.ref('/companies/' + companyUser.uid).once('value').then(function(snapshot) {
    	  console.log(snapshot.val());
    	  $scope.company = snapshot.val();
    	  $scope.$apply();
    	  appendDistrictList("main_district", $scope.company.district);
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
		if(downloadUrl!=null){
			db.ref('companies/' + $scope.companyId).update({
			    name : $scope.company.name,
			    address : $scope.company.address,
			    district : $("#main_district").val(),
			    email : $scope.company.email,
			    website : $scope.company.webSite,
			    tele_1 : $scope.company.tele_1,
			    tele_2 : $scope.company.tele_2,
			    desc : $scope.company.desc,
			    imgUrl : downloadUrl,
			  }).then(function () {
				  alert("Update Success");
				  console.log("Update Success");
				  $scope.company.imgUrl = downloadUrl;
				  $scope.$apply();
				  location.reload();
			  });
		}else{
			db.ref('companies/' + $scope.companyId).update({
			    name : $scope.company.name,
			    address : $scope.company.address,
			    district : $("#main_district").val(),
			    email : $scope.company.email,
			    website : $scope.company.webSite,
			    tele_1 : $scope.company.tele_1,
			    tele_2 : $scope.company.tele_2,
			    desc : $scope.company.desc
			  }).then(function () {
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
		mainBranch.address = $scope.company.address
		mainBranch.district = $scope.company.district
		mainBranch.email = $scope.company.email
		mainBranch.tele_1 = $scope.company.tele_1
		mainBranch.tele_2 = $scope.company.tele_2
		mainBranch.isMain = true;
		branchList.push(mainBranch);
		
		for(var i in branchList){
			branchList[i].companyId = $scope.companyId;
			db.ref('branches/').push(branchList[i]).then(function () {
				  console.log("Update Success");
			});
		}
	}
});

function addBranch(){
	//var initHtml = $('#branchListDiv').html();
	$('#branchListDiv').append("<div class='col-sm-12'></div>" +
			"<div class='col-sm-2'><select id='district"+ branch_counter +"' class='form-control' name='branch_district' placeholder='Location' value='' required='' ></select></div>"
			+ "<div class='col-sm-10'><input id='address"+ branch_counter +"' type='text' name='branch_address' placeholder='Location' value='' required='' /></div>"
			+ "<div class='col-sm-3'>"
			+"<input id='email"+ branch_counter +"' type='text' name='branch_email' placeholder='Email' value='' required='' />"
			+ "</div>"
			+ "<div class='col-sm-3'>"
			+"<input id='tele_1"+ branch_counter +"' type='text' name='branch_tele_1' placeholder='Company Phone' value='' required='' />"
			+ "</div>"
			+ "<div class='col-sm-3'>"
			+"<input id='tele_2"+ branch_counter +"' type='text' name='branch_tele_2' placeholder='Mobile Phone' value='' required='' /></div>"
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
			var initHtml = $('#branchListDiv').html();
			$('#branchListDiv').html( initHtml + "<div class='col-sm-12'></div>" +	
					"<div class='col-sm-2'><select id='district"+ counter +"' class='form-control' name='branch_district' placeholder='Location' value='" + list[i].district + "' required='' ></select></div>"
					+ "<div class='col-sm-10'><input id='address"+ counter +"' type='text' name='branch_address' placeholder='Location' value='" + list[i].address + "' required='' /></div>"
					+ "<div class='col-sm-3'>"
					+"<input id='email"+ counter +"' type='text' name='branch_email' placeholder='Email' value='" + list[i].email + "' required='' />"
					+ "</div>"
					+ "<div class='col-sm-3'>"
					+"<input id='tele_1"+ counter +"' type='text' name='branch_tele_1' placeholder='Company Phone' value='" + list[i].tele_1 + "' required='' />"
					+ "</div>"
					+ "<div class='col-sm-3'>"
					+"<input id='tele_2"+ counter +"' type='text' name='branch_tele_2' placeholder='Mobile Phone' value='" + list[i].tele_2 + "' required='' /></div>"
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
	var districtValues = {
			"hongKongIsland":"港島",
			"centralWestern":"中西區",
			"wanchai":"灣仔",
			"eastern":"東區",
			"southern":"南區",
			"kowloon":"九龍",
			"kowloonCity":"九龍城",
			"wongTaiSin":"黃大仙",
			"kuwnTong":"觀塘",
			"yauTsimMong":"油尖旺",
			"shamShuiPo":"深水埗",
			"newTerritories":"新界",
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
			"hongKongIsland":"Hong Kong Island",
			"centralWestern":"Central & Western District",
			"wanchai":"Wan Chai",
			"eastern":"Eastern District",
			"southern":"Southern District",
			"kowloon":"Kowloon",
			"kowloonCity":"Kowloon City",
			"wongTaiSin":"Wong Tai Sin",
			"kuwnTong":"Kuwn Tong",
			"yauTsimMong":"Yau Tsim Mong",
			"shamShuiPo":"Sham Shui Po",
			"newTerritories":"NewTerritories",
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

function uploadImage(){
	const file = document.querySelector('#companyBanner').files[0];
	const name = file.name;
	const metadata = {
	  contentType: file.type
	};

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

