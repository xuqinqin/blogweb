var can;
var ctx;
var imagelPic=new Image();
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
	//w=can.width;
	//h=can.height;
	document.addEventListener("mousemove",mousemove,false);
	imagelPic.src="img/pic03.jpg";
	starPic.src="img/1.png";
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
	//drawBackground();
	drawImage();
	drawStars();
	aliveUpdate();
	}
/*function drawBackground(){
	ctx.fillStyle="#333";
	ctx.fillRect(0,0,w,h);
	}*/
function drawImage(){
	//dawImage(img,x,y)
	//x轴坐标正方向向右，y轴坐标正方向向下，（0,0）在canvas左上角
	ctx.drawImage(imagelPic,0,0,600,400);
	}
function mousemove(e){
	if(e.offsetX||e.layerX){
		var px=e.offsetX==undefined?e.layerX:e.offsetX;
		var py=e.offsetY==undefined?e.layerY:e.offsetY;
		//out=false;in=true;
		//px在范围内&&py也在范围内
		if(px>0&&px<600&&py>0&&py<400){
			switchy=true;
			
			}else{
				switchy=false;
				}
			//console.log(switchy);
		}
	}