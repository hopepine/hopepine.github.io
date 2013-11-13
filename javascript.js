	window.onload=function(){
			var list=document.getElementById("list");
			list.onmouseover=function(){
					hiddenAndAppear(0);
				}
			list.onmouseout=function(){
					hiddenAndAppear(-135);
				}
	}
	
	
	
	
	var iTime=null;
			
	function hiddenAndAppear(iTarget){
		var speed=0;
		var odiv=document.getElementById("list");
				
		if(iTarget>odiv.offsetLeft){
			speed=5;
		}
		else{
			speed=-5;
		}
		clearInterval(iTime);
		iTime=setInterval(function(){
			if(odiv.offsetLeft==iTarget){
				clearInterval(iTime);
			}
			else{
				odiv.style.left=odiv.offsetLeft+speed+"px";
			}
			},30);
	}