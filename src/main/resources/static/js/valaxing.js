
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
  
  $scope.Subscribe_message = "Subscribe to our newsletters and be the First Class to receive updates on our latest sales and exclusive offers";

  $scope.flightOffers = [
        {
            "mainImage" : "images/tokyo_flight.jpg",
            "mainText1" : "Tokyo (HKG ⇌ NRT/HND) Econ $2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "Tokyo (HKG ⇌ NRT/HND) Business $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "Tokyo (HKG ⇌ NRT) First Class $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/osaka_flight.jpg",
            "mainText1" : "Osaka (HKG ⇌ KIX) Econ $2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Osaka (HKG ⇌ KIX) Business $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Osaka (HKG ⇌ KIX) First Class $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/nagoya_flight.jpg",
            "mainText1" : "Nagoya (HKG ⇌ NGO) Econ $2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Nagoya (HKG ⇌ NGO) Business $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Nagoya (HKG ⇌ NGO) First Class $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/fukuoka_flight.jpg",
            "mainText1" : "Fukuoka (HKG ⇌ FUK) Econ $2680+",
            "logo1A" : "images/cxd.png",
            "logo1B" : "",
            "mainText2" : "Fukuoka (HKG ⇌ FUK) Business $4980+",
            "logo2A" : "images/cxd.png",
            "logo2B" : "",
            "mainText3" : "Fukuoka (HKG ⇌ FUK) First Class $7980+",
            "logo3A" : "images/cxd.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/taipei_flight.jpg",
            "mainText1" : "Taipei (HKG ⇌ TPE) Econ $1280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/cxd.png",
            "mainText2" : "Taipei (HKG ⇌ TPE) Business $2680+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/cxd.png",
            "mainText3" : "Taipei (HKG ⇌ TPE) First Class $3680+",
            "logo3A" : "images/cx.png",
            "logo3B" : "images/cxd.png",
        },{
            "mainImage" : "images/korea_flight.jpg",
            "mainText1" : "Seoul (HKG ⇌ ICN) Econ $2280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Seoul (HKG ⇌ ICN) Business $4280+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Seoul (HKG ⇌ ICN) First Class $6280+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/boston_flight.jpg",
            "mainText1" : "Boston (HKG ⇌ BOS) Econ $23800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Boston (HKG ⇌ BOS) Business $23800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Boston (HKG ⇌ BOS) First Class $23800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/aus_flight.jpg",
            "mainText1" : "Sydney (HKG ⇌ SYD) Econ $13800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Sydney (HKG ⇌ SYD) Business $13800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Sydney (HKG ⇌ SYD) First Class $13800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/london_flight.jpg",
            "mainText1" : "London (HKG ⇌ LHR) Econ $15800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "London (HKG ⇌ LHR) Business $15800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "London (HKG ⇌ LHR) First Class $15800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        }
  ];
  $scope.flightSample = [
        {
            "airline" : "images/cx_big.jpg",
            "mainText" : "Tokyo (HKG ⇌ NRT/HND)",
            "class1" : "Econ",
            "price1" : "-----------------------------------$2880+",
            "class2" : "Business",
            "price2" : "------------------------------$4980+",
            "class3" : "First Class",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Osaka (HKG ⇌ KIX)",
            "class1" : "Econ",
            "price1" : "-----------------------------------$2880+",
            "class2" : "Business",
            "price2" : "------------------------------$4980+",
            "class3" : "First Class",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cxd_big.jpg",
            "mainText" : "Taipei (HKG ⇌ TPE)",
            "class1" : "Econ",
            "price1" : "-----------------------------------$1280+",
            "class2" : "Business",
            "price2" : "------------------------------$2680+",
            "class3" : "First Class",
            "price3" : "--------------------------$3680+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Seoul (HKG ⇌ ICN)",
            "class1" : "Econ",
            "price1" : "-----------------------------------$2280+",
            "class2" : "Business",
            "price2" : "------------------------------$4280+",
            "class3" : "First Class",
            "price3" : "--------------------------$6280+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Boston (HKG ⇌ BOS)",
            "class1" : "Econ",
            "price1" : "-----------------------------------$23800+",
            "class2" : "Business",
            "price2" : "------------------------------$23800+",
            "class3" : "First Class",
            "price3" : "--------------------------$23800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Sydney (HKG ⇌ SYD)",
            "class1" : "Econ",
            "price1" : "-----------------------------------$13800+",
            "class2" : "Business",
            "price2" : "------------------------------$13800+",
            "class3" : "First Class",
            "price3" : "--------------------------$13800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "London (HKG ⇌ LHR)",
            "class1" : "Econ",
            "price1" : "-----------------------------------$15800+",
            "class2" : "Business",
            "price2" : "------------------------------$15800+",
            "class3" : "First Class",
            "price3" : "--------------------------$15800+",
        }
  ];
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

  $scope.flightOffers = [
        {
            "mainImage" : "images/tokyo_flight.jpg",
            "mainText1" : "東京 (HKG ⇌ NRT/HND) 經濟客艙 $2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "Tokyo (HKG ⇌ NRT/HND) 商務客艙 $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "Tokyo (HKG ⇌ NRT) 頭等客艙 $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/osaka_flight.jpg",
            "mainText1" : "大阪 (HKG ⇌ KIX) 經濟客艙 $2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "大阪 (HKG ⇌ KIX) 商務客艙 $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "大阪 (HKG ⇌ KIX) 頭等客艙 $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/nagoya_flight.jpg",
            "mainText1" : "北海道 (HKG ⇌ NGO) 經濟客艙 $2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "北海道 (HKG ⇌ NGO) 商務客艙 $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "北海道 (HKG ⇌ NGO) 頭等客艙 $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/fukuoka_flight.jpg",
            "mainText1" : "福岡 (HKG ⇌ FUK) 經濟客艙 $2680+",
            "logo1A" : "images/cxd.png",
            "logo1B" : "",
            "mainText2" : "福岡 (HKG ⇌ FUK) 商務客艙 $4980+",
            "logo2A" : "images/cxd.png",
            "logo2B" : "",
            "mainText3" : "福岡 (HKG ⇌ FUK) 頭等客艙 $7980+",
            "logo3A" : "images/cxd.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/taipei_flight.jpg",
            "mainText1" : "台北 (HKG ⇌ TPE) 經濟客艙 $1280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/cxd.png",
            "mainText2" : "台北 (HKG ⇌ TPE) 商務客艙 $2680+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/cxd.png",
            "mainText3" : "台北 (HKG ⇌ TPE) 頭等客艙 $3680+",
            "logo3A" : "images/cx.png",
            "logo3B" : "images/cxd.png",
        },{
            "mainImage" : "images/korea_flight.jpg",
            "mainText1" : "首爾 (HKG ⇌ ICN) 經濟客艙 $2280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "首爾 (HKG ⇌ ICN) 商務客艙 $4280+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "首爾 (HKG ⇌ ICN) 頭等客艙 $6280+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/boston_flight.jpg",
            "mainText1" : "波士頓 (HKG ⇌ BOS) 經濟客艙 $23800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "波士頓 (HKG ⇌ BOS) 商務客艙 $23800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "波士頓 (HKG ⇌ BOS) 頭等客艙 $23800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/aus_flight.jpg",
            "mainText1" : "悉尼 (HKG ⇌ SYD) 經濟客艙 $13800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "悉尼 (HKG ⇌ SYD) 商務客艙 $13800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "悉尼 (HKG ⇌ SYD) 頭等客艙 $13800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/london_flight.jpg",
            "mainText1" : "倫敦 (HKG ⇌ LHR) 經濟客艙 $15800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "倫敦 (HKG ⇌ LHR) 商務客艙 $15800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "倫敦 (HKG ⇌ LHR) 頭等客艙 $15800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        }
  ];
  $scope.flightSample = [
        {
            "airline" : "images/cx_big.jpg",
            "mainText" : "東京 (HKG ⇌ NRT/HND)",
            "class1" : "經濟客艙",
            "price1" : "--------------------------$2880+",
            "class2" : "商務客艙",
            "price2" : "--------------------------$4980+",
            "class3" : "頭等客艙",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "大阪 (HKG ⇌ KIX)",
            "class1" : "經濟客艙",
            "price1" : "--------------------------$2880+",
            "class2" : "商務客艙",
            "price2" : "--------------------------$4980+",
            "class3" : "頭等客艙",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cxd_big.jpg",
            "mainText" : "台北 (HKG ⇌ TPE)",
            "class1" : "經濟客艙",
            "price1" : "--------------------------$1280+",
            "class2" : "商務客艙",
            "price2" : "--------------------------$2680+",
            "class3" : "頭等客艙",
            "price3" : "--------------------------$3680+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "首爾 (HKG ⇌ ICN)",
            "class1" : "經濟客艙",
            "price1" : "--------------------------$2280+",
            "class2" : "商務客艙",
            "price2" : "--------------------------$4280+",
            "class3" : "頭等客艙",
            "price3" : "--------------------------$$6280+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "波士頓 (HKG ⇌ BOS)",
            "class1" : "經濟客艙",
            "price1" : "--------------------------$23800+",
            "class2" : "商務客艙",
            "price2" : "--------------------------$23800+",
            "class3" : "頭等客艙",
            "price3" : "--------------------------$23800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "悉尼 (HKG ⇌ SYD)",
            "class1" : "經濟客艙",
            "price1" : "--------------------------$13800+",
            "class2" : "商務客艙",
            "price2" : "--------------------------$13800+",
            "class3" : "頭等客艙",
            "price3" : "--------------------------$13800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "倫敦 (HKG ⇌ LHR)",
            "class1" : "經濟客艙",
            "price1" : "--------------------------$15800+",
            "class2" : "商務客艙",
            "price2" : "--------------------------$15800+",
            "class3" : "頭等客艙",
            "price3" : "--------------------------$15800+",
        }
  ];
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

  $scope.flightOffers = [
        {
            "mainImage" : "images/tokyo_flight.jpg",
            "mainText1" : "东京 (HKG ⇌ NRT/HND) 经济客舱 $2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "东京 (HKG ⇌ NRT/HND) 商务客舱 $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "东京 (HKG ⇌ NRT) 头等客舱 $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/osaka_flight.jpg",
            "mainText1" : "大阪 (HKG ⇌ KIX) 经济客舱 $2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "大阪 (HKG ⇌ KIX) 商务客舱 $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "大阪 (HKG ⇌ KIX) 头等客舱 $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/nagoya_flight.jpg",
            "mainText1" : "北海道 (HKG ⇌ NGO) 经济客舱 $2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "北海道 (HKG ⇌ NGO) 商务客舱 $4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "北海道 (HKG ⇌ NGO) 头等客舱 $7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/fukuoka_flight.jpg",
            "mainText1" : "福冈 (HKG ⇌ FUK) 经济客舱 $2680+",
            "logo1A" : "images/cxd.png",
            "logo1B" : "",
            "mainText2" : "福冈 (HKG ⇌ FUK) 商务客舱 $4980+",
            "logo2A" : "images/cxd.png",
            "logo2B" : "",
            "mainText3" : "福冈 (HKG ⇌ FUK) 头等客舱 $7980+",
            "logo3A" : "images/cxd.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/taipei_flight.jpg",
            "mainText1" : "台北 (HKG ⇌ TPE) 经济客舱 $1280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/cxd.png",
            "mainText2" : "台北 (HKG ⇌ TPE) 商务客舱 $2680+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/cxd.png",
            "mainText3" : "台北 (HKG ⇌ TPE) 头等客舱 $3680+",
            "logo3A" : "images/cx.png",
            "logo3B" : "images/cxd.png",
        },{
            "mainImage" : "images/korea_flight.jpg",
            "mainText1" : "首尔 (HKG ⇌ ICN) 经济客舱 $2280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "首尔 (HKG ⇌ ICN) 商务客舱 $4280+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "首尔 (HKG ⇌ ICN) 头等客舱 $6280+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/boston_flight.jpg",
            "mainText1" : "波士顿 (HKG ⇌ BOS) 经济客舱 $23800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "波士顿 (HKG ⇌ BOS) 商务客舱 $23800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "波士顿 (HKG ⇌ BOS) 头等客舱 $23800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/aus_flight.jpg",
            "mainText1" : "悉尼 (HKG ⇌ SYD) 经济客舱 $13800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "悉尼 (HKG ⇌ SYD) 商务客舱 $13800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "悉尼 (HKG ⇌ SYD) 头等客舱 $13800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/london_flight.jpg",
            "mainText1" : "伦敦 (HKG ⇌ LHR) 经济客舱 $15800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "伦敦 (HKG ⇌ LHR) 商务客舱 $15800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "伦敦 (HKG ⇌ LHR) 头等客舱 $15800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        }
  ];
  $scope.flightSample = [
        {
            "airline" : "images/cx_big.jpg",
            "mainText" : "东京 (HKG ⇌ NRT/HND)",
            "class1" : "经济客舱",
            "price1" : "--------------------------$2880+",
            "class2" : "商务客舱",
            "price2" : "--------------------------$4980+",
            "class3" : "头等客舱",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "大阪 (HKG ⇌ KIX)",
            "class1" : "经济客舱",
            "price1" : "--------------------------$2880+",
            "class2" : "商务客舱",
            "price2" : "--------------------------$4980+",
            "class3" : "头等客舱",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cxd_big.jpg",
            "mainText" : "台北 (HKG ⇌ TPE)",
            "class1" : "经济客舱",
            "price1" : "--------------------------$1280+",
            "class2" : "商务客舱",
            "price2" : "--------------------------$2680+",
            "class3" : "头等客舱",
            "price3" : "--------------------------$3680+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "首尔 (HKG ⇌ ICN)",
            "class1" : "经济客舱",
            "price1" : "--------------------------$2280+",
            "class2" : "商务客舱",
            "price2" : "--------------------------$4280+",
            "class3" : "头等客舱",
            "price3" : "--------------------------$6280+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "波士顿 (HKG ⇌ BOS)",
            "class1" : "经济客舱",
            "price1" : "--------------------------$23800+",
            "class2" : "商务客舱",
            "price2" : "--------------------------$23800+",
            "class3" : "头等客舱",
            "price3" : "--------------------------$23800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "悉尼 (HKG ⇌ SYD)",
            "class1" : "经济客舱",
            "price1" : "--------------------------$13800+",
            "class2" : "商务客舱",
            "price2" : "--------------------------$13800+",
            "class3" : "头等客舱",
            "price3" : "--------------------------$13800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "伦敦 (HKG ⇌ LHR)",
            "class1" : "经济客舱",
            "price1" : "--------------------------$15800+",
            "class2" : "商务客舱",
            "price2" : "--------------------------$15800+",
            "class3" : "头等客舱",
            "price3" : "--------------------------$15800+",
        }
  ];
}
