<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="spring"  uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form"    uri="http://www.springframework.org/tags/form" %>
<!doctype html>
<html class="no-js" lang="zxx">
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
							<div class="logo">
								<a href="index.html"><img width="150px" src="img/logo/domper_logo.png" alt="" /></a>
							</div>
						</div>
						<div class="col-md-10">
						<div class="get-a-quote floatright hidden-sm hidden-xs">
								<a id="login-link" style="display:none;" href="javascript:showLoginPage()"><spring:message code="label.log_in" /></a>
								<a id="logout-link" style="display:none;" href="javascript:logout()"><spring:message code="label.log_out" /></a>
							</div>
							<div class="main-menu floatright">
								<nav>
									<ul>
										<li class="active"><a href="home"><spring:message code="label.home" /></a>
										</li>
										<li><a href="#"><spring:message code="label.service" /></a>
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
		<!-- slider-area-start -->
		<div class="slider-area">
			<div class="slider-wrapper bg-opacity pt-140 pb-140" style="background-image:url(img/slider/slider4.jpg)">
				<div class="container">
					<div class="slider-content">
						<span><spring:message code="label.banner_slogan1" /></span>
						<h1 class="cd-headline clip is-full-width"><spring:message code="label.banner_slogan2" />
							<span class="cd-words-wrapper">
								<b class="is-visible"><spring:message code="label.banner_slogan2_1" /></b>
								<b><spring:message code="label.banner_slogan2_2" /></b>
								<b><spring:message code="label.banner_slogan2_3" /></b>
							</span>
						</h1>
						<a href="#"><spring:message code="label.contact_us_btn" /></a>									
					</div>	
				</div>
			</div>
		</div>
		<!-- slider-area-end -->
		<!-- slider-area-start -->
		<!-- <div class="slider-area">
			<div class="slider-active owl-carousel">
				<div class="slider-wrapper bg-opacity pt-50 pb-50" style="background-image:url(img/slider/slider4.jpg)">
					<div class="container">
						<div class="works-title mb-40">
							<span>What we offer </span>  
							<h3>How It Works</h3>
							<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
						</div>
						<div class="works-wrapper" style="background-image:url(img/works/circle.png)">
							<div class="works-content">
								<h4>Choose Any Time for Delivery</h4>
								<div class="works-img">
									<img src="img/works/1.png" alt="" />
								</div>
							</div>
							<div class="works-content">
								<h4>We clean Your clothes</h4>
								<div class="works-img">
									<img src="img/works/2.png" alt="" />
								</div>
							</div>
							<div class="works-content">
								<h4>Relax and Enjoy Clean Clothes</h4>
								<div class="works-img">
									<img src="img/works/3.png" alt="" />
								</div>
							</div>
							<div class="works-content">
								<h4>Manage Everything online</h4>
								<div class="works-img">
									<img src="img/works/4.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div> -->
		
		<!-- why-choose-area-end -->
		<!-- featured-services-area-start -->
		<!-- <div class="featured-services-area pt-120 pb-90 gray-bg">
			<div class="container">
				<div class="section-title text-center mb-70">
					<span>What we offer </span>
					<h3>Featured Services</h3>
					<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the.</p>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="featured-services-wrapper mb-30 white-bg text-center">
							<div class="featured-services-img">
								<img src="img/service/service1.jpg" alt="" />
							</div>
							<div class="featured-services-text text-center">
								<h3><a href="single-service.html">Helpful & Friendly Attendants</a></h3>
								<p>But I must explain to you how all tmistaken idea of denouncing pleasure and praisi pain was born and I will give you</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 hidden-sm">
						<div class="featured-services-wrapper mb-30 white-bg text-center">
							<div class="featured-services-img">
								<img src="img/service/service2.jpg" alt="" />
							</div>
							<div class="featured-services-text text-center">
								<h3><a href="single-service.html">Parsi Pain was Boran will give you</a></h3>
								<p>But I must explain to you how all tmistaken idea of denouncing pleasure and praisi pain was born and I will give you</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="featured-services-wrapper mb-30 white-bg text-center">
							<div class="featured-services-img">
								<img src="img/service/service3.jpg" alt="" />
							</div>
							<div class="featured-services-text text-center">
								<h3><a href="single-service.html">Helpful & Friendly Attendants</a></h3>
								<p>But I must explain to you how all tmistaken idea of denouncing pleasure and praisi pain was born and I will give you</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<!-- featured-services-area-end -->
		<!-- works-area-start -->
		<!-- <div class="works-area ptb-120" style="background-image:url(img/bg/bg1.jpg)">
			<div class="container">
				<div class="works-title mb-60">
					<span>What we offer </span>
					<h3>How It Works</h3>
					<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="works-wrapper" style="background-image:url(img/works/circle.png)">
							<div class="works-content">
								<h4>Choose Any Time for Delivery</h4>
								<div class="works-img">
									<img src="img/works/1.png" alt="" />
								</div>
							</div>
							<div class="works-content">
								<h4>We clean Your clothes</h4>
								<div class="works-img">
									<img src="img/works/2.png" alt="" />
								</div>
							</div>
							<div class="works-content">
								<h4>Relax and Enjoy Clean Clothes</h4>
								<div class="works-img">
									<img src="img/works/3.png" alt="" />
								</div>
							</div>
							<div class="works-content">
								<h4>Manage Everything online</h4>
								<div class="works-img">
									<img src="img/works/4.png" alt="" />
								</div>
							</div>
						</div>					
					</div>
				</div>
			</div>
		</div> -->
		<!-- works-area-end -->
		<!-- service-booking-area-start -->
		
		<!--
		<div class="service-booking-area" style="background-image:url(img/bg/1.png);">
			<div class="container">
				<div class="row">
					<div class="col-md-offset-6 col-md-6">
						<div class="works-title title mt-80 mb-50">
							<span>Service Booking</span>
							<h3>How It Works</h3>
							<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
						</div>
						<div class="row">
						<form action="#" id="service-booking">
							<div class="col-sm-6">
								<input name="text" placeholder="name" type="text">
							</div>
							<div class="col-sm-6">
								<input name="email" placeholder="email" type="email">
							</div>
							<div class="col-sm-6">
								<input name="text" placeholder="phone" type="email">
							</div>
							<div class="col-sm-6">
								<input name="text" placeholder="address" type="email">
							</div>
							<div class="col-sm-12">
								<textarea name="message" cols="30" rows="10" placeholder="message" id="message"></textarea>
							</div>								
							<button type="submit">Request a Callback</button>
						</form>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<!-- service-booking-area-end -->
		<!-- pricing-area-start -->
		<div class="pricing-area gray-bg pt-30 pb-60">
			<div class="container">				
				<div class="section-title text-center mb-110">
					<span><spring:message code="label.price_title1" /></span>
					<h3><spring:message code="label.price_title2" /></h3>
					<p><spring:message code="label.price_title3" /></p>
				</div>
				<div class="row m-0 pricing-inner">	
					<div class="col-md-4 col-sm-4">
						<div class="pricing-wrapper text-center white-bg mb-30">
							<div class="pricing-icon">
								<img src="img/pricing/1.png" alt="" />
							</div>
							<div class="pricing-head">
								<h3>Welcome Plan</h3>
							</div>
							<div class="price">
								Free
							</div>
							<ul class="pricing-menu">
								<li><spring:message code="label.upload_no_maid" 
									arguments="8" /></li>
								<li></li>
								<li></li>
							</ul>
							<div class="pricing-btn">
								<a href="#">Choose Plan</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="pricing-wrapper text-center active white-bg mb-30">
							<div class="pricing-icon">
								<img src="img/pricing/2.png" alt="" />
							</div>
							<div class="pricing-head">
								<h3>VIP</h3>
							</div>
							<div class="price">
								<span>$</span>299
							</div>
							<ul class="pricing-menu">
								<li><spring:message code="label.upload_no_maid" 
									arguments="100" /></li>
								<li><spring:message code="label.promote_no_maid" 
									arguments="3" /></li>
								<li><spring:message code="label.promote_company"/></li>
							</ul>
							<div class="pricing-btn active">
								<a href="#">Choose Plan</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="pricing-wrapper text-center white-bg mb-30">
							<div class="pricing-icon">
								<img src="img/pricing/3.png" alt="" />
							</div>
							<div class="pricing-head">
								<h3>Silver Plan</h3>
							</div>
							<div class="price">
								<span>$</span>149
							</div>
							<ul class="pricing-menu">
								<li><spring:message code="label.upload_no_maid" 
									arguments="50" /></li>
								<li><spring:message code="label.promote_no_maid" 
									arguments="1" /></li>
							</ul>
							<div class="pricing-btn">
								<a href="#">Choose Plan</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- pricing-area-end -->
		<!-- why-choose-area-start -->
		<div class="why-choose-area pt-120 pb-90 dim-bg">
			<div class="container">
				<div class="section-title text-center mb-70">
					<span><spring:message code="label.promote_title1" /></span>
					<h3><spring:message code="label.promote_title2" /></h3>
					<p></p>
				</div>
				<div class="row">
					<div class="col-md-3 col-sm-6">
						<div class="why-choose-wrapper text-center mb-30">
							<div class="why-choose-icon" style="background-image: url(img/why-choose/1.png)">
								<span>01</span>
							</div>
							<div class="why-choose-text">
								<h4><spring:message code="label.promote_subtitle1" /></h4>
								<p><spring:message code="label.promote_subtitle1_content" /></p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="why-choose-wrapper text-center mb-30">
							<div class="why-choose-icon" style="background-image: url(img/why-choose/2.png)">
								<span>02</span>
							</div>
							<div class="why-choose-text">
								<h4><spring:message code="label.promote_subtitle2" /></h4>
								<p><spring:message code="label.promote_subtitle2_content" /></p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="why-choose-wrapper text-center mb-30">
							<div class="why-choose-icon" style="background-image: url(img/why-choose/3.png)">
								<span>03</span>
							</div>
							<div class="why-choose-text">
								<h4><spring:message code="label.promote_subtitle3" /></h4>
								<p><spring:message code="label.promote_subtitle3_content" /></p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="why-choose-wrapper text-center mb-30">
							<div class="why-choose-icon" style="background-image: url(img/why-choose/4.png)">
								<span>04</span>
							</div>
							<div class="why-choose-text">
								<h4><spring:message code="label.promote_subtitle4" /></h4>
								<p><spring:message code="label.promote_subtitle4_content" /></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- action-area-end -->
		<footer>
			<jsp:include page="footer.jsp" />
			
			<!-- footer-bottom-area-end -->
			<!-- footer-top-area-end -->
		</footer>
		
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
    </body>
</html>
<jsp:include page="loginView.jsp" />
