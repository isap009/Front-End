$(document).ready(function(){

  ///card1
    $(".card1").click(function(){

        $(".card1").animate({left: '30%',

        width: '40%'
                            });
      $(".card1").css("transform","rotate(0deg)");
      $(".card2").fadeOut().hide();
      $(".card3").fadeOut().hide();
      $(".card4").fadeOut().hide();
      $(".card5").fadeOut().hide();
      $(".card1-ptv").fadeIn(1000).css("display","block");
       $(".card1-ttd").fadeIn(1000).css("display","block");
       $("#b1").fadeOut().hide();
       $("#bb1").fadeIn().show();

    });
  $("#bb1").click(function(){
    $(".card1").animate({left: '20%',

        width: '5%'
                            });
 $(".card1").css("transform","rotate(25deg)");
      $(".card2").fadeIn().show();
      $(".card3").fadeIn().show();
      $(".card4").fadeIn().show();
      $(".card5").fadeIn().show();
    $(".card1-ptv").css("display","none");
     $(".card1-ttd").css("display","none");
     $("#bb1").fadeOut().hide();
     $("#b1").fadeIn().show();
  });
  ///card2
  $(".card2").click(function(){
      $(".card2").animate({left:'30%',

      width: '40%'
                          });
                          $(".card2").css("transform","rotate(0deg)");
    $(".card1").fadeOut().hide();
    $(".card3").fadeOut().hide();
      $(".card4").fadeOut().hide();
        $(".card5").fadeOut().hide();
    $(".card2-ptv").fadeIn(1000).css("display","block");
     $(".card1-ttd").fadeIn(1000).css("display","block");
     $("#b2").fadeOut().hide();
     $("#bb2").fadeIn().show();



  });
$("#bb2").click(function(){
  $(".card2").animate({left:'30%',

      width: '5%'
                          });
                          $(".card2").css("transform","rotate(25deg)");
    $(".card1").fadeIn().show();
    $(".card3").fadeIn().show();
    $(".card4").fadeIn().show();
    $(".card5").fadeIn().show();
  $(".card2-ptv").css("display","none");
   $(".card1-ttd").css("display","none");
   $("#bb2").fadeOut().hide();
   $("#b2").fadeIn().show();

});
//card3
$(".card3").click(function(){
    $(".card3").animate({left:'30%',

    width: '40%'
                        });
                        $(".card3").css("transform","rotate(0deg)");
  $(".card1").fadeOut().hide();
  $(".card2").fadeOut().hide();
  $(".card4").fadeOut().hide();
  $(".card5").fadeOut().hide();
  $(".card3-ptv").fadeIn(1000).css("display","block");
   $(".card1-ttd").fadeIn(1000).css("display","block");
   $("#b3").fadeOut().hide();
   $("#bb3").fadeIn().show();
});
$("#bb3").click(function(){
$(".card3").animate({left:'40%',

    width: '5%'
                        });
                        $(".card3").css("transform","rotate(25deg)");
  $(".card1").fadeIn().show();
  $(".card2").fadeIn().show();
  $(".card4").fadeIn().show();
$(".card5").fadeIn().show();
$(".card3-ptv").css("display","none");
 $(".card3-ttd").css("display","none");
 $("#bb3").fadeOut().hide();
 $("#b3").fadeIn().show();

});
//card4
$(".card4").click(function(){
    $(".card4").animate({left:'30%',

    width: '40%'
                        });
                        $(".card4").css("transform","rotate(0deg)");
  $(".card1").fadeOut().hide();
  $(".card2").fadeOut().hide();
  $(".card3").fadeOut().hide();
  $(".card5").fadeOut().hide();
  $(".card4-ptv").fadeIn(1000).css("display","block");
   $(".card1-ttd").fadeIn(1000).css("display","block");
   $("#b3").fadeOut().hide();
   $("#bb3").fadeIn().show();
});
$("#bb3").click(function(){
$(".card4").animate({left:'50%',

    width: '5%'
                        });
                        $(".card4").css("transform","rotate(25deg)");
  $(".card1").fadeIn().show();
  $(".card2").fadeIn().show();
  $(".card3").fadeIn().show();
  $(".card5").fadeIn().show();

$(".card4-ptv").css("display","none");
 $(".card1-ttd").css("display","none");

});
//card5
$(".card5").click(function(){
    $(".card5").animate({left:'30%',

    width: '40%'
                        });
                        $(".card5").css("transform","rotate(0deg)");
  $(".card1").fadeOut().hide();
  $(".card2").fadeOut().hide();
  $(".card3").fadeOut().hide();
  $(".card4").fadeOut().hide();
  $(".card5-ptv").fadeIn(1000).css("display","block");
   $(".card1-ttd").fadeIn(1000).css("display","block");
   $("#b3").fadeOut().hide();
   $("#bb3").fadeIn().show();
});
$("#bb3").click(function(){
$(".card5").animate({left:'60%',

    width: '5%'
                        });
                        $(".card5").css("transform","rotate(25deg)");
  $(".card1").fadeIn().show();
  $(".card2").fadeIn().show();
  $(".card3").fadeIn().show();
  $(".card4").fadeIn().show();

$(".card5-ptv").css("display","none");
 $(".card1-ttd").css("display","none");

});
//book Now
$("#book").click(function () {
  $("#book").fadeOut().hide();
  $(".cont").fadeIn().css("display","block");

});
$("#submit").click(function(){
        $(".card").css("transform","rotateY(180deg)");
     $(".front").hide();
      $(".back").show();
    });
});
