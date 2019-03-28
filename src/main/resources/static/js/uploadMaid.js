var app = angular.module("sampleApp", ["firebase"]);
var db = firebase.database();
var auth = firebase.auth();
var storageRef = firebase.storage().ref();
var work_exp_list_counter = 0;

$(document).ready(function() {
	//appendSkillList('skill-select');
	$('#skill-select').multiSelect();
	constructDateTimePicker("birthday","DD-MM-YYYY", "months");
	constructDateTimePicker("work_date","DD-MM-YYYY", "months");
	
});

app.controller("SampleCtrl", function($scope, $firebaseArray) {
	
	$scope.itemObj = {};
	$scope.editingId = null;
	$scope.userId = null;
	$scope.before_quota = 0;
	
	auth.onAuthStateChanged(function(user) {
	  if (user) {
	    console.log(user);
	    $scope.switchToCreate();
	    $scope.userId = user.uid;
	    db.ref('/companies/' + user.uid).once('value').then(function(snapshot) {
	    	$scope.company = snapshot.val();
	    	$scope.before_quota = $scope.company.promote_maid_quota;
	    	$scope.initCheckBoxListener();
		});
	    var ref = firebase.database().ref().child("maids").orderByChild("companyId").equalTo(user.uid);
	  	$scope.maids = $firebaseArray(ref);
	  	$("#welcome").html("Welcome, " + user.email);
		$("#logout-link").show();
		$("#login-link").hide();
		$("#uploadMaidsDiv").show();
		$("#pleaseLoginDiv").hide();
	  } else {
	    // No user is signed in.
		  console.log("No user sign in");
		  $("#logout-link").hide();
		  $("#login-link").show();
		  $("#uploadMaidsDiv").hide();
		  $("#pleaseLoginDiv").show();
	  }
	});
	
	$scope.switchToCreate = function(){
		  $scope.editingId = null;
		  $scope.itemObj.name = "";
		  $scope.itemObj.language = [];
		  $scope.itemObj.now_at = "";
		  $scope.itemObj.available_work_date = "";
		  $scope.itemObj.working_exp_yr = "";
		  $scope.itemObj.country = "";
		  $scope.itemObj.country = "";
		  $scope.itemObj.sex = "";
		  $scope.itemObj.age = "";
		  $scope.itemObj.birthday = "";
		  $scope.itemObj.height = "";
		  $scope.itemObj.weight = "";
		  $scope.itemObj.religion = "";
		  $scope.itemObj.marital_status = "single";
		  $scope.itemObj.no_of_children = "";
		  $scope.itemObj.isPromoted = "N";
		  $scope.itemObj.isEmployed = "N";
		  $scope.itemObj.preferJob = "";
		  $('#uploadImageFile').val("");
		  $('#skill-select').val("");
		  $('#skill-select').multiSelect();
		  $scope.itemObj.intro = "";
		  if($scope.company!=null)
			  $scope.company.promote_maid_quota = $scope.before_quota;
		  var empty_working_exps = [];
		  $scope.working_exps = empty_working_exps;
		  initWorkExp(empty_working_exps);
		  initPromoteMaid("N");
	}

  	$scope.name;
  
	$scope.searchByName = function(a){
		console.log(a);
		var ref = firebase.database().ref().child("maids").orderByChild("name").startAt(a)
		.endAt(a+"\uf8ff");
	  	$scope.maids = $firebaseArray(ref);
	};

	$scope.selectEditItem = function(a){
		  console.log(a);
		  $scope.editingId = a.$id;
		  $scope.itemObj.name = a.name;
		  if(a.language!=null && a.language!=""){
			  $scope.itemObj.language = a.language.split(',');
		  }else{
			  $scope.itemObj.language = "";
		  }
		  $scope.itemObj.now_at = a.now_at;
		  $scope.itemObj.available_work_date = a.available_work_date;
		  $scope.itemObj.working_exp_yr = a.working_exp_yr;
		  $scope.itemObj.country = a.country;
		  $scope.itemObj.sex = a.sex;
		  $scope.itemObj.age = a.age;
		  $scope.itemObj.birthday = a.birthday;
		  $scope.itemObj.height = a.height;
		  $scope.itemObj.weight = a.weight;
		  $scope.itemObj.religion = a.religion;
		  $scope.itemObj.marital_status = a.marital_status;
		  $scope.itemObj.no_of_children = a.no_of_children;
		  $scope.itemObj.isPromoted = a.isPromoted;
		  $scope.itemObj.isEmployed = a.isEmployed;
		  $scope.itemObj.preferJob = a.preferJob;
		  if($scope.company!=null)
			  $scope.company.promote_maid_quota = $scope.before_quota;
		  $('#uploadImageFile').val("");
		  if(a.skills!=null && a.skills!=""){
			  $('#skill-select').val(a.skills.split(','));
			  $('#skill-select').multiSelect();
		  }
		  $scope.itemObj.intro = a.intro;
		  initWorkExp(a.working_exps);
		  initPromoteMaid(a.isPromoted);
	};
	
	$scope.promoteChecker = function(){
		if($scope.itemObj.isPromoted!='N'){
			return false;
		}else if($scope.company.promote_maid_quota==0){
			return true;
		}
	}
	
	$scope.changeScreen = function(a){
		if($scope.editingId!=null && $scope.editingId == a.$id)
			return "2px solid green";
		else
			return "";
	}
	
	$scope.removeItem = function(a){
		  var r=confirm("Are you sure to delete the record?")
		  if (r==true){
			  var removeKey = a.$id;
			  db.ref("maids/" + removeKey).remove();
		  }else{
			  console.log("OK fine");
		  }
	};
	
	$scope.initCheckBoxListener = function(){
		$('input#isPromote').click(function () {
		    if ($('input#isPromote').is(':checked')) {
		    	$scope.company.promote_maid_quota--;
		    	$scope.itemObj.isPromoted = "Y"
		    } else {
		    	$scope.company.promote_maid_quota++;
		    	$scope.itemObj.isPromoted = "N"
		    }
		    $scope.$apply();
		});
	}
	
	$scope.createItem = function(){
	  //UPload Image Part
	  const file = document.querySelector('#uploadImageFile').files[0];
	  if(file==null){
		  var passObj;
		  passObj = JSON.parse(JSON.stringify( $scope.itemObj ));
		  passObj.imgUrl = "https://firebasestorage.googleapis.com/v0/b/domper-c6ded.appspot.com/o/maids%2Fdefault_no_photo.png?alt=media&token=9d22bdde-86b3-49c7-a6d6-880f96018458";
		  passObj.skills = $('#skill-select').val()==null? "": $('#skill-select').val().join(",");
		  passObj.language =  passObj.language.join(",");
		  passObj.companyId = $scope.userId;
		  passObj.working_exps = getWorkExpList();
		  if($scope.company!=null){
			  passObj.companyName = $scope.company.name;
			  if(passObj.country=="philippines"){
				  passObj.fee = $scope.company.ph_fee;
				  if($("#isPromote").is(":checked")){
					  passObj.isPromoted = "PhilippinesY";
				  }
			  }else if(passObj.country=="indonesia") {
				  passObj.fee = $scope.company.idon_fee;
				  if($("#isPromote").is(":checked")){
					  passObj.isPromoted = "IndonesiaY";
				  }
			  }else{
				  passObj.fee = $scope.company.other_fee;
				  if($("#isPromote").is(":checked")){
					  passObj.isPromoted = "OtherY";
				  }
			  } 
		  }
			 
		  db.ref("maids").push(passObj).then(function () {
				 $scope.switchToCreate();
				 alert("Create Success");
		  });
	  }else{
			const name = file.name;
			const metadata = {
			  contentType: file.type
			};
	
			// File or Blob named mountains.jpg
	
			// Upload file and metadata to the object 'images/mountains.jpg'
			var uploadTask = storageRef.child('maids/' + file.name).put(file, metadata);
	
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
			    //Start
				  var passObj;
				  passObj = JSON.parse(JSON.stringify( $scope.itemObj ));
				  passObj.imgUrl = downloadURL;
				  passObj.skills = $('#skill-select').val()==null? "": $('#skill-select').val().join(",");
				  passObj.language =  passObj.language.join(",");
				  passObj.companyId = $scope.userId;
				  passObj.working_exps = getWorkExpList();
				  if($scope.company!=null){
					  passObj.companyName = $scope.company.name;
					  if(passObj.country=="philippines"){
						  passObj.fee = $scope.company.ph_fee;
						  if($("#isPromote").is(":checked")){
							  passObj.isPromoted = "PhilippinesY";
						  }
					  }else if(passObj.country=="indonesia") {
						  passObj.fee = $scope.company.idon_fee;
						  if($("#isPromote").is(":checked")){
							  passObj.isPromoted = "IndonesiaY";
						  }
					  }else{
						  passObj.fee = $scope.company.other_fee;
						  if($("#isPromote").is(":checked")){
							  passObj.isPromoted = "OtherY";
						  }
					  } 
				  }
					 
				  db.ref("maids").push(passObj).then(function () {
						 $scope.switchToCreate();
						 alert("Create Success");
				  });
			    //End
			  });
			});
	  }
	};
	
	$scope.editItem = function(){
		  //UPload Image Part
		  const file = document.querySelector('#uploadImageFile').files[0];
		  if(file!=null){
			  const name = file.name;
				const metadata = {
				  contentType: file.type
				};
				// Upload file and metadata to the object 'images/mountains.jpg'
				var uploadTask = storageRef.child('maids/' + file.name).put(file, metadata);
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
				    //Start
					  var passObj;
					  passObj = JSON.parse(JSON.stringify( $scope.itemObj ));
					  passObj.imgUrl = downloadURL;
					  passObj.skills = $('#skill-select').val()==null? "": $('#skill-select').val().join(",");
					  passObj.language =  passObj.language.join(",");
					  passObj.companyId = $scope.userId;
					  passObj.working_exps = getWorkExpList();
					  passObj.available_work_date = $('#work_date').val();
					  passObj.birthday = $('#birthday').val();
					  if($scope.company!=null){
						  passObj.companyName = $scope.company.name;
						  if(passObj.country=="philippines"){
							  passObj.fee = $scope.company.ph_fee;
							  if($("#isPromote").is(":checked")){
								  passObj.isPromoted = "PhilippinesY";
							  }
						  }else if(passObj.country=="indonesia") {
							  passObj.fee = $scope.company.idon_fee;
							  if($("#isPromote").is(":checked")){
								  passObj.isPromoted = "IndonesiaY";
							  }
						  }else{
							  passObj.fee = $scope.company.other_fee;
							  if($("#isPromote").is(":checked")){
								  passObj.isPromoted = "OtherY";
							  }
						  } 
					  }
					  db.ref("maids/"+ $scope.editingId).update(passObj).then(function () {
							 alert("Edit Success");
					  });
				    //End
				  });
				});
		  }else{
			  var passObj;
			  passObj = JSON.parse(JSON.stringify( $scope.itemObj ));
			  //if($scope.itemObj.imgUrl!=null && $scope.itemObj.imgUrl!=""){
		      delete passObj.imgUrl; //It means not to update imgUrl
			  //}else{
			  //	 $scope.itemObj.imgUrl = "https://firebasestorage.googleapis.com/v0/b/domper-c6ded.appspot.com/o/maids%2Fdefault_no_photo.png?alt=media&token=9d22bdde-86b3-49c7-a6d6-880f96018458";
			  //}
			  passObj.language = passObj.language.join(",");
			  passObj.skills = $('#skill-select').val()==null? "": $('#skill-select').val().join(",");
			  passObj.companyId = $scope.userId;
			  passObj.available_work_date = $('#work_date').val();
			  passObj.birthday = $('#birthday').val();
			  if($scope.company!=null){
				  passObj.companyName = $scope.company.name;
				  if(passObj.country=="philippines"){
					  passObj.fee = $scope.company.ph_fee;
					  if($("#isPromote").is(":checked")){
						  passObj.isPromoted = "PhilippinesY";
					  }
				  }else if(passObj.country=="indonesia") {
					  passObj.fee = $scope.company.idon_fee;
					  if($("#isPromote").is(":checked")){
						  passObj.isPromoted = "IndonesiaY";
					  }
				  }else{
					  passObj.fee = $scope.company.other_fee;
					  if($("#isPromote").is(":checked")){
						  passObj.isPromoted = "OtherY";
					  }
				  } 
			  }
			  passObj.working_exps = getWorkExpList();
			  db.ref("maids/"+ $scope.editingId).update(passObj).then(function () {
				  if($scope.before_quota != $scope.company.promote_maid_quota){
					  db.ref("companies/"+ $scope.userId).update(
					  {"promote_maid_quota": $scope.company.promote_maid_quota
					  }).then(function () {
						  $scope.before_quota = $scope.company.promote_maid_quota;
					  });
				  }
				  alert("Edit Success");
			  });
		  }	
	};
});


function showWorkExpPage(){
	$('#workExp-modal').modal('show');
}

function addWorkingExp(){
	$('#workExpDiv').append(
			"<div class='col-sm-3'><select id='location"+ work_exp_list_counter +"' name='wrkExp_location' class='form-control'/></div>"
			+"<div class='col-sm-3'><select id='duty"+ work_exp_list_counter + "' name='wrkExp_duty' class='form-control'></select></div>"
			+"<div class='col-sm-2'><input id='from"+ work_exp_list_counter +"' style='width:90px;' type='text' name='wrkExp_from' placeholder='From' required='' /></div>"
			+"<div class='col-sm-2'><input id='to"+ work_exp_list_counter +"' style='width:90px;' type='text' name='wrkExp_to' placeholder='To' required='' /></div>"			
			+ "<div class='col-sm-2'><button id='deleteBtn"+ work_exp_list_counter +"' class='btn_style' onclick='deleteWorkExp("+ work_exp_list_counter +")'>Delete</button></div>"
	);
	appendDutyList("duty" + work_exp_list_counter);
	appendWorkLocationList("location" + work_exp_list_counter);
	work_exp_list_counter++;
}

function deleteWorkExp(index){
	$("#location"+index).remove();
	$("#duty"+index).remove();
	$("#from"+index).remove();
	$("#to"+index).remove();
	$("#deleteBtn"+index).remove();
}

function initWorkExp(workExpList){
	console.log(workExpList);
	var counter = 1;
	$('#workExpDiv').html("");
	for(var i in workExpList){
		$('#workExpDiv').append(
				"<div class='col-sm-3'><select id='location"+ counter +"'  class='form-control' name='wrkExp_location' /></div>"
				+"<div class='col-sm-3'><select id='duty"+ counter + "' class='form-control' name='wrkExp_duty'></select></div>"
				+"<div class='col-sm-2'><input id='from"+ counter +"' type='text' style='width:90px;' name='wrkExp_from' placeholder='From' value='" + workExpList[i].from + "' required='' /></div>"
				+"<div class='col-sm-2'><input id='to"+ counter +"' type='text' style='width:90px;' name='wrkExp_to' placeholder='To' value='" + workExpList[i].to + "' required='' /></div>"
				+ "<div class='col-sm-2'><button id='deleteBtn"+ counter +"' class='btn_style' onclick='deleteWorkExp("+ counter +")'>Delete</button></div>"
		);
		appendDutyList("duty" + counter);
		appendWorkLocationList("location" + counter);
		$("#duty"+counter).val(workExpList[i].majorJob);
		$("#location"+counter).val(workExpList[i].location);
		counter++;
	}
	work_exp_list_counter = counter;
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

function listMaid(){
	var starCountRef = firebase.database().ref('maids');
	starCountRef.on('value', function(snapshot) {
	  console.log(snapshot.val());
	});
}


$("#age").change(function(event) {
	  console.log(event);
});

function appendSkillList(element_id){
	var skillValues_cn = {
			"takeCareBaby": "護理嬰兒",
			"takeCareKid": "護理幼童",
			"takeCareElderly": "護理長者",
			"takeCarePets": "護理寵物",
			"takeCareDisable": "護理傷殘",
			"medicalNursing" :"醫療看護",
			"useMedicine" : "使用醫療藥物", 
			"washCar": "洗車",
			"drive": "駕駛",
			"houseCleaning": "家居清潔",
			"Ironing": "熨衣服",
			"applianceUsage": "家居設備用法",
			"groceryShopping": "雜貨購物",
			"mealPreparation": "膳食準備",
			"chineseFood": "中餐",
			"westernFood": "西餐",
			"japaneseFood": "日本料理",
			"taiwanFood": "台灣美食",
			"indianFood": "印度菜",
			"homeFood": "家鄉菜"
	};
	
	var skillValues_en = {
			"takeCareBaby": "Care Baby",
			"takeCareKid": "Care Kids",
			"takeCareElderly": "Care Elderly",
			"takeCarePets": "Care Pets",
			"takeCareDisable": "Care Disable",
			"medicalNursing" :"Medical Nursing",
			"useMedicine" : "Medicine Instructions",
			"washCar": "Car Washing",
			"drive": "Driving",
			"houseCleaning": "Home Cleaning",
			"Ironing": "Ironing",
			"applianceUsage": "Household Appliance Usage",
			"groceryShopping": "Grocery Shopping",
			"mealPreparation": "Meal Preparation",
			"chineseFood": "Chinese Food",
			"westernFood": "Western Food",
			"japaneseFood": "Japanese Food",
			"taiwanFood": "Taiwan Food",
			"indianFood": "Indian Food",
			"homeFood": "Hometown Food"
	};
	
	var skillValues;
	var userLang = navigator.language || navigator.userLanguage; 
	if(userLang.includes("en")){
		skillValues = skillValues_en;
	}else{
		skillValues = skillValues_cn;
	}
	
	$.each(skillValues, function(key, value) {   
	     $('#'+element_id)
	         .append($("<option></option>")
	                    .attr("value",key)
	                    .text(value)); 
	});
}

function appendDutyList(element_id){
	var skillValues_cn = {
			"domesticHelper": "一般家務助理",
			"takeCareBaby": "照顧嬰兒",
			"takeCareElderly": "照顧長者",
			"takeCareDisable": "照顧傷殘",
			"medicalNursing" :"醫療看護",
			"drive": "駕駛",
			"other": "其他"
	};
	var skillValues_en = {
			"domesticHelper": "Domestic Helper",
			"takeCareBaby": "Take Care Baby",
			"takeCareElderly": "Take Care Elderly",
			"takeCareDisable": "Take Care Disable",
			"medicalNursing" :"Medical Nursing",
			"drive": "Drive",
			"other": "Other"
	};
	
	var skillValues;
	var userLang = navigator.language || navigator.userLanguage; 
	if(userLang.includes("en")){
		skillValues = skillValues_en;
	}else{
		skillValues = skillValues_cn;
	}
	
	$.each(skillValues, function(key, value) {   
	     $('#'+element_id)
	         .append($("<option></option>")
	                    .attr("value",key)
	                    .text(value)); 
	});
}

function appendWorkLocationList(element_id){
	var values_cn = {
			"hongkong" : "香港",
			"china" : "中國",
			"taiwan" : "台灣",
			"singapore" : "新加坡",
			"others": "其他"
	};
	var values_en = {
			"hongkong" : "Hong Kong",
			"china" : "China",
			"taiwan" : "Taiwan",
			"singapore" : "Singapore",
			"others": "Other"
	};
	
	var values;
	var userLang = navigator.language || navigator.userLanguage; 
	if(userLang.includes("en")){
		values = values_en;
	}else{
		values = values_cn;
	}
	
	$.each(values, function(key, value) {   
	     $('#'+element_id)
	         .append($("<option></option>")
	                    .attr("value",key)
	                    .text(value)); 
	});
}

function constructDateTimePicker(id, format, viewMode){
	$("#"+id).datetimepicker({
		format: format,
		viewMode: viewMode
	});
}

function initPromoteMaid(promoteValue){
	if(promoteValue.slice(-1)=="Y"){
		$("#isPromote").prop('checked', true);
	}else{
		$("#isPromote").prop('checked', false);
	}
}

