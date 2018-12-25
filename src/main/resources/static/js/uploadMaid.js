var app = angular.module("sampleApp", ["firebase"]);
var db = firebase.database();
var auth = firebase.auth();

$(document).ready(function() {
	$('#my-select').multiSelect()
});

app.controller("SampleCtrl", function($scope, $firebaseArray) {
	
	$scope.itemObj = {};
	$scope.editingId = null;
	
	auth.onAuthStateChanged(function(user) {
	  if (user) {
	    console.log(user);
	    $scope.switchToCreate();
	    var ref = firebase.database().ref().child("maids").orderByChild("companyId").equalTo(user.uid);
	  	$scope.maids = $firebaseArray(ref);
	  } else {
	    // No user is signed in.
	  }
	});
	
	$scope.switchToCreate = function(){
		  $scope.editingId = null;
		  $scope.itemObj.name = "";
		  $scope.itemObj.language = "";
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
		  $scope.itemObj.skills = "";
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
		  $scope.itemObj.language = a.language;
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
		  $scope.itemObj.skills = a.skills;
		  $scope.itemObj.intro = a.intro;
	};
	
	$scope.removeItem = function(a){
	  
	};
	
	$scope.createItem = function(){
		  
	};
	
	$scope.editItem = function(){
		  
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



