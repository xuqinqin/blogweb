requirejs.config({
	paths:{
		jquery:"jquery-3.2.1"
	}
})

requirejs(["jquery","backtop"],function($,backtop){
	// new backtop.BackTop($("#backTop"),{
	// 	// mode:"move",
	// 	// pos:100,
	// 	// speed:2000
	// 	mode:"go"
	// });
	
	// jquery插件常用写法
	$("#backTop").backtop({
		mode:"move",
		pos:100,
		speed:1000
	})
	// var scroll=new scrollto.ScrollTo({
	// 	destination:400,
	// 	speed:800
	// });
	// $("#backTop").on("click",$.proxy(scroll.move,scroll));
	// $(window).on("scroll",function(){
	// 	checkPosition($(window).height());
	// });
	// checkPosition($(window).height());
	// function move(){
	// 	$("html,body").animate({
	// 		scrollTop:0
	// 	},800);
	// }
	// function go(){
	// 	$("html,body").scrollTop(0);
	// }
	// function checkPosition(pos){
	// 	if($(window).scrollTop()>pos){
	// 		$("#backTop").show(100);
	// 	}else{
	// 		$("#backTop").hide(100);
	//  }
 //  }
})