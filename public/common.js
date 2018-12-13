//定义$(id)
function $(id){
  return document.getElementById(id);
}

//定义创建异步对象的函数 createXhr()
function createXhr(){
  var xhr=null;
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }else{
    xhr=new ActiveXObject("Microsoft.XMLHttp");
  }
  return xhr;
}