var db = firebase.database();
var auth = firebase.auth();
var createUser = false;

auth.onAuthStateChanged(function(user) {
  if (user) {
	  if(createUser){
		  db.ref('companies/' + user.uid).update({
			    email: user.email,
			    name : "Testing Company"
			  });
	  }else{
		  $("#welcome").html("Welcome, " + user.email);
		  $("#logout-link").show();
		  $("#login-link").hide();
	  }
  } else {
    console.log("No user sign in");
    $("#logout-link").hide();
	$("#login-link").show();
  }
});

function showLoginPage(){
	$('#login-modal').modal('show');
}

function showSignup(){
	$('#signinForm').hide();
	$('#signupForm').show();
}

function showLogin(){
	$('#signinForm').show();
	$('#signupForm').hide();
}

function register(){
	var registerObj = {};
	registerObj.companyName = $('#companyName').val();
	registerObj.userName = $('#userName').val();
	registerObj.address = $('#address').val();
	registerObj.phone = $('#phone').val();
	registerObj.email = $('#email').val();
	firebase.database().ref().child("application/").push(registerObj).then(function () {
		  console.log("Update Success");
		  $('#login-modal').modal('hide');
		  alert("We will contact you by Email after account approval. The process will require 1-2 working days.");
	  });
}

function signup(){
	createUser = true;
	firebase.auth().createUserWithEmailAndPassword($("#userName").val(), $("#userPw").val())
	.then(
		function() {
			$('#login-modal').modal('hide');
		}
	)
	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	  alert(errorMessage);
	  // ...
	});
}

function signin(){
	createUser = false;
	firebase.auth().signInWithEmailAndPassword($("#loginName").val(), $("#userPw").val())
	.then(
		function() {
			$('#login-modal').modal('hide');
		}
	)
	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	  alert(errorMessage);
	  // ...
	});
}

function logout(){
	firebase.auth().signOut()
	  .then(function() {
		  $("#logout-link").hide();
		  $("#login-link").show();
		  $("#welcome").html("");
	  })
	  .catch(function(error) {
	    // An error happened
		  console.log(error);
	  });
}


function testFunct(){

	return db.ref('/users/' + 'gaqDdLK1UqV12EQlndnRBMDYAe62/collection').once('value').then(function(snapshot) {
		  var username = snapshot.val() // && snapshot.val().username) || 'Anonymous';
		  console.log(username);
		});
}