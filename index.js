aa =function(w){
	alert(w)
}


var init = funtion(){
	if(window.localStorage){
    	alert('你的浏览器支持localStorage!');
	}else{
    	alert('浏览器不支持localStorage!');
	}
};
init();