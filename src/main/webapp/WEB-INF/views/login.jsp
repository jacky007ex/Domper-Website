<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!doctype html>
<html>
<script>var lang_selected = "${lang}";</script>
    <head>
        <title>Valaxing Vacation</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="icon" href="images/favicon.png" type="image/x-icon">
        
        <!-- Google Fonts -->	
        <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i%7CMerriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
        
        <!-- Bootstrap Stylesheet -->	
        <link rel="stylesheet" href="css/bootstrap.min.css">
        
        <!-- Font Awesome Stylesheet -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
            
        <!-- Custom Stylesheets -->	
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" id="cpswitch" href="css/valaxing.css">
        <link rel="stylesheet" href="css/responsive.css">

         <!-- Owl Carousel Stylesheet -->
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/owl.theme.css">
        
        <!-- Flex Slider Stylesheet -->
        <link rel="stylesheet" href="css/flexslider.css" type="text/css" />
        
        <!--Date-Picker Stylesheet-->
        <link rel="stylesheet" href="css/datepicker.css">
        
        <!-- Magnific Gallery -->
        <link rel="stylesheet" href="css/magnific-popup.css">
    </head>

    <div ng-app="myApp" ng-controller="myCtrl">

    <body id="flight-homepage">
        <!--====== LOADER =====-->
        <div class="loader"></div>
        
        <%@ include file="topBar.jsp" %>
        
        <nav class="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" id="menu-button">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>                        
                    </button>
                    <!-- <a href="#" class="navbar-brand"><span><i class="fa fa-plane"></i>STAR</span>TRAVELS</a>-->
                    <a href="home" class="navbar-brand"> <img alt="" src="images/valaxing_logo.png" width=60px height=40px/>  </a>
                    <a href="home" class="navbar-brand"> <img alt="" src="images/valaxing_word.png" width=120px height=40px/>  </a>
                </div><!-- end navbar-header -->
                
                    <div class="collapse navbar-collapse" id="myNavbar1">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active"><a href="#">{{home}}</a></li>
                            <li><a href="flight">{{flight}}</a></li>
                            <li><a href="hotel">{{hotel}}</a></li>
                            <li><a href="activity">{{activity}}</a></li>
                            <li><a href="#contact-us">{{contact_us}}</a></li>
                            <li></li>
                        </ul>
                    </div><!-- end navbar collapse -->
            </div><!-- end container -->
        </nav><!-- end navbar -->

		<div class="sidenav-content">
            <div id="mySidenav" class="sidenav" >
                <h2 id="web-name"><a href="home" class="navbar-brand"> <img alt="" src="images/valaxing_logo.png" width=60px height=40px/>  </a>
                    <a href="home" class="navbar-brand"> <img alt="" src="images/valaxing_word.png" width=120px height=40px/>  </a></h2>

                <div id="main-menu">
                	<div class="closebtn">
                        <button class="btn btn-default" id="closebtn">&times;</button>
                    </div><!-- end close-btn -->
                    
                        <div class="list-group panel">
                            <a href="home" class="list-group-item"><span><i class="fa fa-home link-icon"></i></span>{{home}}</a>
                            <a href="flight" class="list-group-item"><span><i class="fa fa-plane link-icon"></i></span>{{flight}}</a>
                            <a href="hotel" class="list-group-item"><span><i class="fa fa-building link-icon"></i></span>{{hotel}}</a>
                            <a href="activity" class="list-group-item"><span><i class="fa fa-globe link-icon"></i></span>{{activity}}</a>
                        </div><!-- end list-group -->
                </div><!-- end main-menu -->
            </div><!-- end mySidenav -->
        </div><!-- end sidenav-content -->
            
        <!--===== INNERPAGE-WRAPPER ====-->
        <section class="innerpage-wrapper">
            <div id="about-content-2" class="innerpage-section-padding" style="padding-top:50px">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="custom-form custom-form-fields">
                                <h3>Login</h3>
                                <form> 
                                    <div class="form-group">
                                         <input type="text" class="form-control" placeholder="Username"  required/>
                                         <span><i class="fa fa-user"></i></span>
                                    </div>
                                    
                                    <div class="form-group">
                                         <input type="password" class="form-control" placeholder="Password"  required/>
                                         <span><i class="fa fa-lock"></i></span>
                                    </div>
                                    
                                    <div class="checkbox">
                                         <label><input type="checkbox"> Remember me</label>
                                    </div>
                                    
                                    <button class="btn btn-orange btn-block">Login</button>
                                </form>
                                
                                <div class="other-links">
                                    <p class="link-line">New Here ? <a href="#">Signup</a></p>
                                    <a class="simple-link" href="#">Forgot Password ?</a>
                                </div><!-- end other-links -->
                            </div><!-- end custom-form -->
                        </div><!-- end columns -->
                    </div><!--end abt-cnt-2-text-->
                </div><!-- end Container -->
            </div><!-- end about-content-2 -->
        </section><!-- end innerpage-wrapper -->   

        
        <!-- Page Scripts Starts -->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.flexslider.js"></script>
        <script src="js/bootstrap-datepicker.js"></script>
        <script src="js/custom-navigation.js"></script>
        <script src="js/custom-flex.js"></script>
        <script src="js/custom-owl.js"></script>
        <script src="js/custom-date-picker.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <script src="js/valaxing.js"></script>
        <!-- Page Scripts Ends -->
        
    </body>
    </div>
</html>