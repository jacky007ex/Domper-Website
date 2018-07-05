<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!doctype html>
<html lang="en">
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
        
        <!--Jquery UI Stylesheet-->
		<link rel="stylesheet" href="css/jquery-ui.min.css">
    </head>
    
    <div ng-app="myApp" ng-controller="myCtrl">

    <body>
        <button id='quotation-btn' class="btn fast-quote-btn">{{banner_fast_quote}}</button>
        <!--====== POPUP FOR FAST QUOTE=====-->
        <div id="popup-ad" class="modal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="quote-top-close" data-dismiss="modal">X</div>
                    <div class="quote-top"><span class="quote-top-title">{{fastquote_advice}}</span></div>
                    <div class="modal-body">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img display="block" alt="" src="images/call-out.png"/></div>
                        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            {{fastquote_call}}
                            <p> </p>
                            <h3>+852 26280168</h3>
                        </div>
                    </div><!-- end modal-bpdy -->
                    <hr style="margin-bottom:5px" width="80%"/>
                    <div class="modal-body">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img display="block" alt="" src="images/call-in.png"/></div>
                        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            {{fastquote_leave}}
                        </div>
                    </div>
                    <div class="modal-body">
                    <a style="background:rgba(124, 95, 145, 0.7) ;color:white; padding:10px 30px; box-shadow: 0px 0px 16px rgba(0,0,0,0.15); 
                            display: inline-block;
                            margin-bottom: 0;
                            font-size: 18px;
                            left: 50%;
                            width:100%;
                            text-align: center;
                            white-space: nowrap;
                            vertical-align: middle;"

                                    href="mailto:info@valaxing.com" target="_top">{{get_quote_btn}}</a>
                    </div>

                </div><!-- end modal-content -->
            </div><!-- end modal-dialog -->
        </div><!-- end popup-ad -->
    
        <!--====== LOADER =====-->
        <div class="loader"></div>
    
    
    	<!--======== SEARCH-OVERLAY =========-->       
        <div class="overlay">
            <a href="javascript:void(0)" id="close-button" class="closebtn">&times;</a>
            <div class="overlay-content">
                <div class="form-center">
                    <form>
                    	<div class="form-group">
                        	<div class="input-group">
                        		<input type="text" class="form-control" placeholder="Search..." required />
                            	<span class="input-group-btn"><button type="submit" class="btn"><span><i class="fa fa-search"></i></span></button></span>
                            </div><!-- end input-group -->
                        </div><!-- end form-group -->
                    </form>
                </div><!-- end form-center -->
            </div><!-- end overlay-content -->
        </div><!-- end overlay -->
        
       <%@ include file="topBar.jsp" %>

        <nav class="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
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
                            <li><a href="home">{{home}}</a></li>
                            <li><a href="flight">{{flight}}</a></li>
                            <li><a href="hotel">{{hotel}}</a></li>
                            <li class="active"><a href="#">{{activity}}</a></li>
                            <li><a href="#contact-us">{{contact_us}}</a></li>
                        </ul>
                 </div>
                <!-- end navbar collapse -->
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
        
        
        <!--================== PAGE-COVER =================-->
        <section class="page-cover" id="cover-tour-grid-list">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                    	<h1 class="page-title">{{activitypage_banner}}</h1>
                        <ul class="breadcrumb">
                            <li class="active">{{activitypage_banner_heading}}</li>
                        </ul>
                    </div><!-- end columns -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end page-cover -->
        
        
        <!--===== INNERPAGE-WRAPPER ====-->
        <section class="innerpage-wrapper">
        	<div id="tour-listing" class="innerpage-section-padding">
                <div class="container">
                    <div class="row">        	
                        
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 content-side">
							
                            <div class="list-block main-block t-list-block">
                            	<div class="list-content">
                            		<div class="main-img list-img t-list-img">
                                        <a href="activity">
                                            <img src="images/tour-list-1.jpg" class="img-responsive" alt="tour-img" />
                                        </a>
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$598.00<span class="divider">|</span><span class="pkg">7 Days Tour</span></li>
                                                <li class="rating">
                                                	<span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end t-list-img -->
                                    
                                    <div class="list-info t-list-info">
                                        <h3 class="block-title"><a href="activity">Orlando</a></h3>
                                        <p class="block-minor">2 Adults, 02 Kids</p>
                                        <p>Coming Soon</p>
                                        <button class="btn btn-orange btn-lg view-more">View More</button>
                                     </div><!-- end t-list-info -->
                            	</div><!-- end list-content -->
                            </div><!-- end t-list-block -->
                            
                            <div class="list-block main-block t-list-block">
                            	<div class="list-content">
                            		<div class="main-img list-img t-list-img">
                                        <a href="activity">
                                            <img src="images/tour-list-2.jpg" class="img-responsive" alt="tour-img" />
                                        </a>
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$1280.00<span class="divider">|</span><span class="pkg">12 Days Tour</span></li>
                                                <li class="rating">
                                                	<span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end t-list-img -->
                                    
                                    <div class="list-info t-list-info">
                                        <h3 class="block-title"><a href="activity">London</a></h3>
                                        <p class="block-minor">2 Adults, 02 Kids</p>
                                        <p>Coming Soon</p>
                                        <button class="btn btn-orange btn-lg view-more">View More</button>
                                     </div><!-- end t-list-info -->
                            	</div><!-- end list-content -->
                            </div><!-- end t-list-block -->
                            
                            <div class="list-block main-block t-list-block">
                            	<div class="list-content">
                            		<div class="main-img list-img t-list-img">
                                        <a href="activity">
                                            <img src="images/tour-list-3.jpg" class="img-responsive" alt="tour-img" />
                                        </a>
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$798.00<span class="divider">|</span><span class="pkg">5 Days Tour</span></li>
                                                <li class="rating">
                                                	<span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end t-list-img -->
                                    
                                    <div class="list-info t-list-info">
                                        <h3 class="block-title"><a href="activity">Australia</a></h3>
                                        <p class="block-minor">2 Adults, 02 Kids</p>
                                        <p>Coming Soon</p>
                                        <button class="btn btn-orange btn-lg view-more">View More</button>
                                     </div><!-- end t-list-info -->
                            	</div><!-- end list-content -->
                            </div><!-- end t-list-block -->
                            
                            <div class="list-block main-block t-list-block">
                            	<div class="list-content">
                            		<div class="main-img list-img t-list-img">
                                        <a href="activity">
                                            <img src="images/tour-list-4.jpg" class="img-responsive" alt="tour-img" />
                                        </a>
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$1580.00<span class="divider">|</span><span class="pkg">7 Days Tour</span></li>
                                                <li class="rating">
                                                	<span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end t-list-img -->
                                    
                                    <div class="list-info t-list-info">
                                        <h3 class="block-title"><a href="activity">Bangkok</a></h3>
                                        <p class="block-minor">2 Adults, 02 Kids</p>
                                        <p>Coming Soon</p>
                                        <button class="btn btn-orange btn-lg view-more">View More</button>
                                     </div><!-- end t-list-info -->
                            	</div><!-- end list-content -->
                            </div><!-- end t-list-block -->
                            
                            <div class="list-block main-block t-list-block">
                            	<div class="list-content">
                            		<div class="main-img list-img t-list-img">
                                        <a href="activity">
                                            <img src="images/tour-list-5.jpg" class="img-responsive" alt="tour-img" />
                                        </a>
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$890.00<span class="divider">|</span><span class="pkg">5 Days Tour</span></li>
                                                <li class="rating">
                                                	<span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end t-list-img -->
                                    
                                    <div class="list-info t-list-info">
                                        <h3 class="block-title"><a href="activity">Newzeland</a></h3>
                                        <p class="block-minor">2 Adults, 02 Kids</p>
                                        <p>Coming Soon</p>
                                        <button class="btn btn-orange btn-lg view-more">View More</button>
                                     </div><!-- end t-list-info -->
                            	</div><!-- end list-content -->
                            </div><!-- end t-list-block -->
                            
                            <div class="list-block main-block t-list-block">
                            	<div class="list-content">
                            		<div class="main-img list-img t-list-img">
                                        <a href="activity">
                                            <img src="images/tour-list-6.jpg" class="img-responsive" alt="tour-img" />
                                        </a>
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$1890.00<span class="divider">|</span><span class="pkg">10 Days Tour</span></li>
                                                <li class="rating">
                                                	<span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end t-list-img -->
                                    
                                    <div class="list-info t-list-info">
                                        <h3 class="block-title"><a href="activity">Shanghai</a></h3>
                                        <p class="block-minor">2 Adults, 02 Kids</p>
                                        <p>Coming Soon</p>
                                        <button class="btn btn-orange btn-lg view-more">View More</button>
                                     </div><!-- end t-list-info -->
                            	</div><!-- end list-content -->
                            </div><!-- end t-list-block -->
                            
                            <div class="pages">
                                <ol class="pagination">
                                    <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i class="fa fa-angle-left"></i></span></a></li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#" aria-label="Next"><span aria-hidden="true"><i class="fa fa-angle-right"></i></span></a></li>
                                </ol>
                            </div><!-- end pages -->
                        </div><!-- end columns -->

                    </div><!-- end row -->
            	</div><!-- end container -->
            </div><!-- end tour-listing -->
        </section><!-- end innerpage-wrapper -->
        
        <%@ include file="footer.jsp" %>
        
        <!-- Page Scripts Starts -->
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-ui.min.js"></script> 
        <script src="js/bootstrap.min.js"></script>
        <script src="js/custom-navigation.js"></script>
		<script src="js/custom-price-slider.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <script src="js/valaxing.js"></script>
        <!-- Page Scripts Ends -->
    </body>
    </div>
</html>
