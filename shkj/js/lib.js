$(function(){
	//动画效果弹出菜单
	$(".MENUS li").hover(function(){
		$(this).addClass("ok").find("dl").stop(true,true).slideUp(0).slideDown(300);
	},function(){
		$(".ok").find("dl").stop(true,true).slideUp(200);
		$(this).removeClass("ok");
	});
	$(".menuBtn").append('<b></b><b></b><b></b>');
	$(".menuBtn").click(function() {
		$(this).toggleClass("open");
		$(".menu").toggleClass ("on");
	});
});
$(function(){
	// 选项卡 鼠标点击
	$(".TAB_CLICK li").click(function(){
		var tab=$(this).parent(".TAB_CLICK");
		var con=tab.attr("id");
		var on=tab.find("li").index(this);
		$(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
		$(con).eq(on).show().siblings(con).hide();
	});
});

