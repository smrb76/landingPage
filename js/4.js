// $(document).ready(function(){
//     $(".login").click(function(){
//         $(this).load("demo.txt");
//     });
// });
// var name = prompt("Whats your name?");
// alert(name.toUpperCase()+" "+ name.length + " "+Math.random());
// var input = prompt("Please enter a string:");
// if(input.toLowerCase === 'js'){
//     alert("Thats ok!!");
// }
// else
//     console.log("NOOOOO!");
var randomNumber = function(upper){
    return Math.floor(Math.random() * upper) +1;
}

var counter = 0;
while(counter < 10){
    var randNum = randomNumber(4);
    console.log(randNum);
    counter++;
}
