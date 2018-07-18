
$( "#quotation-btn" ).click(function() {
	$("#popup-ad").modal('show');
});

$( ".free-quotation-btn" ).click(function() {
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
  
  $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
      $( ".view-more" ).click(function() {
        $("#popup-ad").modal('show');
      });
  });
});

app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
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
  $scope.avg_night = "AVG/NIGHT";
  
  $scope.Subscribe_message = "Subscribe to our newsletters and be the First Class to receive updates on our latest sales and exclusive offers";

  $scope.hotel_offer_name1 = "Hotel Café Royal";
  $scope.hotel_offer_location1 = "London";
  $scope.hotel_offer_price1 = "$5192.00";

  $scope.hotel_offer_name2 = "Grand Hyatt Tokyo";
  $scope.hotel_offer_location2 = "Tokyo";
  $scope.hotel_offer_price2 = "$3282.00";

  $scope.hotel_offer_name3 = "Mandarin Oriental Taipei";
  $scope.hotel_offer_location3 = "Taipei";
  $scope.hotel_offer_price3 = "$2821.00";

  $scope.hotel_offer_name4 = "Royal Sonesta Boston";
  $scope.hotel_offer_location4 = "Boston";
  $scope.hotel_offer_price4 = "$1954.00";

  $scope.hotel_offer_name5 = "JW Marriott Dongdaemun Square";
  $scope.hotel_offer_location5 = "Seoul";
  $scope.hotel_offer_price5 = "$2955.00";

  $scope.flightOffers = [
        {
            "mainImage" : "images/tokyo_flight.jpg",
            "mainText1" : "Tokyo (HKG ⇌ NRT/HND) Economy",
            "price1" : "$2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "Tokyo (HKG ⇌ NRT/HND) Business",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "Tokyo (HKG ⇌ NRT) First",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/osaka_flight.jpg",
            "mainText1" : "Osaka (HKG ⇌ KIX) Economy",
            "price1" : "$2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Osaka (HKG ⇌ KIX) Business",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Osaka (HKG ⇌ KIX) First",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/nagoya_flight.jpg",
            "mainText1" : "Nagoya (HKG ⇌ NGO) Economy",
            "price1" : "$2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Nagoya (HKG ⇌ NGO) Business",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Nagoya (HKG ⇌ NGO) First",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/fukuoka_flight.jpg",
            "mainText1" : "Fukuoka (HKG ⇌ FUK) Economy",
            "price1" : "$2680+",
            "logo1A" : "images/cxd.png",
            "logo1B" : "",
            "mainText2" : "Fukuoka (HKG ⇌ FUK) Business",
            "price2" : "$4980+",
            "logo2A" : "images/cxd.png",
            "logo2B" : "",
            "mainText3" : "Fukuoka (HKG ⇌ FUK) First",
            "price3" : "$7980+",
            "logo3A" : "images/cxd.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/taipei_flight.jpg",
            "mainText1" : "Taipei (HKG ⇌ TPE) Economy",
            "price1" : "$1280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/cxd.png",
            "mainText2" : "Taipei (HKG ⇌ TPE) Business",
            "price2" : "$2680+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/cxd.png",
            "mainText3" : "Taipei (HKG ⇌ TPE) First",
            "price3" : "$3680+",
            "logo3A" : "images/cx.png",
            "logo3B" : "images/cxd.png",
        },{
            "mainImage" : "images/korea_flight.jpg",
            "mainText1" : "Seoul (HKG ⇌ ICN) Economy",
            "price1" : "$2280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Seoul (HKG ⇌ ICN) Business",
            "price2" : "$4280+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Seoul (HKG ⇌ ICN) First",
            "price3" : "$6280+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/boston_flight.jpg",
            "mainText1" : "Boston (HKG ⇌ BOS) Economy",
            "price1" : "$17800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Boston (HKG ⇌ BOS) Business",
            "price2" : "$20800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Boston (HKG ⇌ BOS) First",
            "price3" : "$23800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/aus_flight.jpg",
            "mainText1" : "Sydney (HKG ⇌ SYD) Economy",
            "price1" : "$7800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "Sydney (HKG ⇌ SYD) Business",
            "price2" : "$10800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "Sydney (HKG ⇌ SYD) First",
            "price3" : "$13800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/london_flight.jpg",
            "mainText1" : "London (HKG ⇌ LHR) Economy",
            "price1" : "$9800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "London (HKG ⇌ LHR) Business",
            "price2" : "$12800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "London (HKG ⇌ LHR) First",
            "price3" : "$15800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        }
  ];
  $scope.flightSample = [
        {
            "airline" : "images/cx_big.jpg",
            "mainText" : "Tokyo (HKG ⇌ NRT/HND)",
            "class1" : "Economy",
            "price1" : "-----------------------------------$2880+",
            "class2" : "Business",
            "price2" : "------------------------------$4980+",
            "class3" : "First",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Osaka (HKG ⇌ KIX)",
            "class1" : "Economy",
            "price1" : "-----------------------------------$2880+",
            "class2" : "Business",
            "price2" : "------------------------------$4980+",
            "class3" : "First",
            "price3" : "--------------------------$7980+",
        },{
            "airline" : "images/cxd_big.jpg",
            "mainText" : "Taipei (HKG ⇌ TPE)",
            "class1" : "Economy",
            "price1" : "-----------------------------------$1280+",
            "class2" : "Business",
            "price2" : "------------------------------$2680+",
            "class3" : "First",
            "price3" : "--------------------------$3680+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Seoul (HKG ⇌ ICN)",
            "class1" : "Economy",
            "price1" : "-----------------------------------$2280+",
            "class2" : "Business",
            "price2" : "------------------------------$4280+",
            "class3" : "First",
            "price3" : "--------------------------$6280+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Boston (HKG ⇌ BOS)",
            "class1" : "Economy",
            "price1" : "-----------------------------------$23800+",
            "class2" : "Business",
            "price2" : "------------------------------$23800+",
            "class3" : "First",
            "price3" : "--------------------------$23800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "Sydney (HKG ⇌ SYD)",
            "class1" : "Economy",
            "price1" : "-----------------------------------$13800+",
            "class2" : "Business",
            "price2" : "------------------------------$13800+",
            "class3" : "First",
            "price3" : "--------------------------$13800+",
        },{
            "airline" : "images/cx_big.jpg",
            "mainText" : "London (HKG ⇌ LHR)",
            "class1" : "Economy",
            "price1" : "-----------------------------------$15800+",
            "class2" : "Business",
            "price2" : "------------------------------$15800+",
            "class3" : "First",
            "price3" : "--------------------------$15800+",
        }
  ];
  $scope.hotelSample = [
    {
        "name" : "Mandarin Oriental Taipei",
        "location" : "Taipei",
        "price" : "$2821.00",
        "img": "images/hotel_3.jpg",
        "text1": "Setting new standards for hotel luxury, Mandarin Oriental, Taipei is a five-star urban retreat in the heart of the city. With a sophisticated design, exquisite restaurants and the largest hotel spa in Taiwan, we offer a truly unforgettable experience.",
        "text2": "In addition to a full-service spa, Mandarin Oriental Taipei features an outdoor pool and a sauna. Dining is available at one of the hotel's 3 restaurants, and guests can grab a coffee at the coffee shop/café. A bar/lounge is on site where guests can unwind with a drink. Wired and wireless Internet access is available at a surcharge. A business centre is on-site at this 5-star property. 10 meeting rooms are available. This luxury hotel also offers a 24-hour fitness centre, 24-hour room service and a porter service. Complimentary self parking is available on-site. Mandarin Oriental Taipei is a smoke-free property."
    },{
        "name" : "JW Marriott Dongdaemun Square",
        "location" : "Seoul",
        "price" : "$2955.00",
        "img": "images/hotel_5.jpg",
        "text1": "In addition to a full-service spa, JW Marriott Dongdaemun Square Seoul features an indoor pool and a spa tub. Dining is available at one of the hotel's 2 restaurants, and guests can grab a coffee at one of the 2 coffee shops/cafés. Guests can unwind with a drink at one of the hotel's 2 bars/lounges. Public areas are equipped with complimentary wired and wireless Internet access.",
        "text2": "This 5-star property offers access to A business centre and meeting rooms. Event facilities measuring 11162 square feet (1037 square metres) include conference rooms. This luxury hotel also offers a kid's pool, a fitness centre and a sauna. On-site self parking is complimentary. JW Marriott Dongdaemun Square Seoul is a smoke-free property."
    },{
        "name" : "Grand Hyatt Tokyo",
        "location" : "Tokyo",
        "price" : "$3282.00",
        "img": "images/hotel_2.jpg",
        "text1": "Grand Hyatt Tokyo features an indoor pool and a spa tub. Dining is available at one of the hotel's 7 restaurants, and guests can grab a coffee at the coffee shop/café. Guests can unwind with a drink at one of the hotel's 3 bars/lounges. A computer station is located on-site and wireless Internet access is complimentary.",
        "text2": "This 5-star property offers access to A business centre, a limo/town car service and a meeting room. Event facilities measuring 0 square feet (0 square metres) include conference rooms. This luxury hotel also offers a fitness centre, a sauna and a terrace. For a surcharge, a round-trip airport shuttle (available at scheduled times) is offered to guests. On-site parking is available (surcharge). Grand Hyatt Tokyo is a smoke-free property."
    },{
        "name" : "Hotel Café Royal",
        "location" : "London",
        "price" : "$5192.00",
        "img": "images/hotel_1.jpg",
        "text1": "Hotel Café Royal features an indoor pool and a health club. Dining is available at one of the hotel's 3 restaurants, and guests can grab a coffee at the coffee shop/café. Guests can unwind with a drink at one of the hotel's 2 bars/lounges. A computer station is located on-site and wireless Internet access is complimentary. Business-related amenities at this 5-star property consist of A 24-hr business centre and meeting rooms. Event facilities measuring 8640 square feet (803 square metres) include conference centres.",
        "text2": "This luxury hotel also offers a sauna, spa services and tour or ticket assistance. On-site parking is available (surcharge). Hotel Café Royal is a smoke-free property."
    },{
        "name" : "Royal Sonesta Boston",
        "location" : "Boston",
        "price" : "$1954.00",
        "img": "images/hotel_4.jpg",
        "text1": "Royal Sonesta Boston features an indoor pool and a 24-hour fitness centre. Dining is available at one of the hotel's 2 restaurants, and guests can grab a coffee at the coffee shop/café. Guests can unwind with a drink at one of the hotel's 2 bars/lounges. A computer station is located on-site, and wired and wireless Internet access is complimentary. Business amenities at this 5-star property consist of A business centre, a limo/town car service and meeting rooms.",
        "text2": "Event facilities measuring 28000 square feet (2601 square metres) include conference rooms. This business-friendly hotel also offers a terrace, tour or ticket assistance and multilingual staff. Parking is available on-site at a surcharge. Royal Sonesta Boston is a smoke-free property."
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
  $scope.avg_night = "平均每晚";
  
  $scope.Subscribe_message = "訂閱我們的商務通訊，成為第一個獲得我們最新銷售和獨家優惠的最新的信息";

  $scope.hotel_offer_name1 = "皇家咖啡館酒店";
  $scope.hotel_offer_location1 = "倫敦"; 
  $scope.hotel_offer_price1 = "$5192.00";

  $scope.hotel_offer_name2 = "東京君悅酒店";
  $scope.hotel_offer_location2 = "東京";
  $scope.hotel_offer_price2 = "$3282.00";

  $scope.hotel_offer_name3 = "台北文華東方酒店";
  $scope.hotel_offer_location3 = "台北";
  $scope.hotel_offer_price3 = "$2821.00";

  $scope.hotel_offer_name4 = "波士頓皇家索尼斯塔酒店";
  $scope.hotel_offer_location4 = "波士頓";
  $scope.hotel_offer_price4 = "$1954.00";

  $scope.hotel_offer_name5 = "JW 東大門廣場萬豪酒店";
  $scope.hotel_offer_location5 = "首爾";
  $scope.hotel_offer_price5 = "$2955.00";

  $scope.flightOffers = [
        {
            "mainImage" : "images/tokyo_flight.jpg",
            "mainText1" : "東京 (HKG ⇌ NRT/HND) 經濟客艙",
            "price1" : "$2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "Tokyo (HKG ⇌ NRT/HND) 商務客艙",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "Tokyo (HKG ⇌ NRT) 頭等客艙",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/osaka_flight.jpg",
            "mainText1" : "大阪 (HKG ⇌ KIX) 經濟客艙",
            "price1" : "$2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "大阪 (HKG ⇌ KIX) 商務客艙",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "大阪 (HKG ⇌ KIX) 頭等客艙",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/nagoya_flight.jpg",
            "mainText1" : "北海道 (HKG ⇌ NGO) 經濟客艙",
            "price1" : "$2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "北海道 (HKG ⇌ NGO) 商務客艙",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "北海道 (HKG ⇌ NGO) 頭等客艙",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/fukuoka_flight.jpg",
            "mainText1" : "福岡 (HKG ⇌ FUK) 經濟客艙",
            "price1" : "$2680+",
            "logo1A" : "images/cxd.png",
            "logo1B" : "",
            "mainText2" : "福岡 (HKG ⇌ FUK) 商務客艙",
            "price2" : "$4980+",
            "logo2A" : "images/cxd.png",
            "logo2B" : "",
            "mainText3" : "福岡 (HKG ⇌ FUK) 頭等客艙",
            "price3" : "$7980+",
            "logo3A" : "images/cxd.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/taipei_flight.jpg",
            "mainText1" : "台北 (HKG ⇌ TPE) 經濟客艙",
            "price1" : "$1280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/cxd.png",
            "mainText2" : "台北 (HKG ⇌ TPE) 商務客艙",
            "price2" : "$2680+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/cxd.png",
            "mainText3" : "台北 (HKG ⇌ TPE) 頭等客艙",
            "price3" : "$3680+",
            "logo3A" : "images/cx.png",
            "logo3B" : "images/cxd.png",
        },{
            "mainImage" : "images/korea_flight.jpg",
            "mainText1" : "首爾 (HKG ⇌ ICN) 經濟客艙",
            "price1" : "$2280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "首爾 (HKG ⇌ ICN) 商務客艙",
            "price2" : "$4280+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "首爾 (HKG ⇌ ICN) 頭等客艙",
            "price3" : "$6280+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/boston_flight.jpg",
            "mainText1" : "波士頓 (HKG ⇌ BOS) 經濟客艙",
            "price1" : "$17800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "波士頓 (HKG ⇌ BOS) 商務客艙",
            "price2" : "$20800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "波士頓 (HKG ⇌ BOS) 頭等客艙",
            "price3" : "$23800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/aus_flight.jpg",
            "mainText1" : "悉尼 (HKG ⇌ SYD) 經濟客艙",
            "price1" : "$7800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "悉尼 (HKG ⇌ SYD) 商務客艙",
            "price2" : "$10800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "悉尼 (HKG ⇌ SYD) 頭等客艙",
            "price3" : "$13800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/london_flight.jpg",
            "mainText1" : "倫敦 (HKG ⇌ LHR) 經濟客艙",
            "price1" : "$9800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "倫敦 (HKG ⇌ LHR) 商務客艙",
            "price2" : "$12800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "倫敦 (HKG ⇌ LHR) 頭等客艙",
            "price3" : "$15800+",
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
  $scope.hotelSample = [
    {
        "name" : "台北文華東方酒店",
        "location" : "台北",
        "price" : "$2821.00",
        "img": "images/hotel_3.jpg",
        "text1": "台北文華東方酒店是一間超水準的 5 星級豪華酒店，座落於市中心繁華地段，讓您在城市綠洲的環境中盡情放鬆。酒店擁有多間精緻優雅的餐廳，並設有全台灣最大型的酒店水療中心，必定令每位來賓樂而忘返。",
        "text2": "台北文華東方酒店 除了有全方位 SPA，還設有室外泳池及桑拿。住客可於酒店的 3 間餐廳用膳，並於咖啡廳/Café 內享用咖啡。附設酒吧/酒廊，房客可輕鬆暢飲。提供收費有線及無線上網。 此 5 星酒店設有商務中心。酒店設有 10 會議室。這間高級酒店亦設有24 小時健身設備、24 小時客房送餐服務及服務員。店內提供免費自助泊車。 台北文華東方酒店是全面禁煙的酒店。"
    },{
        "name" : "JW 東大門廣場萬豪酒店",
        "location" : "首爾",
        "price" : "$2955.00",
        "img": "images/hotel_5.jpg",
        "text1": "首爾 JW 東大門廣場萬豪酒店 除了有全方位 SPA，還設有室內泳池及SPA 浴缸。住客可於酒店的 2 間餐廳用膳，並於 2 間咖啡店內享用咖啡。此酒店設有 2 間酒吧/酒廊，住客可放鬆心情，享受美酒。公眾地方免費提供有線及無線上網。",
        "text2": "此 5 星級酒店設有商務中心及會議室。會議及宴會設施佔地 11162 平方呎 (1037 平方米)，當中包括會議場地。這間高級酒店亦設有兒童游泳池、健身設施及桑拿。店內提供免費自助泊車。 首爾 JW 東大門廣場萬豪酒店是全面禁煙的酒店。"
    },{
        "name" : "東京君悅酒店",
        "location" : "東京",
        "price" : "$3282.00",
        "img": "images/hotel_2.jpg",
        "text1": "東京君悅酒店 除了有全方位 SPA，還設有室內泳池及SPA 浴缸。住客可於酒店的 7 間餐廳用膳，並於咖啡廳/Café 內享用咖啡。此酒店設有 3 間酒吧/酒廊，住客可放鬆心情，享受美酒。店內設有電腦工作站，並免費提供無線上網。",
        "text2": "此 5 星級酒店設有商務中心、豪華轎車服務及會議室。會議及宴會設施佔地 0 平方呎 (0 平方米)，當中包括會議場地。這間高級酒店亦設有健身設施、桑拿及露台。房客可使用來回機場接駁車 (定時服務)，費用另計。住客可使用泊車設施，費用另計。 東京君悅酒店是全面禁煙的酒店。"
    },{
        "name" : "皇家咖啡館酒店",
        "location" : "倫敦",
        "price" : "$5192.00",
        "img": "images/hotel_1.jpg",
        "text1": "皇家咖啡館酒店 除了有全方位 SPA，還設有室內泳池及健身俱樂部。住客可於酒店的 3 間餐廳用膳，並於咖啡廳/Café 內享用咖啡。此酒店設有 2 間酒吧/酒廊，住客可放鬆心情，享受美酒。店內設有電腦工作站，並免費提供無線上網。",
        "text2": "此 5 星酒店設有24 小時商務中心及會議室。會議及宴會設施佔地 8640 平方呎 (803 平方米)，當中包括會議中心。這間高級酒店亦設有桑拿、SPA 服務及旅行團諮詢/購票服務。住客可使用泊車設施，費用另計。 皇家咖啡館酒店是全面禁煙的酒店。"
    },{
        "name" : "波士頓皇家索尼斯塔酒店",
        "location" : "波士頓",
        "price" : "$1954.00",
        "img": "images/hotel_4.jpg",
        "text1": "波士頓皇家索尼斯塔酒店 設有室內泳池及24 小時健身中心。住客可於酒店的 2 間餐廳用膳，並於咖啡廳/Café 內享用咖啡。此酒店設有 2 間酒吧/酒廊，住客可放鬆心情，享受美酒。店內設有電腦工作站，並免費提供有線和無線上網。",
        "text2": "此 5 星酒店設有商務中心、豪華轎車服務及會議室。會議及宴會設施佔地 28000 平方呎 (2601 平方米)，當中包括會議場地。這間商務酒店亦設有露台、旅行團諮詢/購票服務及操多國語言的服務人員。於店內停泊車輛需額外付費。 波士頓皇家索尼斯塔酒店是全面禁煙的酒店。"
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
  $scope.avg_night = "平均每晚";

  $scope.Subscribe_message = "订阅我们的商务通讯，成为第一个获得我们最新销售和独家优惠的最新的信息";

  $scope.hotel_offer_name1 = "皇家咖啡馆酒店";
  $scope.hotel_offer_location1 = "伦敦"; 
  $scope.hotel_offer_price1 = "$5192.00";

  $scope.hotel_offer_name2 = "东京君悦酒店";
  $scope.hotel_offer_location2 = "东京";
  $scope.hotel_offer_price2 = "$3282.00";

  $scope.hotel_offer_name3 = "台北文华东方酒店";
  $scope.hotel_offer_location3 = "台北";
  $scope.hotel_offer_price3 = "$2821.00";

  $scope.hotel_offer_name4 = "波士顿皇家索尼斯塔酒店";
  $scope.hotel_offer_location4 = "波士顿";
  $scope.hotel_offer_price4 = "$1954.00";

  $scope.hotel_offer_name5 = "JW 东大门广场万豪酒店";
  $scope.hotel_offer_location5 = "首尔";
  $scope.hotel_offer_price5 = "$2955.00";

  $scope.flightOffers = [
        {
            "mainImage" : "images/tokyo_flight.jpg",
            "mainText1" : "东京 (HKG ⇌ NRT/HND) 经济客舱",
            "price1" : "$2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/jal.png",
            "mainText2" : "东京 (HKG ⇌ NRT/HND) 商务客舱",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/jal.png",
            "mainText3" : "东京 (HKG ⇌ NRT) 头等客舱",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/osaka_flight.jpg",
            "mainText1" : "大阪 (HKG ⇌ KIX) 经济客舱",
            "price1" : "$2880+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "大阪 (HKG ⇌ KIX) 商务客舱",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "大阪 (HKG ⇌ KIX) 头等客舱",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/nagoya_flight.jpg",
            "mainText1" : "北海道 (HKG ⇌ NGO) 经济客舱",
            "price1" : "$2680+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "北海道 (HKG ⇌ NGO) 商务客舱",
            "price2" : "$4980+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "北海道 (HKG ⇌ NGO) 头等客舱",
            "price3" : "$7980+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/fukuoka_flight.jpg",
            "mainText1" : "福冈 (HKG ⇌ FUK) 经济客舱",
            "price1" : "$2680+",
            "logo1A" : "images/cxd.png",
            "logo1B" : "",
            "mainText2" : "福冈 (HKG ⇌ FUK) 商务客舱",
            "price2" : "$4980+",
            "logo2A" : "images/cxd.png",
            "logo2B" : "",
            "mainText3" : "福冈 (HKG ⇌ FUK) 头等客舱",
            "price3" : "$7980+",
            "logo3A" : "images/cxd.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/taipei_flight.jpg",
            "mainText1" : "台北 (HKG ⇌ TPE) 经济客舱",
            "price1" : "$1280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "images/cxd.png",
            "mainText2" : "台北 (HKG ⇌ TPE) 商务客舱",
            "price2" : "$2680+",
            "logo2A" : "images/cx.png",
            "logo2B" : "images/cxd.png",
            "mainText3" : "台北 (HKG ⇌ TPE) 头等客舱",
            "price3" : "$3680+",
            "logo3A" : "images/cx.png",
            "logo3B" : "images/cxd.png",
        },{
            "mainImage" : "images/korea_flight.jpg",
            "mainText1" : "首尔 (HKG ⇌ ICN) 经济客舱",
            "price1" : "$2280+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "首尔 (HKG ⇌ ICN) 商务客舱",
            "price2" : "$4280+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "首尔 (HKG ⇌ ICN) 头等客舱",
            "price3" : "$6280+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/boston_flight.jpg",
            "mainText1" : "波士顿 (HKG ⇌ BOS) 经济客舱",
            "price1" : "$17800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "波士顿 (HKG ⇌ BOS) 商务客舱",
            "price2" : "$20800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "波士顿 (HKG ⇌ BOS) 头等客舱",
            "price3" : "$23800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/aus_flight.jpg",
            "mainText1" : "悉尼 (HKG ⇌ SYD) 经济客舱",
            "price1" : "$7800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "悉尼 (HKG ⇌ SYD) 商务客舱",
            "price2" : "$10800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "悉尼 (HKG ⇌ SYD) 头等客舱",
            "price3" : "$13800+",
            "logo3A" : "images/cx.png",
            "logo3B" : ""
        },{
            "mainImage" : "images/london_flight.jpg",
            "mainText1" : "伦敦 (HKG ⇌ LHR) 经济客舱",
            "price1" : "$9800+",
            "logo1A" : "images/cx.png",
            "logo1B" : "",
            "mainText2" : "伦敦 (HKG ⇌ LHR) 商务客舱",
            "price2" : "$12800+",
            "logo2A" : "images/cx.png",
            "logo2B" : "",
            "mainText3" : "伦敦 (HKG ⇌ LHR) 头等客舱",
            "price3" : "$15800+",
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
  $scope.hotelSample = [
    {
        "name" : "台北文华东方酒店",
        "location" : "台北",
        "price" : "$2821.00",
        "img": "images/hotel_3.jpg",
        "text1": "台北文华东方酒店是城市中心地段的豪华度假胜地，为奢华酒店设立了新的标杆。精致的设计、精美的餐厅和台湾最大的酒店内水疗中心，带来令人无比难忘的入住体验。",
        "text2": "台北文华东方酒店除了提供全套 SPA 服务外，还提供室外游泳池和桑拿。住客可以在酒店的3 间餐厅就餐，还可以在咖啡店/咖啡厅享用咖啡。酒店内有酒吧/酒廊，住客可在那里畅饮放松。收费提供有线和无线上网。 此 5 星级酒店内提供商务中心。提供 10 间会议室。此豪华酒店还提供24 小时健身中心、24 小时客房送餐服务和行李员/门卫。酒店内提供免费自助泊车。 台北文华东方酒店是无烟酒店。"
    },{
        "name" : "JW 东大门广场万豪酒店",
        "location" : "首尔",
        "price" : "$2955.00",
        "img": "images/hotel_5.jpg",
        "text1": "首尔 JW 东大门广场万豪酒店除了提供全套 SPA 服务外，还提供室内游泳池和SPA 浴缸。住客可以在酒店的2 间餐厅就餐，还可以在2 间咖啡馆享用咖啡。住客可以在酒店的2 间酒吧/酒廊内畅饮放松。公共区域提供免费有线和无线上网。",
        "text2": "此 5 星级酒店提供商务中心和会议室。面积达 11162 平方英尺（1037 平方米）的会展设施包括 会议场地。此豪华酒店还提供儿童游泳池、健身中心和桑拿。酒店内自助泊车免费。 首尔 JW 东大门广场万豪酒店是无烟酒店。"
    },{
        "name" : "东京君悦酒店",
        "location" : "东京",
        "price" : "$3282.00",
        "img": "images/hotel_2.jpg",
        "text1": "东京君悦酒店除了提供全套 SPA 服务外，还提供室内游泳池和SPA 浴缸。住客可以在酒店的7 间餐厅就餐，还可以在咖啡店/咖啡厅享用咖啡。住客可以在酒店的3 间酒吧/酒廊内畅饮放松。酒店内设有电脑站点，并提供免费无线上网。",
        "text2": "此 5 星级酒店提供商务中心、豪华轿车或公务车服务和会议室。面积达 0 平方英尺（0 平方米）的会展设施包括 会议场地。此豪华酒店还提供健身中心、桑拿和露台。住客可使用收费的定时往返机场班车。"
    },{
        "name" : "皇家咖啡馆酒店",
        "location" : "伦敦",
        "price" : "$5192.00",
        "img": "images/hotel_1.jpg",
        "text1": "皇家咖啡馆酒店除了提供全套 SPA 服务外，还提供室内游泳池和健身俱乐部。住客可以在酒店的3 间餐厅就餐，还可以在咖啡店/咖啡厅享用咖啡。住客可以在酒店的2 间酒吧/酒廊内畅饮放松。酒店内设有电脑站点，并提供免费无线上网。",
        "text2": "此 5 星级酒店的商务相关设施包括24 小时商务中心和会议室。面积达 8640 平方英尺（803 平方米）的会展设施包括 会议中心。此豪华酒店还提供桑拿、SPA 服务和旅游/票务服务。酒店内提供收费的停车设施。 皇家咖啡馆酒店是无烟酒店。"
    },{
        "name" : "波士顿皇家索尼斯塔酒店",
        "location" : "波士顿",
        "price" : "$1954.00",
        "img": "images/hotel_4.jpg",
        "text1": "波士顿皇家索尼斯塔酒店提供室内游泳池和24 小时健身中心。住客可以在酒店的2 间餐厅就餐，还可以在咖啡店/咖啡厅享用咖啡。住客可以在酒店的2 间酒吧/酒廊内畅饮放松。酒店内设有电脑站点，并提供免费有线和无线上网。",
        "text2": "此 5 星级酒店的商务相关设施包括商务中心、豪华轿车或公务车服务和会议室。面积达 28000 平方英尺（2601 平方米）的会展设施包括 会议场地。此商务便利型酒店还提供露台、旅游/票务服务和会说多种语言的服务员。酒店内提供停车服务，需要收费。 波士顿皇家索尼斯塔酒店是无烟酒店。"
    }
  ];
}
