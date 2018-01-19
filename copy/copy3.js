//监听copy事件
document.addEventListener("copy",function(e){
	console.log(e) 
	var url_tag = '{apbcoat}';
	var url = url_tag  + window.location.href + url_tag;
	e.clipboardData.setData('text/plain', url);
	e.preventDefault(); 
	},false)
document.execCommand('copy')
