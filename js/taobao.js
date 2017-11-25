
window.onload = function(){//开场动画
		



		var start = document.getElementById('start');
		start.style.cssText = "opacity:0;";
		setTimeout(function(){start.style.cssText ="display:none"},2000);

		var main = document.getElementById('main');
		main.style.cssText = "display:block";
	}
/*----------------------获取屏幕高度宽度-----------------------------------*/
	var windowWidth = document.body.clientWidth;
	var windowHeight = document.body.clientHeight;
/*----------------------获取屏幕高度宽度-----------------------------------*/

/*-------------------------header search 搜索框-----------------------------*/
/*或者通过背景图的形式，截取放大镜及文字整个图片作为背景，value为空时换背景图*/
	var search = document.getElementById('search');
	var searchinner = "<span class=\"tips\" id=\"search_tips\" contenteditable=\"false\">寻找宝贝店铺</span>";
	function trim(str){ //删除左右两端的空格  
　　     return str.replace(/(^\s*)|(\s*$)/g, "");  
　　 }  

	search.onblur = function(){
		if(trim(search.innerHTML.replace(/<br>/g,"").replace(/&nbsp;/g,"")) == ""){
			search.innerHTML = searchinner;
		}
	}
	search.onfocus = function(){
		if (trim(search.innerHTML) ==searchinner) {
			search.innerHTML = "&nbsp;"
		}	
	}
/*---------------------------------------------------------------------------*/

/*--------------------------banner 轮播图----------------------------------*/
 	var banner = document.getElementById('banner');
 	var bannerSpeed = 5000;															//设置banner轮播图速度；
 	var banner_img = ["images/TB2qXRycUgQMeJjy0FfXXbddXXa_!!135-0-luban.jpg_q50.jpg",
 					  "images/TB1Hr1tdN3IL1JjSZPfSuwrUVXa.jpg_q50.jpg",
 					  "images/TB2zEs0d7.HL1JjSZFuXXX8dXXa_!!118-0-luban.jpg_q50.jpg",
 					  "images/TB12OZkbMsSMeJjSspeSuu77VXa.jpg_q50.jpg",
 					  "images/TB21HH0dzJTMKJjSZFPXXbHUFXa_!!146-0-luban.jpg_q50.jpg",
 					  "images/TB22yMvcmFRMKJjy0FhXXX.xpXa_!!52-0-luban.jpg_q50.jpg",
 					  "images/TB24Hakem3PL1JjSZFtXXclRVXa_!!89-0-luban.jpg_q50.jpg",
 					  "images/TB29NSYcgoSMeJjSspaXXbMOFXa_!!14-0-luban.jpg_q50.jpg"];
 	var banner_html = "<ul id='banner_ul'>";
	for(var i=0;i<banner_img.length;i++){
		banner_html +='<li class="banner_li"><a href="javascript:;"><img id="banner_img" src="'+banner_img[i]+'"></a></li>';
	}
 					  
	banner_html +="</ul><p>";
	var banner_span = new Array();
	for(var i=0;i<banner_img.length;i++){
		banner_html +=	 "<span id='banner_span"+i+"'></span>"
		
	}
	banner_html +="</p>"; 
	banner.innerHTML += banner_html;
	for(var i=0;i<banner_img.length;i++){
		banner_span[i] = document.getElementById('banner_span'+i);
	}
	var bannerRoopIndex = 0;
	function lunbo(){
		bannerRoopIndex++;
		if(bannerRoopIndex == (banner_img.length-1)){
			bannerRoopIndex = 0;
		}
		banner_ul.style.left = "-"+bannerRoopIndex*windowWidth+"px"; 
		for(var i=0;i<banner_img.length;i++){
			banner_span[i].style.cssText="background:rgba(255,255,255,0.7);"
		}
		banner_span[bannerRoopIndex].style.cssText="background:#FF5500";
	}
	var bannerRoop ;
		bannerRoop = setInterval(lunbo,bannerSpeed);
	banner.onmouseover=function() {clearInterval(bannerRoop)}
	banner.onmouseout=function() {bannerRoop=setInterval(lunbo,bannerSpeed)}
 	/*--------------------------banner 轮播图- end---------------------------------*/
 	/*------------------------#banner 设置高度-----------------------------------*/
 	
 	var banner_ul = document.getElementById('banner_ul');
 	/*	banner.style.height = banner_ul.clientHeight+"px";*/
 	banner_ul.style.width = (banner_img.length+1)*windowWidth+"px";
 	document.styleSheets[0].insertRule('.banner_li{width:'+windowWidth+'px;}',0);
 /*---------------------------------------------------*/


 /*----------------------nav type  --------------------------------*/
 	var navtype_list = [
 						{"id":1,"name":"天猫","img":"images/type1.jpg"},
 						{"id":2,"name":"聚划算","img":"images/type2.jpg"},
 						{"id":3,"name":"天猫国际","img":"images/type3.jpg"},
 						{"id":4,"name":"外卖","img":"images/type4.jpg"},
 						{"id":5,"name":"天猫超市","img":"images/type5.jpg"},
 						{"id":6,"name":"充值中心","img":"images/type6.jpg"},
 						{"id":7,"name":"飞猪旅行","img":"images/type7.jpg"},
 						{"id":8,"name":"领金币","img":"images/type8.jpg"},
 						{"id":9,"name":"拍卖","img":"images/type9.jpg"},
 						{"id":10,"name":"分类","img":"images/type10.jpg"}
 	];
 	var navtype = document.getElementById('navtype');
 	var navtype_html ='';
 	for(var i = 1 ;i<= navtype_list.length;i++)
 	{
 		navtype_html += '<div class="type"><img src="'+navtype_list[i-1].img+'">'
					   +'<p>'+navtype_list[i-1].name+'</p></div>';
 	}
 	navtype.innerHTML = navtype_html;
/*---------------------------------------------------------------------*/
/*--------------------------淘宝头条------------------------------------*/
	var new_dis = document.getElementById('new_dis');
	var new_tip = document.getElementById('new_tip');
	var newsIndex = 0;
	var newsSpeed = 3000;
	var news_list = [
					{"tip":"疯抢","dis":"血拼！100万份爆款九元抢！"},
					{"tip":"热门","dis":"土豪撒钱，400万仅此一天!"},
					{"tip":"旅行","dis":"爽翻！999元开战斗机！"}
	];
	function newslunbo (){
		newsIndex ++ ;
		if (newsIndex == news_list.length) {
			newsIndex = 0;
		}
		new_dis.innerHTML = news_list[newsIndex].dis;
		new_tip.innerHTML = news_list[newsIndex].tip;
	}
	var newsRoop;
		newsRoop = setInterval(newslunbo,newsSpeed);
	new_dis.onmouseover = function(){clearInterval(newsRoop);};
	new_dis.onmouseout = function(){newsRoop = setInterval(newslunbo,newsSpeed);};
/*------------------------rob------------------------------*/
var rob = document.getElementById('rob');
var rob1 ={"name":"淘抢购","tip":"限时限量汇全网好货","img":"images/rob1.jpg","year":2017,"month":9,"day":20,"hour":11,"minute":0,"second":0};
var rob2 ={"name":"有好货","tip":"好品味从挑剔开始","tip2":"品质生活指南","img":"images/rob2.jpg"};
var rob34=[
			{"name":"爱逛街","tip":"正流行的好品味","img":"images/rob3.jpg"},
			{"name":"必买清单","tip":"都帮你整理好啦","img":"images/rob4.jpg"}
]

var rob_html ='';
	rob_html+='<div class="merchandise0 merchandise">'
			 +'<p class="name">'+rob1.name+'</p>'
			 +'<p class="tip">'+rob1.tip+'</p>'
			 +'<p class="time"><span id="hour">00</span>:<span id="minit">00</span>:<span id="spit">00</span></p>'
			 +'<img src="'+rob1.img+'"/>'
			 +'</div>';
	rob_html+='<div class="merchandise1 merchandise">'
			 +'<div class="left">'
			 +'<p class="name">'+rob2.name+'</p>'
			 +'<p class="tip">'+rob2.tip+'</p>'
			 +'<p class="tip2">'+rob2.tip2+'</p>'
			 +'</div>'
			 +'<div class="right">'
			 +'<img src="'+rob2.img+'"/>'
			 +'</div>'
			 +'</div>';
	for(var i=0;i<rob34.length;i++){
		rob_html+='<div class="merchandise'+(i+2)+' merchandise">'
				 +'<p class="name">'+rob34[i].name+'</p>'
				 +'<p class="tip">'+rob34[i].tip+'</p>'
				 +'<img src="'+rob34[i].img+'"/>'
				 +'</div>';
	}
rob.innerHTML = rob_html;

/*设置倒计时*/
var ohour = document.getElementById('hour');
var ominit = document.getElementById('minit');
var osecond = document.getElementById('spit'); 
function ShowCountDown(year,month,day,hour,minute,second) 
{ 
var now = new Date(); 
var endDate = new Date(year, month-1, day,hour,minute,second); 
var leftTime=endDate.getTime()-now.getTime(); 
var leftsecond = parseInt(leftTime/1000); 
//var day1=parseInt(leftsecond/(24*60*60*6)); 
var day1=Math.floor(leftsecond/(60*60*24)).toString(); 
var hour=Math.floor((leftsecond-day1*24*60*60)/3600).toString(); 
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60).toString(); 
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60).toString();

if(second.length == 1)
{
	second = "0"+second;
}
if(minute.length == 1)
{
	minute = "0"+minute;
}
if(hour.length == 1)
{
	hour = "0" + hour;
}

ohour.innerHTML = hour;
ominit.innerHTML = minute;
osecond.innerHTML = second;

} 
window.setInterval(function(){ShowCountDown(rob1.year,rob1.month,rob1.day,rob1.hour,rob1.minute,rob1.second);}, 1000); 
/*---------*/
/*------------------------rob------------------------------*/
/*-------------------------cheap----------------------------*/
	var cheapness = document.getElementById('cheapness');
	var cheapness_list =[
						{"name":"非常大牌","tip":"超级大牌 限时低价","img":"images/cheap1.jpg","state":"fabulous"},
						{"name":"全球精选","tip":"冬日必备品","img":"images/cheap2.jpg","state":"null"},
						{"name":"超值量贩","tip":"新年礼包","img":"images/cheap3.jpg","state":"null"},
						{"name":"聚名品","tip":"轻奢限量抢","img":"images/cheap4.jpg","state":"null"},
						{"name":"天天特价","tip":"每日精选欠款好货","img":"images/cheap5.jpg","state":"null"},
						{"name":"品牌店庆","tip":"1元秒杀","img":"images/cheap6.jpg","state":"null"},
						{"name":"魅力惠","tip":"奢品闪购","img":"images/cheap7.jpg","state":"null"},
						{"name":"品牌清仓","tip":"好货超便宜","img":"images/cheap8.jpg","state":"null"}
	];
	var cheapness_html ='';
	for(var i=0;i<cheapness_list.length;i++){
		cheapness_html +='<div class="merchandise'+i+' merchandise '+cheapness_list[i].state+'">'
					    +'<p class="name">'+cheapness_list[i].name+'</p>'
					    +'<p class="tip">'+cheapness_list[i].tip+'</p>'
					    +'<img src="'+cheapness_list[i].img+'"/>'
					    +'</div>';
	}
	cheapness.innerHTML += cheapness_html;
/*---------------------------------------------------*/
/*--------------------------mustbuy-----------------------*/
	var mustbuy = document.getElementById('mustbuy');
	var mustbuy_list = [
						{"name":"全球时尚","tip":"大牌精致时尚","img":"images/mustbuy1.jpg","state":"FASHION"},
						{"name":"品牌街","tip":"什么牌子好","img":"images/mustbuy2.jpg","state":"HOT"},
						{"name":"天猫换新","tip":"品牌精选新品","img":"images/mustbuy3.jpg","state":"null"},
						{"name":"天天搞机","tip":"新品12期免息抢","img":"images/mustbuy4.jpg","state":"null"},
						{"name":"喵鲜生","tip":"榴莲新季上市","img":"images/mustbuy5.jpg","state":"null"},
						{"name":"苏宁易购","tip":"大牌好货低价抢","img":"images/mustbuy6.jpg","state":"null"}
	];
	var mustbuy_html = '';
	for(var i= 0;i<2;i++)
	{
		mustbuy_html +='<div class="merchandise'+i+' merchandise">'
					  +'<div class="left">'
					  +'<p class="name">'+mustbuy_list[i].name+'</p>'
					  +'<p class="tip">'+mustbuy_list[i].tip+'</p>'
					  +'<span>'+mustbuy_list[i].state+'</span>'
					  +'</div>'
					  +'<div class="right">'
					  +'<img src="'+mustbuy_list[i].img+'">'
					  +'</div>'
					  +'</div>';
	}
	for(var i= 2;i<mustbuy_list.length;i++){
		mustbuy_html +='<div class="merchandise'+i+' merchandise">'
					  +'<p class="name">'+mustbuy_list[i].name+'</p>'
					  +'<p class="tip">'+mustbuy_list[i].tip+'</p>'
					  +'<img src="'+mustbuy_list[i].img+'"/>'
					  +'</div>';
	}
	mustbuy.innerHTML += mustbuy_html;
/*--------------------------mustbuy-----------------------*/
/*----------------------------features-----------------------------*/
	var features = document.getElementById('features');
	var features_list = [
						{"name":"全球购","tip":"探索全球美好生活","img":"images/features1.jpg","state":"global"},
						{"name":"淘宝汇吃","tip":"美食任性吃","img":"images/features2.jpg","state":"null"},
						{"name":"极有家","tip":"造有品的家","img":"images/features3.jpg","state":"null"},
						{"name":"拍卖","tip":"法院执法车","img":"images/features4.jpg","state":"null"},
						{"name":"中国制造","tip":"好货不贵 智选良品","img":"images/features5.jpg","state":"life"},
						{"name":"医药健康","tip":"自营特惠","img":"images/features6.jpg","state":"null"},
						{"name":"淘宝众筹","tip":"龙泉大保剑","img":"images/features7.jpg","state":"null"},
						{"name":"每日新品","tip":"找新品戳我","img":"images/features8.jpg","state":"null"}
					];
	var features_html = '';
	for(var i=0;i<features_list.length;i++){
		features_html += '<div class="merchandise'+i+' merchandise '+features_list[i].state+'">'
					   + '<p class="name">'+features_list[i].name+'</p>'
					   + '<p class="tip">'+features_list[i].tip+'</p>'
					   + '<img src="'+features_list[i].img+'"/></div>'
	}
	features.innerHTML += features_html;
/*----------------------------features-----------------------------*/
/*---------------------------------hot-------------------------------------*/
	var hot = document.getElementById('hot');
	var hot_list = [
					{"name":"iFashion","dis":"春季种草好物","img":"images/hot1.jpg"},
					{"name":"潮玩城","dis":"发现发烧装备","img":"images/hot2.jpg"},
					{"name":"亲宝贝","dis":"花少钱养好娃","img":"images/hot3.jpg"},
					{"name":"精选市场","dis":"更多好市场","img":"images/hot4.jpg"},
					{"name":"辣妈党","dis":"精美休闲针织衫 伴你无限好孕","img":"images/hot5.jpg"},
					{"name":"玩具百宝箱","dis":"芭比奇幻世界，夏日玩乐无极限","img":"images/hot6.jpg"},
					{"name":"美鞋汇","dis":"轮短靴，这个秋冬以偶这几款就够了","img":"images/hot7.jpg"},
					{"name":"摩登潮童","dis":"碎花连衣裙 穿出优雅小公主","img":"images/hot8.jpg"},
					{"name":"游戏集中营","dis":"地下城与勇士 勇者的选择","img":"images/hot9.jpg"},
					{"name":"商场同款","dis":"带金属扣真皮鞋稳重大气","img":"images/hot10.jpg"},
	];
	var hot_html = '';
	for(var i=0 ;i<hot_list.length;i++){
		hot_html +='<div class="merchandise'+i+' merchandise">'
				  +'<p class="name">'+hot_list[i].name+'</p>'
				  +'<p class="dis">'+hot_list[i].dis+'</p>'
				  +'<img src="'+hot_list[i].img+'">'
				  +'</div>'
	}
	hot.innerHTML += hot_html;
/*---------------------------hot----------------------------*/
/*-----------------------------goodshop--------------------------------*/
	var shop_left = document.getElementById('shop_left');
	var shop_right = document.getElementById('shop_right');
	var shop_left_list = ["images/goodshop1.jpg","images/goodshop3.jpg","images/goodshop4.jpg"];
	var shop_right_list = ["images/goodshop2.jpg","images/goodshop5.jpg","images/goodshop6.jpg"];
	var shop_left_html = '';
	var shop_right_html = '';
	for(var i=0;i<=2;i++)
	{
		shop_left_html += '<div class="shop'+(i+1)+'" style="background:url('+shop_left_list[i]+') no-repeat;background-size:100% 100%;"></div>';
		shop_right_html += '<div class="shop'+(i+1)+'" style="background:url('+shop_right_list[i]+') no-repeat;background-size:100% 100%;"></div>';
	}
	shop_left_html+='&nbsp;&nbsp;今日推荐';
	shop_right_html+='&nbsp;&nbsp;有逼格';
	shop_left.innerHTML = shop_left_html;
	shop_right.innerHTML = shop_right_html;
/*-----------------------------goodshop--------------------------------*/
/*------------------------------youlike_list ---------------------------------------*/
 	var oyoulike = document.getElementById('youlike_list');
 	var youlike_html = '';
 	var youlike_list =[
 						{"img":"images/youlike1.jpg","dis":"[为你推荐]厨房用品调料盒套装 带分格调味罐胡","price":"25.3"},
 						{"img":"images/youlike2.jpg","dis":"[为你推荐]家欣平板拖把替换装 拖把布 微纤维拖布 62c","price":"18.0"},
 						{"img":"images/youlike3.jpg","dis":"[为你推荐]欧式面膜收纳盒子超大号 桌面于是化妆品护肤","price":"15.9"},
 						{"img":"images/youlike4.jpg","dis":"[为你推荐]【宜家代购】列纳特轮子出题文件柜收纳盒","price":"69.0"},
 						{"img":"images/youlike5.jpg","dis":"[为你推荐]韩版类似围裙 韩式家具围裙 工作围裙咖啡店","price":"38.94"},
 						{"img":"images/youlike6.jpg","dis":"[为你推荐]紫砂茶叶罐陶瓷 密封罐 防潮 大号手工哥窑茶","price":"39.0"},
 						{"img":"images/youlike7.jpg","dis":"[为你推荐]寻光设计 轻奢棉绒简约超柔保暖居家鞋包跟","price":"39.0"},
 						{"img":"images/youlike8.jpg","dis":"[为你推荐]手抓饼 面饼 25片台湾手抓饼家庭装煎饼早","price":"29.9"},
 						{"img":"images/youlike9.jpg","dis":"[为你推荐]包邮卡通可爱陶瓷位于hello kitty洁具多来a梦","price":"46.8"},
 						{"img":"images/youlike10.jpg","dis":"[为你推荐]木啊啊 楠竹长柄沐浴刷 搓澡刷子清洁洗澡刷","price":"17.4"},
 						{"img":"images/youlike11.jpg","dis":"[为你推荐]新款 pilot白了VSangel heart香味笔 芳香活","price":"88.0"},
 						{"img":"images/youlike12.jpg","dis":"[为你推荐]农家手工编织 竹筐柳框 柳条扁 竹筐 柳条 柳条","price":"24.9"},
 						{"img":"images/youlike13.jpg","dis":"[为你推荐]折叠衣柜收纳架宿舍收纳挂袋悬挂式收纳挂","price":"19.5"},
 						{"img":"images/youlike14.jpg","dis":"[为你推荐]家用挤蒜 剥蒜器 夹蒜器 蒜蓉器 捣蒜器","price":"19.8"},
 						];
 	for(var i= 0;i<youlike_list.length;i++){
 		youlike_html   +='<div class=" merchandise">'
 						+'<img src="'+youlike_list[i].img+'">'
 						+'<p>'+youlike_list[i].dis+'</p>'
 						+'<span>￥ '+youlike_list[i].price+'</span></div>';
 	}
 	oyoulike.innerHTML = youlike_html;
