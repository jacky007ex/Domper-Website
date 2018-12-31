var app = angular.module("sampleApp", ["firebase"]);
var db = firebase.database();
var auth = firebase.auth();
var storageRef = firebase.storage().ref();


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
	    });
	  } else {
	    // No user is signed in.
	  }
	});
	
	$scope.updateCompany = function(){
		db.ref('companies/' + $scope.companyId).update({
		    name : $scope.company.name
		  }).then(function () {
			  console.log("Update Success");
		  });
	};
  
});


function uploadImage(){
	const file = document.querySelector('#companyBanner').files[0]
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

