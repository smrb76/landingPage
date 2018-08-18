// var randomNumber = getRandomNumber(5);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber(param) {
//     return (Math.floor(Math.random() * param)+1);
// }   

// do{
//     guess = prompt("whats it??(between 1 and 5...)");
//     guessCount++;
//     if(parseInt(guess) === randomNumber){
//         correctGuess = true;
//     }
// }while(!correctGuess)
// document.write("<p class='text-center h2'>You Guessed the number.</p>");
// // document.write("<p>It took the pc "+ attempts+" attempts to get it right.</p>");
var red;
var green;
var blue;
var rgbColor;

function getRGB() {
    return Math.floor(Math.random() * 256);
}

function print(message) {
    document.write(message);
}

for (var i = 0; i < 10; i += 1) {
    red = getRGB();
    green = getRGB();
    blue = getRGB();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    print('<div class="text-center h4" style="background-color:' + rgbColor + '">' + i + '</div>');
}

$(document).ready(function () {
    $('.btn-outline-dark').click(function () {
        var input = $('.form-control').val();
        $('.list-unstyled').append('<li class="list-inline-item">' + input + '</li>');
    });
    // $('.list-unstyled li').click(function () {
    //     $(this).append(" XXX ");
    // });
    $('#square')
    // .mouseenter(function(e){
    //     $(this).text("mouse over is on!!");
    // })
    .mouseleave(function(e){
        $(this).text("mouse OUT in onnn!");
    })
    // .mousemove(function(e){
    //     $(this).text('MOUSE MOVING!'+' X:'+e.clientX+', Y:'+e.clientY);
    // })
    .mousedown(function(e){
        $(this).text('MOUSE CLICKED!!');
    });
    // .mouseup(function(){
    //     $(this).text('MOUSE REALISED');
    // })
    // keyboard events
    $('.form-control').keydown(function(e){
        console.log(e);
        $('.form-control2').val(e.which);
    })
    
});