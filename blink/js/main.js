var can;
var ctx;
var girlPic=new Image();
var starPic=new Image();
var num=60;
var stars=[];
var lastTime;
var deltaTime;
var switchy=false;
var life=0;
function init(){
	can=document.getElementById("canvas");
	ctx=can.getContext("2d");
	w=can.width;
	h=can.height;
	document.addEventListener("mousemove",mousemove,false);
	girlPic.src="src/star.jpg";
	starPic.src="src/1.png";
	for(var i=0;i<num;i++){
		var obj=new starObj();
		stars.push(obj);
		stars[i].init();
		}
		lastTime=Date.now();
		gameloop();
	}
document.body.onload=init;
function gameloop(){
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	//console.log(deltaTime);
	drawBackground();
	drawGirl();
	drawStars();
	aliveUpdate();
	}
function drawBackground(){
	ctx.fillStyle="#fff";
	ctx.fillRect(0,0,w,h);
	}
function drawGirl(){
	//dawImage(img,x,y)
	//x轴坐标正方向向右，y轴坐标正方向向下，（0,0）在canvas左上角
	ctx.drawImage(girlPic,100,150,600,300);
	}
function mousemove(e){
	if(e.offsetX||e.layerX){
		var px=e.offsetX==undefined?e.layerX:e.offsetX;
		var py=e.offsetY==undefined?e.layerY:e.offsetY;
		//out=false;in=true;
		//px在范围内&&py也在范围内
		if(px>100&&px<700&&py>150&&py<450){
			switchy=true;
			
			}else{
				switchy=false;
				}
			//console.log(switchy);
		}
	}