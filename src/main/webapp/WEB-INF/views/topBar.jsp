<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

        <!--============= TOP-BAR ===========-->
        <div id="top-bar" class="tb-text-white" style="text-decoration:none;">
            <div class="container">
                <div class="row">          
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div id="info">
                            <ul class="list-unstyled list-inline">
                                <!--<li><span><i class="fa fa-map-marker"></i></span>21A Southtex Building, Kwun Tong, HK</li>-->
                                <li><span><i class="fa fa-phone"></i></span><a href="tel:+852 3590 4465" style="color:white;">+852 3590 4465</a></li>
                                <li><span><i class="fa fa-envelope"></i></span>
                                    <a href="mailto:info@valaxing.com" style="color:white;" target="_top">info@valaxing.com</a></li>
                            </ul>
                        </div><!-- end info -->
                    </div><!-- end columns -->
                    
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div id="links">
                            <ul class="list-unstyled list-inline">
                                <li><a href="#"><span><i class="fa fa-lock"></i></span>{{login_in}}</a></li>
                                <li><a href="#"><span><i class="fa fa-plus"></i></span>{{sign_up}}</a></li>
                                <li>
                                	<form>
                                    	<ul class="list-inline">
                                        	<li>
                                                <div class="form-group currency">
                                                    <span><i class="fa fa-angle-down"></i></span>
                                                    <select class="form-control">
                                                        <option value="">$</option>
                                                        <option value="">£</option>
                                                    </select>
                                                </div><!-- end form-group -->
											</li>
                                            
                                            <li>
                                                <div class="form-group language">
                                                    <span><i class="fa fa-angle-down"></i></span>
                                                    <select class="form-control" ng-model="item" ng-change="changeLanguage()">
                                                        <option value="en-US">EN</option>
                                                        <option value="zh-TW">繁</option>
                                                        <option value="zh-CN">简</option>
                                                    </select>
                                                </div><!-- end form-group -->
                                            </li>
										</ul>
                                    </form>
                                </li>
                            </ul>
                        </div><!-- end links -->
                    </div><!-- end columns -->				
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end top-bar -->