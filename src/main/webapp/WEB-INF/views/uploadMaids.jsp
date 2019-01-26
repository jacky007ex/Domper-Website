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
        <link rel="stylesheet" href="css/multi-select.css">
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
		<div ng-controller="SampleCtrl">	
			<div class="container" id="uploadMaidsDiv" style="display:none;">
				<div class="col-md-6 gray-bg">
				  	<div class="col-md-12">
						<input ng-model="search" id="searchVal" name="text" placeholder="Search" type="text" 
											ng-change="searchByName(search)">
					</div>
				    <!-- <ul>
				      <li ng-repeat="maid in maids">{{ message.name }}</li>
				    </ul> -->
				    
				    <div class='md-padding' layout="row" flex>
				     <div layout="row" flex>
				        <div class="card" layout="column" ng-repeat="maid in maids" flex >
				            <img class="card-image" ng-style="{'border': changeScreen(maid)}" 
				            ng-click="selectEditItem(maid)" ng-src="{{maid.imgUrl}}">
				            <h5>{{maid.name}}</h5>
				            <button ng-click="selectEditItem(maid)">Edit</button>
				            <button ng-click="removeItem(maid)">Delete</button>
				        </div>
				     </div>
				  	</div>
				</div>
				<div class="col-md-6" style="padding-right:0px;">
					<div class="works-title title mt-10 mb-10">
						<span>Upload Your Maids</span>
						<div ng-If="editingId==null">
							<h3>Create Mode</h3>
						</div>
						<div ng-If="editingId!=null">
							<h3>Edit Mode</h3>
							<button ng-click="switchToCreate()"> Switch to Create Mode </button>
						</div>
						<p>Fill in information for your maid and click Upload</p>
					</div>
					<div class="row">
					<form id="service-booking">
						<div class="col-sm-12">
							<spring:message code="label.upload_maid.uploadImage" />
							<input id="uploadImageFile" type="file">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.name" />
							<input type="text" ng-model="itemObj.name" placeholder="">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.current_loc" />
							<!-- <input ng-model="itemObj.now_at" placeholder="" type="text"> -->
							<select class="form-control"  ng-model="itemObj.now_at">
							  <option value="Hong Kong"><spring:message code="label.upload_maid.hongkong" /></option>
							  <option value="Oversea"><spring:message code="label.upload_maid.oversea" /></option>
							</select>
						</div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<!--  Personal Information -->
						
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.language" />
							<select class="form-control"  ng-model="itemObj.language" multiple>
							  <option value="english"><spring:message code="label.upload_maid.english" /></option>
							  <option value="cantonese"><spring:message code="label.upload_maid.cantonese" /></option>
							  <option value="mandarin"><spring:message code="label.upload_maid.mandarin" /></option>
							</select>
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.work_exp" />
							<input ng-model="itemObj.working_exp_yr" placeholder="" type="text">
						</div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<div class="col-sm-12">
							<!-- <a class="domper-form-btn" href="javascript:showWorkExpPage()">Manage Working Experience</a> -->
							<div>
							<spring:message code="label.upload_maid.work_exp" />
							<!-- <a class="domper-form-btn" href="javascript:addWorkingExp()">+</a> -->
							&nbsp;&nbsp;&nbsp;<button class='btn_style' onclick="addWorkingExp()"><spring:message code="label.edit_company.add" /></button>
							</div>
							<br/>
						</div>
						<div id="workExpDiv">
							<!-- <div class="col-sm-11">
								<input id="location" style="width:125px;" type="text" name="location" placeholder="Location" required="" />
						
		                    	<input id="duty" style="width:125px;" type="text" name="duty" placeholder="Duty" required="" />
		                    
		                    	<input id="from" style="width:125px;" type="text" name="from" placeholder="From" required="" />
		                  
		                    	<input id="to" style="width:125px;" type="text" name="to" placeholder="To" required="" />
		                    </div>
		                    <div class="col-sm-1">
		                    	<a class="domper-form-btn" href="javascript:deleteWorkExp()">Delete</a>
		                    </div> -->
	                    </div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<div class="col-sm-12">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.intro" />
							<textarea cols="30" rows="10" placeholder="Introduction" ng-model="itemObj.intro"></textarea>
						</div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.nationality" />
							<select class="form-control"  ng-model="itemObj.nationality">
							    <option value="philippines"><spring:message code="philippines" /></option>
							    <option value="indonesia"><spring:message code="indonesia" /></option>
			                    <option value="thailand"><spring:message code="thailand" /></option>
			                    <option value="myanmar"><spring:message code="myanmar" /></option>
			                     <option value="bangladesh"><spring:message code="bangladesh" /></option>
			                    <option value="sri_lanka"><spring:message code="sri_lanka" /></option>
			                    <option value="nepal"><spring:message code="nepal" /></option>
			                    <option value="madagascar"><spring:message code="madagascar" /></option>
							</select>
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.gender" />
							<select class="form-control"  ng-model="itemObj.sex">
							  <option value="female"><spring:message code="female" /></option>
							  <option value="male"><spring:message code="male" /></option>
							</select>
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.age" />
							<input ng-model="itemObj.age" placeholder="" type="text">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.birthday" />
							<input ng-model="itemObj.birthday" placeholder="" type="text">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.height" />
							<input ng-model="itemObj.height" placeholder="" type="text">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.weight" />
							<input ng-model="itemObj.weight" placeholder="" type="text">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.religion" />
							<input ng-model="itemObj.religion" placeholder="" type="text">
						</div>
						<!-- <div class="col-sm-6">
							&nbsp;&nbsp;Prefer Work
							<input ng-model="itemObj.preferJob:" placeholder="" type="text">
						</div> -->
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.martial_status" />
							<select class="form-control" ng-model="itemObj.marital_status">
							  <option value="single"><spring:message code="label.upload_maid.single" /></option>
							  <option value="married"><spring:message code="label.upload_maid.married" /></option>
							</select>
						</div>
						<div class="col-sm-6">
							&nbsp;&nbsp;<spring:message code="label.upload_maid.no_of_child" />
							<input ng-model="itemObj.no_of_children" placeholder="" type="text">
						</div>
						<div class="col-sm-12">
							<hr style="margin:5px;">
						</div>
						<div class="col-sm-12">
						<spring:message code="label.upload_maid.skills" /> 
						<br/>
							<select multiple="multiple" id="skill-select" name="skill-select[]">
						    </select>
						</div>
						<!-- <div class="col-sm-6">
							&nbsp;&nbsp;Skills
							<input ng-model="itemObj.skills" placeholder="" type="text">
						</div>			 -->			
						<div class="col-sm-12">
							<hr style="margin:5px;">
							<div ng-If="editingId==null">
								<button class="domper-form-btn" ng-click="createItem()"><spring:message code="label.upload_maid.create" /> </button>
							</div>
							<div ng-If="editingId!=null">
								<button class="domper-form-btn" ng-click="editItem()"><spring:message code="label.upload_maid.update" /> </button>
							</div>
						</div>
						<div class="col-sm-12">
							<br/>
						</div>
					</form>
					</div>
				</div>
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
        <script src="js/uploadMaid.js"></script>
        <script src="js/jquery.multi-select.js"></script>
    </body>
</html>
<jsp:include page="loginView.jsp" />
<jsp:include page="workingExp.jsp" />