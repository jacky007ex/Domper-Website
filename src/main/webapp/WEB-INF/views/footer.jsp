<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

       <!--===== INNERPAGE-WRAPPER ====-->
        <section class="innerpage-wrapper">
            <div id="contact-us" class="contactus-section-padding">
                <div class="container">
                    <div class="row">
                    <div class="col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                            <div class="custom-form contact-form">
                                <h3>{{h3_contact_us}}</h3>
                                <p></p>
                                <form>    
                                    <div class="form-group">
                                         <input type="text" class="form-control" placeholder="{{contact_us_name}}" required/>
                                         <span><i class="fa fa-user"></i></span>
                                    </div>
    
                                    <div class="form-group">
                                         <input type="email" class="form-control" placeholder="{{contact_us_email}}"  required/>
                                         <span><i class="fa fa-envelope"></i></span>
                                    </div>
                                    
                                    <div class="form-group">
                                         <input type="text" class="form-control" placeholder="{{contact_us_subject}}"  required/>
                                         <span><i class="fa fa-info-circle"></i></span>
                                    </div>
    
                                    <div class="form-group">
                                        <textarea class="form-control" rows="4" placeholder="{{contact_us_message}}"></textarea>
                                        <span><i class="fa fa-pencil"></i></span>
                                    </div>
                                    <a style="background:rgba(124, 95, 145, 0.7) ;color:white; padding:10px 30px; box-shadow: 0px 0px 16px rgba(0,0,0,0.15); 
                                        display: inline-block;
                                        margin-bottom: 0;
                                        font-size: 18px;
                                        left: 50%;
                                        width:100%;
                                        text-align: center;
                                        white-space: nowrap;
                                        vertical-align: middle;"

                                    href="mailto:info@valaxing.com" target="_top">{{send}}</a>
                                </form>
                            </div><!-- end contact-form -->
                    </div><!-- end columns -->
                    <div class="col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>   
                    </div><!-- end row -->
                </div><!-- end container -->   
            </div><!-- end contact-us -->
        </section><!-- end innerpage-wrapper -->
        
        <!--============ NEWSLETTER-2 =============-->
        <section id="newsletter-2" class="newsletter"> 
            <div class="container">
                <div class="row"> 
                    <div class="col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <p>{{Subscribe_message}}</p>
                        <p> </p>
                        <form>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="email" class="form-control input-lg" placeholder="Enter your email address" required/>
                                    <span class="input-group-btn"><button class="btn">{{subcribe_button}}</button></span>
                                </div>
                            </div>
                        </form>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> 
                            <img width=23px height=23px display="block" alt="" src="images/facebook.png"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img width=23px height=23px display="block" alt="" src="images/linkedin.svg"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img width=23px height=23px display="block" alt="" src="images/twitter.svg"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img width=23px height=23px display="block" alt="" src="images/instagram.png"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img width=23px height=23px display="block" alt="" src="images/googleplus.png"/>
                        </p>
                    </div><!-- end columns -->
                    <div class="col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>   
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end newsletter-2 -->
        
              <!--======================= FOOTER =======================-->
        <section id="footer" class="ftr-heading-o ftr-heading-mgn-1">
        
            <div id="footer-top" class="banner-padding ftr-top-white ftr-text-grey">
                <div class="container">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <p class="t12 copyright ">© 2018 Valaxing Travel Limited. {{footnote_rights}}<br>{{footnote_licence}}</p>
                        </div><!-- end columns -->
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <ul class="list-unstyled">
                                <li class="t_white">ABOUT VALAXING</li>
                                <li class="t_white"></li>
                                <li><a href="#">{{footnote_about_us}}</a></li>
                                <li><a href="#">{{footnote_careers}}</a></li>
                                <li class="t_white">&nbsp;&nbsp;&nbsp;</li>
                            </ul>
                        </div><!-- end columns -->
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <ul class="list-unstyled">
                                <li class="t_white">{{footnote_terms_of_use}}</li>
                                <li class="t_white"></li>
                                <li><a href="#">{{footnote_terms_and_cdns}}</a></li>
                                <li><a href="#">{{footnote_privacy_policy}}</a></li>
                            </ul>
                        </div><!-- end columns -->
                    </div><!-- end row -->
                </div><!-- end container -->
            </div><!-- end footer-top -->
            
        </section><!-- end footer -->