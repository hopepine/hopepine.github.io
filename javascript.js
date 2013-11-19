	window.onload=function(){
		/*高度调整*/
		var calHeight=document.getElementById("catalogue");
		var boxHeight=document.getElementById("box").clientHeight+document.getElementById("list").clientHeight;
		if(document.documentElement.clientHeight<=boxHeight){
			var mainHeight=document.getElementById("main").clientHeight;
			var calHeight=document.getElementById("catalogue");
			calHeight.style.height=mainHeight+"px";
			calHeight.style.position="absolute";
		}
		
		/*点击分享*/
		var bar=document.getElementById("threeBar");
		var share=document.getElementById("share");
		bar.onmouseover=function(){
			share.style.display="block";					
		}
		share.onmouseover=function(){
			share.style.display="block";					
		}
		bar.onmouseout=function(){
			share.style.display="block";
		}
		share.onmouseout=function(){
			if(document.body.clientWidth<=480){	
				share.style.display="none";	
			}
		}
		
		/*点击首页*/
		var list1=document.getElementById("list1");
		var box=document.getElementById("box");
		var main=document.getElementById("main");
		list1.onclick=function(){
		if(document.body.clientWidth<=480){
			if(box.style.display=="none"){
				box.style.display="block";
				main.style.display="none";
				calHeight.style.height="100%"
			}
			else{
				box.style.display="none";
				main.style.display="block";
				calHeight.style.height="0px"
			}
		}
		else{
			box.style.display="block";
			main.style.display="block";
			calHeight.style.height="100%"
		}
		}
		
		/*图片变色*/
		var imgArray=new Array("images/pic1-1.jpg","images/pic2-1.jpg","images/pic3-1.jpg","images/pic4-1.jpg","images/pic5-1.jpg","images/pic1-2.jpg","images/pic2-2.jpg","images/pic3-2.jpg","images/pic4-2.jpg","images/pic5-2.jpg");
		var list=document.getElementById("ulList").getElementsByTagName("li");
		
		list[0].onmouseover=function(){
			this.firstChild.getElementsByTagName("img")[0].src=imgArray[5];
		}
		list[0].onmouseout=function(){
			if(this.firstChild.className!="list-selected"){
				this.firstChild.getElementsByTagName("img")[0].src=imgArray[0];
			}
		}
		list[1].onmouseover=function(){
			this.firstChild.getElementsByTagName("img")[0].src=imgArray[6];
		}
		list[1].onmouseout=function(){
			if(this.firstChild.className!="list-selected"){
				this.firstChild.getElementsByTagName("img")[0].src=imgArray[1];
			}
		}
		list[2].onmouseover=function(){
			this.firstChild.getElementsByTagName("img")[0].src=imgArray[7];
		}
		list[2].onmouseout=function(){
			if(this.firstChild.className!="list-selected"){
				this.firstChild.getElementsByTagName("img")[0].src=imgArray[2];
			}
		}
		list[3].onmouseover=function(){
			this.firstChild.getElementsByTagName("img")[0].src=imgArray[8];
		}
		list[3].onmouseout=function(){
			if(this.firstChild.className!="list-selected"){
				this.firstChild.getElementsByTagName("img")[0].src=imgArray[3];
			}
		}
		list[4].onmouseover=function(){
			this.firstChild.getElementsByTagName("img")[0].src=imgArray[9];
		}
		list[4].onmouseout=function(){
			if(this.firstChild.className!="list-selected"){
				this.firstChild.getElementsByTagName("img")[0].src=imgArray[4];
			}
		}
		for(var i=0;i<list.length;i++){
			if(list[i].firstChild.className=="list-selected"){
				list[i].firstChild.getElementsByTagName("img")[0].src=imgArray[i+5];
			}
		}
	}
	
	