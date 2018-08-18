// $('p.lead').css("color", "red");
// $(document).ready(function(){
//     $("button").click(function(){
//         $(this).css("color","green");
//     });
// });
// var car = {
//     name : "bugatti",
//     product_year: "1998",
//     power: "13512 wat"
//     // var Fullname() = function(){

//     // } 
// };
// console.log(car.name);
// var txt = "1312"
// console.log(txt.length);
$(document).ready(function(){
    $("input[type='text']").click(function(){
        $(this).css("background-color","red");
    });
    var hideList = $("button[type='submit']").click(function(){
        $("div.list-name").hide();
    });
});