define(["jquery","scrollto"],function($,scrollto){
	function BackTop(el,opts){
		this.opts=$.extend({},BackTop.DEFAULTS,opts);
		this.$el=$(el);
		this.scroll=new scrollto.ScrollTo({
		destination:0,
		speed:this.opts.speed
	});
		this._checkPosition();
		if(this.opts.mode=="move"){
			this.$el.on("click",$.proxy(this._move,this));
		}else{
			this.$el.on("click",$.proxy(this._go,this));
		}
		
		$(window).on("scroll",$.proxy(this._checkPosition,this));
	}
	BackTop.DEFAULTS={
		mode:"move",
		pos:$(window).height(),
		speed:8000
	}
	BackTop.prototype._move=function(){
		this.scroll.move();
	}
	BackTop.prototype._go=function(){
		this.scroll.go();
	}
	BackTop.prototype._checkPosition=function(){
		var $el=this.$el;
		if($(window).scrollTop()>this.opts.pos){
			$el.show(100);
		}else{
			$el.hide(100);
		}
	}
	// jquery插件常用格式
	$.fn.extend({
		backtop:function(opts){
			this.each(function(){
				new BackTop(this,opts);
			})
			return this;
		}
	});
	return{
		BackTop:BackTop
	}
}) 