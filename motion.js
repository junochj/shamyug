
var bw = document.documentElement.clientWidth;

setInterval("test()",0);
function test(){
    bw = document.documentElement.clientWidth;
    
    $(".visual,.visual_img li,visual_img img").css( { width: bw } );
    $(".visual_img").css({ width: bw * ( $(".visual_img li:last").index()+1) });


};


var ag_count = 0;
var vg = setInterval("ag()",5000);

function ag(){
   ag_count +=1;
   if( $(".visual_img li:last").index() >=  ag_count){ 
         $(".visual_img").animate({marginLeft:-bw * ag_count});
   }else{ 
         $(".visual_img li:not(:last)").appendTo(".visual_img");
         $(".visual_img").css({marginLeft:0});
         $(".visual_img").animate({marginLeft:-bw },function(){
                 $(".visual_img li:first").appendTo(".visual_img");
                 $(".visual_img").css({marginLeft:0});
                 ag_count=0;
         });
   };
};




$(function(){
$(".gnb>li>ul").hide();
$(".gnb>li>h2").mouseover(function(){
$("header").stop().animate({height:302},300);
$(".gnb>li>ul").stop().fadeIn("fast");
});
$("header").mouseleave(function(){
$("header").stop().animate({height:92},300);
$(".gnb>li>ul").stop().fadeOut("fast");
});






});







