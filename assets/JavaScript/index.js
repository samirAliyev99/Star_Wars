"use strict"

var divs=['A','B','C','D'];
var clicked_div;
var health_myself=0,enemy_health=0;
window.onclick=function(e){
    clicked_div=e.target.id;

    
$('#'+clicked_div).click(function(){
    divs = divs.filter(e => e !== clicked_div);

    if(divs.length===3){
    $('.enemies').append($('#'+divs[0]).css("background-color", "red"));
    $('.enemies').append($('#'+divs[1]).css("background-color", "red"));
    $('.enemies').append($('#'+divs[2]).css("background-color", "red"));
    }

    else if(divs.length===2){

        $('.defender').append($('#'+clicked_div).css({"background-color":"black","color":"white"}));
        
    $('#attack').click(function(){
        health_myself=$('.select_character .health').text();
         enemy_health=$('.defender .health').text();
        if(health_myself>0){
            health_myself=health_myself-Math.floor(Math.random() * 20);
            $('.select_character .health').text(health_myself);
            
            enemy_health=enemy_health-Math.floor(Math.random() * 20);
            $('.defender .health').text(enemy_health);

            if(health_myself<=0){
                $('footer').text("You lost");
            }
            else if(enemy_health<=0){
                $('.defender > div').remove();

                $('footer').text("The enemy lost");
                console.log(clicked_div);

                $('#'+divs[0]).click(function(){
                    $('.defender').append($('#'+divs[0]).css({"background-color":"black","color":"white"}));

                })
                
                $('#'+divs[1]).click(function(){
                    $('.defender').append($('#'+divs[1]).css({"background-color":"black","color":"white"}));

                })
                
            }
        }
    

    })
        
    }
   
})

}

$('#reload').click(function() {
    location.reload();
});