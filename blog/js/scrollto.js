define(["jquery"],function($){
	function ScrollTo(opts){
		this.opts=$.extend({},ScrollTo.DEFAULTS,opts);
		this.$el=$("html,body");
	}
	ScrollTo.prototype.move=function(){
		var opts=this.opts;
		if($(window).scrollTop()!=opts.destination){
			if(!this.$el.is(":animated")){
				this.$el.animate({
					scrollTop:opts.destination
				},opts.speed);
			}
		}
	};
	
	ScrollTo.prototype.go=function(){
		var destination=this.opts.destination;
		if($(window).scrollTop()!=destination){
			this.$el.scrollTop(destination);
		}
	}
	ScrollTo.DEFAULTS={
		destination:0,
		speed:800
	};
	return {
		ScrollTo:ScrollTo
	};
});