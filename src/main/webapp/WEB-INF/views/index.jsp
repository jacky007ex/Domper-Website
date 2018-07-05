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
                    <a style="background:transparent;color:rgba(124, 95, 145, 0.7); padding:10px 30px; box-shadow: 0px 0px 16px rgba(0,0,0,0.15); 
                            display: inline-block;
                            margin-bottom: 0;
                            font-size: 18px;
                            left: 50%;
                            width:100%;
                            text-align: center;
                            white-space: nowrap;
                            border:1px solid rgba(124, 95, 145, 0.7);
                            vertical-align: middle;"

                            href="mailto:info@valaxing.com" target="_top">{{get_quote_btn}}</a>
                    </div>

                </div><!-- end modal-content -->
            </div><!-- end modal-dialog -->
        </div><!-- end popup-ad -->
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
        
        
		<!--========================= FLEX SLIDER =====================-->
        <section class="flexslider-container" id="flexslider-container-2">
            
            <div class="flexslider slider" id="slider-2">
                <ul class="slides">

                    <li class="item-1 back-size" style="background:			linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(images/flight-slider-1.jpg) 50% 15%;
	background-size:cover;
	height:100%;">
                    	<div class="meta">         
                            <div class="container">
                                <h2>Travel For Life</h2>
                                <h6>Value & Relaxing</h6>
                                <br />
                                <br />
                                <ul class="airlinesList">
                                    <li class="airlinesList__item qatar"></li>
                                    <li class="airlinesList__item emirates"></li>
                                    <li class="airlinesList__item korean"></li>
                                    <li class="airlinesList__item eva"></li>
                                    <li class="airlinesList__item singapore"></li>
                                    <li class="airlinesList__item cathay"></li>
                                    <li class="airlinesList__item asiana"></li>
                                </ul>
                                <br />
                                <br />
                                <br />
                                <div class="btn btn-orange free-quotation-btn">{{get_quote_btn}}</div>
                            </div><!-- end container -->  
                        </div><!-- end meta -->
                    </li><!-- end item-1 -->
                    
                    <li class="item-2 back-size" style="background:			linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(images/slider-5.jpeg) 50% 15%;
	background-size:cover;
	height:100%;">
                        <div class=" meta">         
                            <div class="container">
                                <h2>Travel For Life</h2>
                                <h6>Value & Relaxing</h6>
                                <br />
                                <br />
                                <ul class="airlinesList">
                                    <li class="airlinesList__item qatar"></li>
                                    <li class="airlinesList__item emirates"></li>
                                    <li class="airlinesList__item korean"></li>
                                    <li class="airlinesList__item eva"></li>
                                    <li class="airlinesList__item singapore"></li>
                                    <li class="airlinesList__item cathay"></li>
                                    <li class="airlinesList__item asiana"></li>
                                </ul>
                                <br />
                                <br />
                                <br />
                                <div class="btn btn-orange free-quotation-btn">{{get_quote_btn}}</div>
                            </div><!-- end container -->  
                        </div><!-- end meta -->
                    </li><!-- end item-2 -->

                    <li class="item-3 back-size" style="background:         linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(images/London.jpeg) 50% 15%;
    background-size:cover;
    height:100%;">
                        <div class=" meta">         
                            <div class="container">
                                <h2>Travel For Life</h2>
                                <h6>Value & Relaxing</h6>
                                <br />
                                <br />
                                <ul class="airlinesList">
                                    <li class="airlinesList__item qatar"></li>
                                    <li class="airlinesList__item emirates"></li>
                                    <li class="airlinesList__item korean"></li>
                                    <li class="airlinesList__item eva"></li>
                                    <li class="airlinesList__item singapore"></li>
                                    <li class="airlinesList__item cathay"></li>
                                    <li class="airlinesList__item asiana"></li>
                                </ul>
                                <br />
                                <br />
                                <br />
                                <div class="btn btn-orange free-quotation-btn">{{get_quote_btn}}</div>
                            </div><!-- end container -->  
                        </div><!-- end meta -->
                    </li><!-- end item-3 -->

                    <li class="item-3 back-size" style="background:         linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(images/slider-6.jpeg) 50% 15%;
    background-size:cover;
    height:100%;">
                        <div class=" meta">         
                            <div class="container">
                                <h2>Travel For Life</h2>
                                <h6>Value & Relaxing</h6>
                                <br />
                                <br />
                                <ul class="airlinesList">
                                    <li class="airlinesList__item qatar"></li>
                                    <li class="airlinesList__item emirates"></li>
                                    <li class="airlinesList__item korean"></li>
                                    <li class="airlinesList__item eva"></li>
                                    <li class="airlinesList__item singapore"></li>
                                    <li class="airlinesList__item cathay"></li>
                                    <li class="airlinesList__item asiana"></li>
                                </ul>
                                <br />
                                <br />
                                <br />
                                <div class="btn btn-orange free-quotation-btn">{{get_quote_btn}}</div>
                            </div><!-- end container -->  
                        </div><!-- end meta -->
                    </li><!-- end item-3 -->

                    <li class="item-3 back-size" style="background:         linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(images/slider-8.jpg) 50% 15%;
    background-size:cover;
    height:100%;">
                        <div class=" meta">         
                            <div class="container">
                                <h2>Travel For Life</h2>
                                <h6>Value & Relaxing</h6>
                                <br />
                                <br />
                                <ul class="airlinesList">
                                    <li class="airlinesList__item qatar"></li>
                                    <li class="airlinesList__item emirates"></li>
                                    <li class="airlinesList__item korean"></li>
                                    <li class="airlinesList__item eva"></li>
                                    <li class="airlinesList__item singapore"></li>
                                    <li class="airlinesList__item cathay"></li>
                                    <li class="airlinesList__item asiana"></li>
                                </ul>
                                <br />
                                <br />
                                <br />
                                <div class="btn btn-orange free-quotation-btn">{{get_quote_btn}}</div>
                            </div><!-- end container -->  
                        </div><!-- end meta -->
                    </li><!-- end item-3 -->

                </ul>
            </div><!-- end slider -->
            
            <div class="search-tabs" id="search-tabs-2" hidden>
            	<div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                        
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#flights" data-toggle="tab"><span><i class="fa fa-plane"></i></span><span class="st-text">Flights</span></a></li>
                                <li><a href="#hotels" data-toggle="tab"><span><i class="fa fa-building"></i></span><span class="st-text">Hotels</span></a></li>
                                <li><a href="#tours" data-toggle="tab"><span><i class="fa fa-suitcase"></i></span><span class="st-text">Tours</span></a></li>
                                <li><a href="#cruise" data-toggle="tab"><span><i class="fa fa-ship"></i></span><span class="st-text">Cruise</span></a></li>
                                <li><a href="#cars" data-toggle="tab"><span><i class="fa fa-car"></i></span><span class="st-text">Cars</span></a></li>
                            </ul>
        
                            <div class="tab-content">

                                <div id="flights" class="tab-pane in active">
                                    <form>
                                        <div class="row">

                                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                                <div class="row">
                                                
                                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control" placeholder="From" >
                                                            <i class="fa fa-map-marker"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control" placeholder="To" >
                                                            <i class="fa fa-map-marker"></i>
                                                        </div>
                                                    </div><!-- end columns -->
        
                                                </div><!-- end row -->								
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                                <div class="row">
                                                
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd1" placeholder="Check In" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd2" placeholder="Check Out" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
        
                                                </div><!-- end row -->								
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                <div class="form-group right-icon">
                                                    <select class="form-control">
                                                        <option selected>Adults</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <i class="fa fa-angle-down"></i>
                                                </div>
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                                                <button class="btn btn-orange">Search</button>
                                            </div><!-- end columns -->
                                            
                                        </div><!-- end row -->
                                    </form>
                                </div><!-- end flights -->
                                
                                <div id="hotels" class="tab-pane">
                                    <form>
                                        <div class="row">
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                                                <div class="row">
                                                
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd1" placeholder="Check In" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd2" placeholder="Check Out" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
        
                                                </div><!-- end row -->								
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                                                <div class="row">
                                                
                                                    <div class="col-xs-12 col-sm-12 col-md-4">
                                                        <div class="form-group right-icon">
                                                            <select class="form-control">
                                                                <option selected>Rooms</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-6 col-sm-6 col-md-4">
                                                        <div class="form-group right-icon">
                                                            <select class="form-control">
                                                                <option selected>Adults</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-6 col-sm-6 col-md-4">
                                                        <div class="form-group right-icon">
                                                            <select class="form-control">
                                                                <option selected>Kids</option>
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                </div><!-- end row -->
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                                                <button class="btn btn-orange">Search</button>
                                            </div><!-- end columns -->
                                            
                                        </div><!-- end row -->
                                    </form>
                                </div><!-- end hotels -->

                                <div id="tours" class="tab-pane">
                                    <form>
                                        <div class="row">
                                        
                                            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                                                <div class="form-group left-icon">
                                                    <input type="text" class="form-control" placeholder="City,Country" />
                                                    <i class="fa fa-map-marker"></i>
                                                </div>
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <div class="form-group right-icon">
                                                    <select class="form-control">
                                                        <option selected>Month</option>
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                        <option>April</option>
                                                        <option>May</option>
                                                        <option>June</option>
                                                        <option>July</option>
                                                        <option>August</option>
                                                        <option>September</option>
                                                        <option>October</option>
                                                        <option>November</option>
                                                        <option>December</option>
                                                    </select>
                                                    <i class="fa fa-angle-down"></i>
                                                </div>
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                                <div class="row">
    
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group right-icon">
                                                            <select class="form-control">
                                                                <option selected>Adults</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group right-icon">
                                                            <select class="form-control">
                                                                <option selected>Kids</option>
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                </div><!-- end row -->
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                                                <button class="btn btn-orange">Search</button>
                                            </div><!-- end columns -->
                                            
                                        </div><!-- end row -->
                                    </form>
                                </div><!-- end tours -->
                                
                                <div id="cruise" class="tab-pane">
                                    <form>
                                        <div class="row">
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                                <div class="row">
                                                
                                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control" placeholder="From" >
                                                            <i class="fa fa-map-marker"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control" placeholder="To" >
                                                            <i class="fa fa-map-marker"></i>
                                                        </div>
                                                    </div><!-- end columns -->
        
                                                </div><!-- end row -->								
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                                <div class="row">
                                                
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd1" placeholder="Check In" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd2" placeholder="Check Out" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
        
                                                </div><!-- end row -->								
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                <div class="form-group right-icon">
                                                    <select class="form-control">
                                                    <option selected>Adults</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    </select>
                                                    <i class="fa fa-angle-down"></i>
                                                </div>
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                                                <button class="btn btn-orange">Search</button>
                                            </div><!-- end columns -->
                                            
                                        </div><!-- end columns -->
                                    </form>
                                </div><!-- end cruises -->

                                <div id="cars" class="tab-pane">
                                    <form>					
                                        <div class="row">
                                        
                                            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                                                <div class="row">
                                                
                                                    <div class="col-sm-6 col-md-4">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control" placeholder="Country" />
                                                            <i class="fa fa-globe"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-sm-6 col-md-4">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control" placeholder="City" />
                                                            <i class="fa fa-map-marker"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-sm-12 col-md-4">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control" placeholder="Location" />
                                                            <i class="fa fa-street-view"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                </div><!-- end row -->
                                            </div><!-- end columns -->
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                                <div class="row">
                                                
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd1" placeholder="Check In" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <div class="form-group left-icon">
                                                            <input type="text" class="form-control dpd2" placeholder="Check Out" >
                                                            <i class="fa fa-calendar"></i>
                                                        </div>
                                                    </div><!-- end columns -->
                                                    
                                                </div><!-- end row -->
                                            </div><!-- end columns -->
    
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                                                <button class="btn btn-orange">Search</button>
                                            </div><!-- end columns -->
                                            
                                        </div><!-- end row -->					
                                    </form>
                                </div><!-- end cars -->
                                
                            </div><!-- end tab-content -->
                            
                        </div><!-- end columns -->
                    </div><!-- end row -->
                </div><!-- end container -->
            </div><!-- end search-tabs -->
            
        </section><!-- end flexslider-container -->


        <!--================= FLIGHT OFFERS =============-->
        <section id="flight-offers" class="section-padding">
        	<div class="container">
        		<div class="row">
        			<div class="col-sm-12">
                    	<div class="page-heading">
                        	<h2>{{mainpage_flightoffers}}</h2>
                        </div><!-- end page-heading -->
                        
                        <div class="row">
                        
                            <div ng-repeat="offers in flightOffers" class="col-sm-6 col-md-4">
                                <div class="main-block flight-block view-more">
                                        <div class="main-img">
                                            <img src="images/tokyo_flight.jpg" class="img-responsive" />
                                        </div><!-- end flight-img -->
                                        <div class="flight-info">
                                            <div class="flight-title" style="display:flex;">
                                            	<div style="width:85%;">
                                         			<span class="flight-type">{{offers.mainText1}}</span>
                                        		</div>
                                        		<div style="width:15%; text-align:right;">
	                                         	 	<img ng-if="offers.logo1A!=''" src="{{offers.logo1A}}" style="vertical-align:top;text-align:right" width=20px height=16px/>
	                                         	 	<img ng-if="offers.logo1B!=''" src="{{offers.logo1B}}" style="vertical-align:top;text-align:right" width=20px height=16px/>
                                                </div>        
                                            </div><!-- end flight-title -->
                                            <div class="flight-title" style="display:flex;">
                                            	<div style="width:85%;">
                                         			<span class="flight-type">{{offers.mainText2}}</span>
                                        		</div>
                                        		<div style="width:15%; text-align:right;">
	                                         	 	<img ng-if="offers.logo2A!=''" src="{{offers.logo2A}}" style="vertical-align:top;text-align:right" width=20px height=16px/>
                                                    <img ng-if="offers.logo2B!=''" src="{{offers.logo2B}}" style="vertical-align:top;text-align:right" width=20px height=16px/>
                                                </div>        
                                            </div><!-- end flight-title -->
                                              <div class="flight-title" style="display:flex;">
                                            	<div style="width:85%;">
                                         			<span class="flight-type">{{offers.mainText3}}</span>
                                        		</div>
                                        		<div style="width:15%; text-align:right;">
	                                         	 	<img ng-if="offers.logo3A!=''" src="{{offers.logo3A}}" style="vertical-align:top;text-align:right" width=20px height=16px/>
                                                    <img ng-if="offers.logo3B!=''" src="{{offers.logo3B}}" style="vertical-align:top;text-align:right" width=20px height=16px/>
                                                </div>        
                                            </div><!-- end flight-title -->
                                        </div><!-- end flight-info -->
                                </div><!-- end flight-block -->
                            </div><!-- end columns -->
                            
                            <div class="col-sm-6 col-md-4">
                                <div class="main-block flight-block view-more">
                                        <div class="flight-img">
                                            <img src="images/flight-1.jpg" class="img-responsive" alt="flight-img" />
                                        </div><!-- end flight-img -->
                                        
                                        <div class="flight-info">
                                            <div class="flight-title" style="text-align:left;">
                                            <div width=99%>
												<span class="flight-type">Tokyo (HKG to NRT/HND) Econ $2880+ </span>
											</div>
											<div>
												<img src="images/cx.png" style="vertical-align:top;text-align:right" width=20px height=16px/></span>
											</div>
                                            </div><!-- end flight-title -->
                                            <div class="flight-title" style="text-align:middle;">                   
                                                <span class="flight-type">Tokyo (HKG to NRT/HND) Business $4980+ </span>
                                                <img src="images/cx.png" style="vertical-align:top;" width=20px height=16px/></span>
                                            </div><!-- end flight-title -->
                                            <div class="flight-title" style="text-align:middle;">                   
                                                <span class="flight-type">Tokyo (NRT) First $7980+ </span>
                                                <img src="images/cx.png" style="vertical-align:top;" width=20px height=16px/></span>
                                            </div><!-- end flight-title -->
                                        </div><!-- end flight-info -->
                                </div><!-- end flight-block -->
                            </div><!-- end columns -->
                            
                          <div class="col-sm-6 col-md-4">
                                <div class="main-block flight-block view-more">
                                        <div class="flight-img">
                                            <img src="images/flight-1.jpg" class="img-responsive" alt="flight-img" />
                                        </div><!-- end flight-img -->
                                        
                                        <div class="flight-info">
                                            <div class="flight-title">                   
                                                <h3><span class="flight-type">Tokyo (HKG to NRT/HND) Econ $2880+ Cathay</span></h3>
                                            </div><!-- end flight-title -->
                                            <div class="flight-title"> 
                                            <h3><span class="flight-type">Tokyo (HKG to NRT/HND) Business $4980+ Cathay</span></h3>
                                            </div><!-- end flight-title -->
                                            <div class="flight-title"> 
                                            <h3><span class="flight-type">Tokyo (HKG to NRT/HND) Business $4980+ Cathay</span></h3>
                                            </div><!-- end flight-title -->
                                        </div><!-- end flight-info -->
                                </div><!-- end flight-block -->
                            </div><!-- end columns -->
                            
                            <div class="col-sm-6 col-md-4">
                                <div class="main-block flight-block view-more">
                                        <div class="flight-img">
                                            <img src="images/flight-4.jpg" class="img-responsive" alt="flight-img" />
                                        </div><!-- end flight-img -->
                                        
                                        <div class="flight-info">
                                            <div class="flight-title">
                                                <h3><span class="flight-destination">Los Angeles</span>|<span class="flight-type">OneWay Flight</span></h3>
                                            </div><!-- end flight-title -->
                                            
                                            <div class=" flight-timing">
                                                <ul class="list-unstyled">
                                                    <li><span><i class="fa fa-plane"></i></span><span class="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                                    <li><span><i class="fa fa-plane"></i></span><span class="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                                </ul>
                                            </div><!-- end flight-timing -->
                                            
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$5988.00<span class="pkg">{{flight_avg_price}}</span></li>
                                                <li class="rating">
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end flight-info -->
                                </div><!-- end flight-block -->
                            </div><!-- end columns -->
                            
                            <div class="col-sm-6 col-md-4">
                                <div class="main-block flight-block view-more">
                                        <div class="flight-img">
                                            <img src="images/flight-5.jpg" class="img-responsive" alt="flight-img" />
                                        </div><!-- end flight-img -->
                                        
                                        <div class="flight-info">
                                            <div class="flight-title">
                                                <h3><span class="flight-destination">Osaka</span>|<span class="flight-type">OneWay Flight</span></h3>
                                            </div><!-- end flight-title -->
                                            
                                            <div class=" flight-timing">
                                                <ul class="list-unstyled">
                                                    <li><span><i class="fa fa-plane"></i></span><span class="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                                    <li><span><i class="fa fa-plane"></i></span><span class="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                                </ul>
                                            </div><!-- end flight-timing -->
                                            
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$1368.00<span class="pkg">{{flight_avg_price}}</span></li>
                                                <li class="rating">
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end flight-info -->
                                </div><!-- end flight-block -->
                            </div><!-- end columns -->
                            
                            <div class="col-sm-6 col-md-4">
                                <div class="main-block flight-block view-more">
                                        <div class="flight-img">
                                            <img src="images/flight-6.jpg" class="img-responsive" alt="flight-img" />
                                        </div><!-- end flight-img -->
                                        
                                        <div class="flight-info">
                                            <div class="flight-title">
                                                <h3><span class="flight-destination">Shanghai</span>|<span class="flight-type">OneWay Flight</span></h3>
                                            </div><!-- end flight-title -->
                                            
                                            <div class=" flight-timing">
                                                <ul class="list-unstyled">
                                                    <li><span><i class="fa fa-plane"></i></span><span class="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                                    <li><span><i class="fa fa-plane"></i></span><span class="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                                </ul>
                                            </div><!-- end flight-timing -->
                                            
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$1289.00<span class="pkg">{{flight_avg_price}}</span></li>
                                                <li class="rating">
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end flight-info -->
                                </div><!-- end flight-block -->
                            </div><!-- end columns -->
                            
                        </div><!-- end row -->
                        
                        <div class="view-all text-center">
                        	<a href="hotel" class="btn btn-orange">{{view_all}}</a>
                        </div><!-- end view-all -->
                    </div><!-- end columns -->
                </div><!-- end row -->
        	</div><!-- end container -->
        </section><!-- end flight-offers -->

        <!--=============== HOTEL OFFERS ===============-->
        <section id="hotel-offers" class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-heading white-heading">
                            <h2>{{mainpage_hotelsoffers}}</h2>
                        </div><!-- end page-heading -->
                        
                        <div class="owl-carousel owl-theme owl-custom-arrow" id="owl-hotel-offers">
                            
                            <div class="item">
                                <div class="main-block hotel-block view-more">
                                    <div class="main-img">
                                        <img src="images/hotel-1.jpg" class="img-responsive" alt="hotel-img" />
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$780.00<span class="divider">|</span><span class="pkg">Avg/Night</span></li>
                                                <li class="rating">
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end offer-img -->
                                    
                                    <div class="main-info hotel-info">
                                        <div class="arrow">
                                            <a href="hotel"><span><i class="fa fa-angle-right"></i></span></a>
                                        </div><!-- end arrow -->
                                        
                                        <div class="main-title hotel-title">
                                            <a href="hotel">Herta Berlin Hotel</a>
                                            <p>From: Scotland</p>
                                        </div><!-- end hotel-title -->
                                    </div><!-- end hotel-info -->
                                </div><!-- end hotel-block -->
                            </div><!-- end item -->
                            
                            <div class="item">
                                <div class="main-block hotel-block view-more">
                                    <div class="main-img">
                                            <img src="images/hotel-2.jpg" class="img-responsive" alt="hotel-img" />
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$568.00<span class="divider">|</span><span class="pkg">Avg/Night</span></li>
                                                <li class="rating">
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end offer-img -->
                                    
                                    <div class="main-info hotel-info">
                                        <div class="arrow">
                                            <a href="hotel"><span><i class="fa fa-angle-right"></i></span></a>
                                        </div><!-- end arrow -->
                                        
                                        <div class="main-title hotel-title">
                                            <a href="hotel">Roosevelt Hotel</a>
                                            <p>From: Germany</p>
                                        </div><!-- end hotel-title -->
                                    </div><!-- end hotel-info -->
                                </div><!-- end hotel-block -->
                            </div><!-- end item -->
                            
                            <div class="item">
                                <div class="main-block hotel-block view-more">
                                    <div class="main-img">
                                            <img src="images/hotel-3.jpg" class="img-responsive" alt="hotel-img" />
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$1080.00<span class="divider">|</span><span class="pkg">Avg/Night</span></li>
                                                <li class="rating">
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end offer-img -->
                                    
                                    <div class="main-info hotel-info">
                                        <div class="arrow">
                                            <a href="hotel"><span><i class="fa fa-angle-right"></i></span></a>
                                        </div><!-- end arrow -->
                                        
                                        <div class="main-title hotel-title">
                                            <a href="hotel">Hotel Fort De</a>
                                            <p>From: Austria</p>
                                        </div><!-- end hotel-title -->
                                    </div><!-- end hotel-info -->
                                </div><!-- end hotel-block -->
                            </div><!-- end item -->
                            
                            <div class="item">
                                <div class="main-block hotel-block view-more">
                                    <div class="main-img">
                                            <img src="images/hotel-4.jpg" class="img-responsive" alt="hotel-img" />
                                        <div class="main-mask">
                                            <ul class="list-unstyled list-inline offer-price-1">
                                                <li class="price">$658.00<span class="divider">|</span><span class="pkg">Avg/Night</span></li>
                                                <li class="rating">
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star orange"></i></span>
                                                    <span><i class="fa fa-star lightgrey"></i></span>
                                                </li>
                                            </ul>
                                        </div><!-- end main-mask -->
                                    </div><!-- end offer-img -->
                                    
                                    <div class="main-info hotel-info">
                                        <div class="arrow">
                                            <a href="hotel"><span><i class="fa fa-angle-right"></i></span></a>
                                        </div><!-- end arrow -->
                                        
                                        <div class="main-title hotel-title">
                                            <a href="hotel">Roosevelt Hotel</a>
                                            <p>From: Germany</p>
                                        </div><!-- end hotel-title -->
                                    </div><!-- end hotel-info -->
                                </div><!-- end hotel-block -->
                            </div><!-- end item -->
                            
                        </div><!-- end owl-hotel-offers -->
                        
                        <div class="view-all text-center">
                           <a href="hotel" class="btn btn-orange">{{view_all}}</a>
                        </div><!-- end view-all -->
                    </div><!-- end columns -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end hotel-offers -->
        
        <%@ include file="footer.jsp" %>
        
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