$(function(){
    $.ajax({
        url:"http://localhost:3000/details/details",
        type:"get",
        dataType:"json",
        success:function(res){
            new Vue({
                el:"#jianting",
                data:{res} 
            })
            $(".zuopin11").mouseenter(function(){
                $(this).children(":nth-child(2)").css("opacity","1")
            })
            $(".zuopin11").mouseleave(function(){
                $(this).children(":nth-child(2)").css("opacity","0")
            })
            $(".zuopin12").mouseenter(function(){
                $(this).children(":nth-child(2)").css("opacity","1")
            })
            $(".zuopin12").mouseleave(function(){
                $(this).children(":nth-child(2)").css("opacity","0")
            })
            $(".zuopin13").mouseenter(function(){
                $(this).children(":nth-child(2)").css("opacity","1")
            })
            $(".zuopin13").mouseleave(function(){
                $(this).children(":nth-child(2)").css("opacity","0")
            })
	document.querySelector(".container>div").style.display="block";
	var tabs=document.querySelectorAll(
		"#tab>li>[data-toggle=tab]"
	)
	for(var tab of tabs){
		tab.onclick=function(e){
			e.preventDefault()
			var tab=this
			var id=tab.getAttribute("href")
			var div=document.querySelector(id)
			var divs=div.parentNode.children
			for(var d of divs){
				d.style.display="none"
			}
				div.style.display="block"
		}
		}
        }
    })
})

