var starObj=function(){
	this.x;
	this.y; 
	this.picNo;
	this.timer;
	this.xSpd;
	this.ySpd;
	}
starObj.prototype.init=function(){
	this.x=Math.random()*600;
	this.y=Math.random()*400;
	this.picNo=Math.floor(Math.random()*7);
	this.timer=0;
	this.xSpd=Math.random()*3-1.5;
	this.ySpd=Math.random()*3-1.5;
	}
starObj.prototype.update=function(){
	this.x+=this.xSpd*deltaTime*0.008;
	this.y+=this.ySpd*deltaTime*0.008;
	//this.x超过范围init
	if(this.x<10||this.x>580){
		this.init();
		return;
		}
	if(this.y<10||this.y>380){
		this.init();
		return;
		}
	this.timer+=deltaTime;
	if(this.timer>50){
		this.picNo+=1;
		this.picNo%=7;
		this.timer=0;
		}
	
}

starObj.prototype.draw=function(){
	ctx.save();
	ctx.globalAlpha=life;
	ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
	ctx.restore();
	}
function drawStars(){
	for(var i=0;i<num;i++){
		stars[i].update();
		stars[i].draw();
		}
	}
function aliveUpdate(){
	if(switchy){
		  life+=0.01*deltaTime*0.04;
		  if(life>1){
			  life=1;
			  }
		}
		else{
			life-=0.01*deltaTime*0.08;
			if(life<0){
				life=0;
				}
			}
		//console.log(switchy);
	}