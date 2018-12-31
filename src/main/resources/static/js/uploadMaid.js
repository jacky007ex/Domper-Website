var app = angular.module("sampleApp", ["firebase"]);
var db = firebase.database();
var auth = firebase.auth();
var storageRef = firebase.storage().ref();

$(document).ready(function() {
	$('#skill-select').multiSelect()
});

app.controller("SampleCtrl", function($scope, $firebaseArray) {
	
	$scope.itemObj = {};
	$scope.editingId = null;
	$scope.userId = null;
	
	auth.onAuthStateChanged(function(user) {
	  if (user) {
	    console.log(user);
	    $scope.switchToCreate();
	    $scope.userId = user.uid;
	    var ref = firebase.database().ref().child("maids").orderByChild("companyId").equalTo(user.uid);
	  	$scope.maids = $firebaseArray(ref);
	  } else {
	    // No user is signed in.
	  }
	});
	
	$scope.switchToCreate = function(){
		  $scope.editingId = null;
		  $scope.itemObj.name = "";
		  $scope.itemObj.language = [];
		  $scope.itemObj.now_at = "";
		  $scope.itemObj.working_exp_yr = "";
		  $scope.itemObj.nationality = "";
		  $scope.itemObj.sex = "";
		  $scope.itemObj.age = "";
		  $scope.itemObj.birthday = "";
		  $scope.itemObj.height = "";
		  $scope.itemObj.weight = "";
		  $scope.itemObj.religion = "";
		  $scope.itemObj.marital_status = "single";
		  $scope.itemObj.no_of_children = "";
		  $('#skill-select').val("");
		  $('#skill-select').multiSelect();
		  $scope.itemObj.intro = "";
	}

  	$scope.name;
  
	$scope.searchByName = function(a){
		console.log($scope.name);
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
		  $scope.itemObj.working_exp_yr = a.working_exp_yr;
		  $scope.itemObj.nationality = a.nationality;
		  $scope.itemObj.sex = a.sex;
		  $scope.itemObj.age = a.age;
		  $scope.itemObj.birthday = a.birthday;
		  $scope.itemObj.height = a.height;
		  $scope.itemObj.weight = a.weight;
		  $scope.itemObj.religion = a.religion;
		  $scope.itemObj.marital_status = a.marital_status;
		  $scope.itemObj.no_of_children = a.no_of_children;
		  if(a.skills!=null && a.skills!=""){
			  $('#skill-select').val(a.skills.split(','));
			  $('#skill-select').multiSelect();
		  }
		  $scope.itemObj.intro = a.intro;
	};
	
	$scope.removeItem = function(a){
		  var r=confirm("Are you sure to delete the record?")
		  if (r==true){
			  var removeKey = a.$id;
			  db.ref("maids/" + removeKey).remove();
		  }else{
			  console.log("OK fine");
		  }
	};
	
	$scope.createItem = function(){
	  //UPload Image Part
	  const file = document.querySelector('#uploadImageFile').files[0];
	  if(file==null)
		  alert("Pleases Select Image to Upload");
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
			  passObj.skills = $('#skill-select').val().join(",");
			  passObj.language =  passObj.language.join(",");
			  passObj.companyId = $scope.userId;
			  db.ref("maids").push(passObj).then(function () {
					 $scope.switchToCreate();
					 alert("Create Success");
			  });
		    //End
		  });
		});
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
					  passObj.skills = $('#skill-select').val().join(",");
					  passObj.language =  passObj.language.join(",");
					  passObj.companyId = $scope.userId;
					  db.ref("maids/"+ $scope.editingId).update(passObj).then(function () {
							 alert("Edit Success");
					  });
				    //End
				  });
				});
		  }else{
			  var passObj;
			  passObj = JSON.parse(JSON.stringify( $scope.itemObj ));
			  delete passObj.imgUrl;
			  passObj.language = passObj.language.join(",");
			  passObj.skills = $('#skill-select').val().join(",");
			  passObj.companyId = $scope.userId;
			  db.ref("maids/"+ $scope.editingId).update(passObj).then(function () {
					 alert("Edit Success");
			  });
		  }	
	};
});




function listMaid(){
	var starCountRef = firebase.database().ref('maids');
	starCountRef.on('value', function(snapshot) {
	  console.log(snapshot.val());
	});
}


$("#age").change(function(event) {
	  console.log(event);
});



