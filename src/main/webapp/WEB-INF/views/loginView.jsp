<!--Login Modal -->
<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-hd" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        	<div id="signinForm">
	            <div class="modal-header">
	                <h4 class="modal-title" id="login-modal-hd">Login to Domper</h4>
	            </div>
	            <div class="form-items">
	                <p></p>
	                <form>
	                    <input id="loginName" class="form-control" type="text" name="loginName" placeholder="E-mail Address" required="" />
	                    <br />
	                    <input id="userPw" class="form-control" type="password" name="password" placeholder="Password" required="" />
	                    <br />
	                    <a class="floatright" href="forget18.html">Forget password?</a>
	                    <div class="get-a-quote hidden-sm hidden-xs" style="margin-left: 0px; margin-top: 14px;">
							<a href="javascript:signin()">Log In</a>
						</div>
	                </form>
	               <!--  <div class="other-links">
	                    <div class="text">Or login with</div>
	                    <a href="#"><i class="fab fa-facebook-f"></i>Facebook</a><a href="#"><i class="fab fa-google"></i>Google</a><a href="#"><i class="fab fa-linkedin-in"></i>Linkedin</a>
	                </div> -->
	                <div class="page-links">
	                	<br />
	                    <a href="javascript:showSignup()">Register new account</a>
	                </div>
	            </div>
            </div>
            <div id="signupForm" style="display:none;">
            	<div class="modal-header">
		        	<h4 class="modal-title" id="login-modal-hd">Register in Domper</h4>
		        </div>
	            <div class="form-items" id="signupForm">
	            	<p>Please make sure your information is correct. So that we can approve your request.</p>
	                <form>
	                    <input id="companyName" class="form-control" type="text" name="companyName" placeholder="Company Name" required="" />
	                    <br />
	                    <input id="userName" class="form-control" type="text" name="userName" placeholder="Name" required="" />
	                    <br />
	                    <input id="address" class="form-control" type="text" name="address" placeholder="Company Address" required="" />
	                    <br />
	                    <input id="phone" class="form-control" type="text" name="phone" placeholder="Contact Number" required="" />
	                    <br />
	                    <input id="email" class="form-control" type="text" name="email" placeholder="E-mail Address" required="" />
	                    <br />
	                    <div class="get-a-quote hidden-sm hidden-xs" style="margin-left: 0px; margin-top: 14px;">
							<a href="javascript:register()">Register</a>
						</div>
	                </form>
	                <div class="page-links">
	                	<br />
	                    <a href="javascript:showLogin()">Log In</a>
	                </div>
	            </div>
            </div>
            <!-- <div class="modal-footer">
                <button type="button" class="btn btn-primary pull-left" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-danger pull-right" id="modal-btn-delete">Yes</button>
            </div> -->
        </div>
    </div>
</div>