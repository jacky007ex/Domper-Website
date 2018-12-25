<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!doctype html>
<html class="no-js" lang="zxx" ng-app="sampleApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Domper</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" type="image/ico" href="img/logo/favicon_.ico" />
        <!-- Place favicon.ico in the root directory -->
		
		
		<!-- all css here -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/magnific-popup.css">
        <link rel="stylesheet" href="css/owl.carousel.min.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/flaticon.css">
        <link rel="stylesheet" href="css/ionicons.min.css">
        <link rel="stylesheet" href="css/headline.css">
        <link rel="stylesheet" href="css/animate.min.css">
        <link rel="stylesheet" href="css/material-design-iconic-font.min.css">
        <link rel="stylesheet" href="css/meanmenu.css">
        <link rel="stylesheet" href="css/Pe-icon-7-stroke.css">
        <link rel="stylesheet" href="css/bundle.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">
        <link rel="stylesheet" href="css/domper.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
		<header>
			<!-- header-top-area-start -->
			<div class="header-top-area">
				<div class="container">
					<div class="row">
						<div class="col-md-6 hidden-sm hidden-xs">
							<div class="header-left">
								<ul class="header-left-text">
									<li><a href="#">Open Hours</a> : 8.00 - 18.00 Mon-Sat</li>
								</ul>
								<ul class="header-left-text">
									<li><a href="#">Contact</a> : 0 (500) 123-782</li> 
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-sm-12 col-xs-12">
							<div class="header-icon">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								<a href="#"><i class="fa fa-instagram"></i></a>
								<a href="#"><i class="fa fa-pinterest-p"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- header-top-area-end -->
			<!-- main-menu-area-start -->
			<div class="main-menu-area">
				<div class="container">
					<div class="row">
						<div class="col-md-2">
						</div>
						<div class="col-md-10">
						<div class="get-a-quote floatright hidden-sm hidden-xs">
								<a href="javascript:showLoginPage()">Log In</a>
							</div>
							<div class="main-menu floatright">
								<nav>
									<ul>
										<li><a href="home">home</a>
											<!-- <ul class="sub-menu">
												<li><a href="index.html">Home 01</a></li>
												<li><a href="index-2.html">Home 02</a></li>
												<li><a href="index-3.html">Home 03</a></li>
												<li><a href="index-box.html">Home Box</a></li>
											</ul> -->
										</li>
										<li class="active"><a href="">service</a>
											<ul class="sub-menu">
												<li><a href="editCompany">Edit Company</a></li>
												<li><a href="uploadMaids">Upload Maids</a></li>
											</ul>
										</li>
										<li><a href="about.html">About Us</a></li>
										<!-- <li><a href="#">pages</a>
											<ul class="sub-menu">
												<li><a href="gallery.html">gallery</a></li>
												<li><a href="testimonial.html">testimonial</a></li>
											</ul>
										</li> -->
										<!-- <li><a href="blog-3-column.html">blog</a>
											<ul class="sub-menu">
												<li><a href="blog-3-column.html">blog-3-column</a></li>
												<li><a href="blog-left-sidebar.html">blog-left-sidebar</a></li>
												<li><a href="blog-right-sidebar.html">blog-right-sidebar</a></li>
												<li><a href="blog-no-sidebar.html">blog-no-sidebar</a></li>
												<li><a href="blog-details.html">blog-details</a></li>
												<li><a href="blog-details-no-sideber.html">blog-details-no-sideber</a></li>
											</ul>
										</li> -->
										<li><a href="contact.html">contact</a></li>
									</ul>
								</nav>
							</div>						
						</div>	
					<div class="col-xs-12"><div class="mobile-menu"></div></div>
				</div>
			</div>
		</div>
		<!-- main-menu-area-end -->
		</header>
			
			<div class="container">
				<div class="col-md-12" ng-controller="CompanyCtrl">
					<div class="works-title title mt-10 mb-10">
						<h3>Edit your Company Information</h3>
					</div>
					<div class="row">
					<form action="#" id="service-booking">
						<!--  Personal Information -->
						<div class="col-sm-12">
							<input id="companyBanner" type="file">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;Name
							<input type="text" ng-model="company.name">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;Company Address
							<input name="text" placeholder="" type="text">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;Phone Number
							<input name="text" placeholder="" type="text">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;Email
							<input id="age" name="text" placeholder="" type="text" >
						</div>
						<div class="col-sm-12">
							<textarea name="message" cols="30" rows="10" placeholder="Introduction" id="message"></textarea>
						</div>
														
						<button ng-click="updateCompany()">Update</button>
					</form>
					</div>
				</div>
			</div>
		
		<!-- service-booking-area-end -->
		
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
		<script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>
		<script>
		  // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyDIlCA-Lydkcv9xQTUQAfP_ZhXSDtGR83c",
		    authDomain: "domper-c6ded.firebaseapp.com",
		    databaseURL: "https://domper-c6ded.firebaseio.com",
		    projectId: "domper-c6ded",
		    storageBucket: "domper-c6ded.appspot.com",
		    messagingSenderId: "1098406345864"
		  };
		  firebase.initializeApp(config);
		</script>
		<!-- all js here -->
        <script src="js/vendor/jquery-1.12.0.min.js"></script>
        <script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/headline.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/jquery.scrollUp.min.js"></script>
        <script src="js/isotope.pkgd.min.js"></script>
        <script src="js/imagesloaded.pkgd.min.js"></script>
        <script src="js/jquery.counterup.min.js"></script>
        <script src="js/waypoints.min.js"></script>
        <script src="js/jquery.parallax-1.1.3.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.meanmenu.js"></script>
        <script src="js/ajax-mail.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/editCompany.js"></script>
    </body>
</html>