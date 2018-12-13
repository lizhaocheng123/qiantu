
/*
$("#bn1").mouseenter(function(){
    $(this).parent().prev().children(":nth-child(1)").attr("src","img/5b92a2106ea3f.jpg"),
    $(this).parent().prev().children(":nth-child(1)").css("zIndex","1000")
})
$("#bn2").mouseenter(function(){
    $(this).parent().prev().children(":nth-child(2)").attr("src","img/5b7e4e41ec97d.png"),
    $(this).parent().prev().children(":nth-child(2)").css("opacity","1")
})
$("#bn3").click(function(){
    $(this).parent().prev().children(":nth-child(3)").attr("src","img/5b8ffff425229.jpg")
})
$("#bn4").click(function(){
    $(this).parent().prev().children(":nth-child(4)").attr("src","img/5b8f80ad123cc.jpg")
})
$("#bn5").click(function(){
    $(this).parent().prev().children(":nth-child(5)").attr("src","img/5b90cd44d36a8.jpg")
})
$("#bn6").click(function(){
    $(this).parent().prev().children(":nth-child(3)").attr("src","img/5b90fe6bb4ef1.jpg")
})
*/

$(function(){
    $.ajax({
        url:"http://localhost:3000/index/index",
        type:"get",
        dataType:"json",
        success:function(res){
           var  vm=new Vue({
                el:".section",
                data:{res}
            })
            $(".pg1").mouseenter(function(){
                $(this).children(":nth-child(1)").children(":nth-child(1)").attr("src","./img/webp(9)"),
                $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(360deg)")

            $(".pg1").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(1)").attr("src","./img/webp"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(0deg)")
                })
            $(".pg2").mouseenter(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(1)").attr("src","./img/webp(12)"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(360deg)")
                })
            $(".pg2").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(1)").attr("src","./img/webp(1)"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(0deg)")
                })
            $(".pg3").mouseenter(function(){
                    $(this).children(":first-child").children(":first-child").attr("src","./img/webp(11)"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(360deg)")
                })
            $(".pg3").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(1)").attr("src","./img/webp(2)"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(0deg)")
                })
            $(".pg4").mouseenter(function(){
                    $(this).children(":first-child").children(":first-child").attr("src","./img/webp(12)"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(360deg)")
                })
            $(".pg4").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(1)").attr("src","./img/webp(3)"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transition","all 2.5s linear"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("transform","rotateY(0deg)")
                })
                
            $(".b1").mouseenter(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","block")
                })
            $(".b1").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","none")
                })
            $(".q1").mouseenter(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","block")
                })
            $(".q1").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","none")
                })
            $(".w1").mouseenter(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","block")
                })
            $(".w1").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","none")
                })
            $(".e1").mouseenter(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","block")
                })
            $(".e1").mouseleave(function(){
                    $(this).children(":nth-child(1)").children(":nth-child(2)").css("display","none")
                })
            })
        }
    })
})
