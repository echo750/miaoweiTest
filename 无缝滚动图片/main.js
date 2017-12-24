		window.onload=function(){
			var roll=document.getElementById("roll");
			var left=document.getElementById('left');
			var right=document.getElementById('right');
			var oUl=roll.getElementsByTagName("ul")[0];
			var oList=oUl.getElementsByTagName('li');
			var timer=null;
			var ispeed;
			oUl.innerHTML+=oUl.innerHTML;
			left.onmousedown=function(){
				timer=setInterval(doMove,30);
				ispeed=5;
			}
			left.onmouseup=function(){
				clearInterval(timer);
			};
			right.onmousedown=function(){
				timer=setInterval(doMove,30);
				ispeed=-5;
			};
			right.onmouseup=function(){
				clearInterval(timer);
			};
			function doMove(){
				oUl.style.left=oUl.offsetLeft-ispeed+'px';
				if(oUl.offsetLeft<-oUl.offsetWidth/2){
					oUl.style.left='0px';
				}else if(oUl.offsetLeft>0){
					oUl.style.left=-oUl.offsetWidth/2;
				}
			}
		}