document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('save').addEventListener('click', save);
	document.getElementById('password').addEventListener('click',redirect)
	document.getElementById('port').value = localStorage.getItem('fifa1qport')
	document.getElementById('password').value = localStorage.getItem('fifa1qpassword')
});

function save(){
	if(!window.localStorage){
    		alert('浏览器不支持localStorage!');
	}
	var port = document.getElementById('port').value
	var password=document.getElementById('password').value
	//alert(port)
	//alert(password)
	localStorage.setItem('fifa1qport',port);
	localStorage.setItem('fifa1qpassword',password);
}

function redirect(){
	var port = document.getElementById('port').value
	var password=document.getElementById('password').value
}

