
$( "#quotation-btn" ).click(function() {
	$("#popup-ad").modal('show');
});

$( ".free-quotation-btn" ).click(function() {
	$("#popup-ad").modal('show');
});

$( ".view-more" ).click(function() {
	$("#popup-ad").modal('show');
});


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  var userLang = lang_selected;
  if(lang_selected=="")
     userLang = navigator.language || navigator.userLanguage;

  $scope.item = userLang;
  convertLanguage(userLang, $scope);
  updateHyperLink(userLang);

  $scope.changeLanguage = function() {
    var currentLocation = window.location;
    window.location.href = currentLocation.pathname + '?lang=' + $scope.item;
	};
	//Handling Flight Offers Promote
  $scope.flightOffers = [
        {
            "mainText1" : "Tokyo (HKG to NRT/HND) Econ $2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "Tokyo (HKG to NRT/HND) Business $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "Tokyo (HKG to NRT) First $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainText1" : "Tokyo (HKG to NRT/HND) Econ $2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "Tokyo (HKG to NRT/HND) Business $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "Tokyo (HKG to NRT) First $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        }
  ]
});

function updateHyperLink(userLang){
  $('#myNavbar1 a').each(function(){
    if(!this.href.includes("contact-us")){
      this.href += '?lang=' + userLang;
    }
  })
}

function convertLanguage(userLang, $scope){
	if(userLang=="en-US"){
		convertToEnglish($scope);
	}
	if(userLang=="zh-TW"){
		convertToZhTw($scope);
	}
	if(userLang=="zh-CN"){
		convertToZhCn($scope);
	}
}

function convertToEnglish($scope){
	$scope.home = "Home";
  $scope.flight = "Flight";
  $scope.hotel = "Hotel";
  $scope.activity = "Activity";
  $scope.contact_us = "Contact us";
  $scope.mainpage_flightoffers = "Flight Offers";
  $scope.flight_avg_price = "AVG/PERSON";
  $scope.mainpage_hotelsoffers = "Hotels Offers";
  $scope.view_all = "View all";
  $scope.h3_contact_us = "Contact us";
  $scope.banner_fast_quote = "FAST QUOTE";
  $scope.fastquote_advice = "Need a Fast Quote and a Professional Travel Advice?";
  $scope.fastquote_call = "Call Now to Speak with a Live Travel Expert";
  $scope.fastquote_leave = "Or leave your phone number a Travel Expert will call you back";
  $scope.flightpage_banner = "Flight List";
  $scope.hotelpage_banner = "Hotel List";
  $scope.hotelpage_banner_heading = "Enjoy your time with beloved";
  $scope.activitypage_banner = "Activity List";
  $scope.activitypage_banner_heading = "Explore the passion of life";
  $scope.login_in = "Login";
  $scope.sign_up = "Sign Up";
  $scope.subcribe_email = "Enter your email adress";
  $scope.subcribe_button = "Subscribe";
  $scope.send = "Send";
  $scope.footnote_rights = "All Rights Reserved.";
  $scope.footnote_licence = "HK Travel Agent Licence: 354281.";
  $scope.footnote_about_us = "About Us";
  $scope.footnote_careers = "Careers";
  $scope.footnote_terms_of_use = "TERMS OF USE";
  $scope.footnote_terms_and_cdns = "Terms And Conditions";
  $scope.footnote_privacy_policy = "Privacy Policy";
  $scope.contact_us_name = "Name";
  $scope.contact_us_email = "Email";
  $scope.contact_us_subject = "Subject";
  $scope.contact_us_message = "Your Message";
  $scope.get_quote_btn = "GET QUOTE";
  
  $scope.Subscribe_message = "Subscribe to our newsletters and be the first to receive updates on our latest sales and exclusive offers";
}


function convertToZhTw($scope){
	$scope.home = "主頁";
  $scope.flight = "航機";
  $scope.hotel = "酒店";
  $scope.activity = "活動";
  $scope.contact_us = "聯絡我們";
  $scope.mainpage_flightoffers = "航班優惠";
  $scope.flight_avg_price = "人均消費";
  $scope.mainpage_hotelsoffers = "酒店優惠";
  $scope.view_all = "顯示全部";
  $scope.h3_contact_us = "聯絡我們";
  $scope.banner_fast_quote = "快 速 報 價";
  $scope.fastquote_advice = "需要快速報價和專業的旅遊建議？";
  $scope.fastquote_call = "立即致電與在場旅行專家對話";
  $scope.fastquote_leave = "或者留下您的電話號碼，我們旅行的專家會給您回電";
  $scope.flightpage_banner = "航班列表"; 
  $scope.hotelpage_banner = "酒店列表";
  $scope.hotelpage_banner_heading = "與你親愛的人共度歡樂的時光";
  $scope.activitypage_banner = "活動列表";
  $scope.activitypage_banner_heading = "探索生命的激情";
  $scope.login_in = "登入";
  $scope.sign_up = "建立帳戶";
  $scope.subcribe_email = "請輸入電子郵件以訂閱";
  $scope.subcribe_button = "訂閱";
  $scope.send = "傳送";
  $scope.footnote_rights = "保留一切權利。";
  $scope.footnote_licence = "香港旅行代理商牌照編號 : 354281.";
  $scope.footnote_about_us = "關於我們";
  $scope.footnote_careers = "加入我們";
  $scope.footnote_terms_of_use = "使用條款";
  $scope.footnote_terms_and_cdns = "網站條款";
  $scope.footnote_privacy_policy = "隱私政策";
  $scope.contact_us_name = "姓名";
  $scope.contact_us_email = "電郵";
  $scope.contact_us_subject = "標題";
  $scope.contact_us_message = "你的訊息";
  $scope.get_quote_btn = "獲取報價";
  
  $scope.Subscribe_message = "訂閱我們的商務通訊，成為第一個獲得我們最新銷售和獨家優惠的最新的信息";
}

function convertToZhCn($scope){
	$scope.home = "主页";
  $scope.flight = "航机";
  $scope.hotel = "酒店";
  $scope.activity = "活动";
  $scope.contact_us = "联络我们";
  $scope.mainpage_flightoffers = "航班优惠";
  $scope.flight_avg_price = "人均消费";
  $scope.mainpage_hotelsoffers = "酒店优惠";
  $scope.view_all = "显示全部";
  $scope.h3_contact_us = "联络我们";
  $scope.banner_fast_quote = "快 速 报 价";
  $scope.fastquote_advice = "需要快速报价和专业的旅游建议？";
  $scope.fastquote_call = "立即致电与在场旅行专家对话";
  $scope.fastquote_leave = "或者留下您的电话号码，我们旅行的专家会给您回电";
  $scope.flightpage_banner = "航班列表";
  $scope.hotelpage_banner = "酒店列表";
  $scope.hotelpage_banner_heading = "与你亲爱的人共度欢乐的时光";
  $scope.activitypage_banner = "活动列表";
  $scope.activitypage_banner_heading = "探索生命的激情";
  $scope.login_in = "登入";
  $scope.sign_up = "建立帐户";
  $scope.subcribe_email = "请输入电子邮件以订阅";
  $scope.subcribe_button = "订阅";
  $scope.send = "传送";
  $scope.footnote_rights = "保留一切权利。";
  $scope.footnote_licence = "香港旅行代理商牌照编号: 354281.";
  $scope.footnote_about_us = "关于我们";
  $scope.footnote_careers = "加入我们";
  $scope.footnote_terms_of_use = "使用条款";
  $scope.footnote_terms_and_cdns = "网站条款";
  $scope.footnote_privacy_policy = "隐私政策";
  $scope.contact_us_name = "姓名";
  $scope.contact_us_email = "电邮";
  $scope.contact_us_subject = "标题";
  $scope.contact_us_message = "你的讯息";
  $scope.get_quote_btn = "获取报价";

  $scope.Subscribe_message = "订阅我们的商务通讯，成为第一个获得我们最新销售和独家优惠的最新的信息";
}
