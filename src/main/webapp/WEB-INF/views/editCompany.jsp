<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="spring"  uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form"    uri="http://www.springframework.org/tags/form" %>
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
									<li id="welcome"></li>
								</ul>
								<ul class="header-left-text">
									<li>Contact Us : info@skylartech.net</li>  
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-sm-12 col-xs-12">
							<div class="header-icon">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-instagram"></i></a>
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
								<a id="login-link" style="display:none;" href="javascript:showLoginPage()"><spring:message code="label.log_in" /></a>
								<a id="logout-link" style="display:none;" href="javascript:logout()"><spring:message code="label.log_out" /></a>
							</div>
							<div class="main-menu floatright">
								<nav>
									<ul>
										<li><a href="home"><spring:message code="label.home" /></a>
										</li>
										<li class="active"><a href=""><spring:message code="label.service" /></a>
											<ul class="sub-menu">
												<li><a href="editCompany"><spring:message code="label.edit_company" /></a></li>
												<li><a href="uploadMaids"><spring:message code="label.upload_maids" /></a></li>
											</ul>
										</li>
										<li><a href="aboutUs"><spring:message code="label.about_us" /></a></li>
										<li><a href="contactUs"><spring:message code="label.contact" /></a></li>
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
			<!-- latest-news-area-start -->
			<div class="latest-news-area gray-bg pt-120 pb-90" style="display:none;" id="pleaseLoginDiv">
				<div class="container">
					<div class="section-title text-center mb-70">
						<span><spring:message code="label.join_domper" /></span>
						<h3><spring:message code="label.domper_platform" /></h3>
						<p><spring:message code="label.login_first_instruction" /></p>
					</div>
				</div>
			</div>
			<!-- latest-news-area-end -->
			<div class="container" id="editCompanyDiv" style="display:none;">
				<div class="col-md-1">
				</div>
				<div class="col-md-10" ng-controller="CompanyCtrl">
					<div class="works-title title mt-10 mb-10">
						<h3><spring:message code="label.edit_company.title" /></h3>
					</div>
					<div class="row">
					<br />
					<img class="company-image" width="600px" height="150px" ng-src="{{company.imgUrl}}">
					<br />
					(p.s. Size will be adjusted in Moblie App)
					<br />
					<br />
					<form id="service-booking">
						<!--  Personal Information -->
						<div class="col-sm-12">
							&nbsp;&nbsp;<spring:message code="label.edit_company.uploadImage" />
							<input id="companyBanner" type="file">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.edit_company.name" />
							<input required type="text" ng-model="company.name">
						</div>
						<div class="col-sm-4">
							&nbsp;&nbsp;<spring:message code="label.edit_company.website" />
							<input type="text" ng-model="company.website">
						</div>
						<div class="col-sm-2">
							&nbsp;&nbsp;<spring:message code="label.edit_company.licenceNo" />
							<input required type="text" ng-model="company.licenceNo">
						</div>
						<div class="col-sm-12">
							&nbsp;&nbsp;<spring:message code="label.edit_company.intro" />
							<textarea name="message" cols="30" rows="10" placeholder="Description" ng-model="company.desc"></textarea>
						</div>
						<div class="col-sm-12"><br/></div>
						<div class="col-sm-2">
							&nbsp;&nbsp;<spring:message code="label.edit_company.district" />
							<select id="main_district"  class='form-control' >
							</select>
						</div>
						<div class="col-sm-10">
							&nbsp;&nbsp;<spring:message code="label.edit_company.address" />
							<input required name="text" placeholder="" ng-model="company.address" type="text">
						</div>
						<div class="col-sm-4">
							&nbsp;&nbsp;<spring:message code="label.edit_company.email" />
							<input required id="age" name="text" placeholder="" type="text" ng-model="company.email">
						</div>
						<div class="col-sm-4">
							&nbsp;&nbsp;<spring:message code="label.edit_company.companyPhone" />
							<input required name="text" placeholder="" ng-model="company.tele_1" type="text">
						</div>
						<div class="col-sm-4">
							&nbsp;&nbsp;<spring:message code="label.edit_company.mobilePhone" />
							<input name="text" placeholder="" ng-model="company.tele_2" type="text">
						</div>
						<div class="col-sm-4">
							&nbsp;&nbsp;<spring:message code="label.edit_company.ph_fee" />
							<input name="text" placeholder="" ng-model="company.ph_fee" type="text" >
						</div>
						<div class="col-sm-4">
							&nbsp;&nbsp;<spring:message code="label.edit_company.idon_fee" />
							<input name="text" placeholder="" ng-model="company.idon_fee" type="text">
						</div>
						<div class="col-sm-4">
							&nbsp;&nbsp;<spring:message code="label.edit_company.other_fee" />
							<input name="text" placeholder="" ng-model="company.other_fee" type="text">
						</div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<br /><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<spring:message code="label.edit_company.branch" />&nbsp;&nbsp;&nbsp;<button id='addStep' class='btn_style' onclick="addBranch()"><spring:message code="label.edit_company.add" /></button>
						<br />
						<br />
						<div id="branchListDiv">
						
						</div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<br />
						<div class="col-sm-12">
							&nbsp;&nbsp;<spring:message code="label.edit_company.feeInclude" />
							<div class="checkbox">
							  <label><input id="ser1" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser1" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser2" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser2" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser3" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser3" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser4" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser4" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser5" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser5" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser6" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser6" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser7" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser7" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser8" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser8" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser9" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser9" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser10" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser10" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser11" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser11" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser12" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser12" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="ser13" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.ser13" /></label>
							</div>
						</div>
						<div class="col-sm-12">
							&nbsp;&nbsp;<spring:message code="label.edit_company.starInclude" />
							<div class="checkbox">
							  <label><input id="specSer1" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.specSer1" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="specSer2" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.specSer2" /></label>
							</div>
							<div class="checkbox">
							  <label><input id="specSer3" type="checkbox" value="">&nbsp;&nbsp;<spring:message code="label.specSer3" /></label>
							</div>
						</div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<br />
						<!-- <div class="col-sm-6">					
							<button style="margin-top:5px; margin-bottom:20px;" ng-click="showBranch()">Manage Branch</button>
						</div>
						<div class="col-sm-6">
						</div> -->
						<div class="col-sm-6">					
							<button ng-click="updateCompany()"><spring:message code="label.edit_company.update" /></button>
						</div>
					</form>
					</div>
				</div>
				<div class="col-md-1">
				</div>
			</div>
		
		<!-- service-booking-area-end -->
		<footer>
			<jsp:include page="footer.jsp" />
			
			<!-- footer-bottom-area-end -->
			<!-- footer-top-area-end -->
		</footer>
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
        <script src="js/login.js"></script>
        <script src="js/editCompany.js"></script>
    </body>
</html>
<jsp:include page="loginView.jsp" />