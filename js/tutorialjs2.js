// var name = prompt("whats your name?");
// console.log("my name is "+ name+".");
// var name = 'mreza';
// var lname = 'bazrgari';

// var isMarried , job;
// job = 'programmer';
// isMarried = true;

// var age = prompt('how old you?');

// alert('My name is '+name+' and '+age+' years old.');

// var job = prompt('What does john do??');

// switch(job){
//     case 'teacher':
//     console.log('John Teaches kids');
//     break;
//     case 'driver':
//     console.log('john drive with a bmw');
//     break;
// }

// function calMyAge(yearOfBirth){
//     var age = 2018 - yearOfBirth;
//     return age;
// }
// alert(calMyAge(2000));
// function yearsUntilRetirement(age2 , yearOfBirth){
//     var age  = calMyAge(age2);
//     var retirement = age - yearOfBirth;
//     return retirement;
// }

// yearsUntilRetirement()

// var names = ['mreza','mehdi','nemat','ali'];
// var array = new Array(1993 , 3210 , 2143 , 1234);
// console.log(array[0]);

// var ali = ['ali','alavi' , 22 , 20];
// // alert(ali , ali.indexOf(false));


// if(ali.indexOf(20) === -1){
//     console.log('20 is not here !!!')
// }
// else if(ali.indexOf(21) === 2){
//     console.log('21 is here.');
// }
// else 
//     console.log('fuck yooouuuuu!!');

//5
// var ali = {
//     name : 'ali',
//     lname : 'moosavi',
//     age : 19,
//     job: 'programmer',
//     isMarried : true,
//     calculateAge : function(yearOfBirth){
//         this.age = 2018 - yearOfBirth;
//         return this.age;
//     
// };

// console.log(ali.job +' '+ ali['isMarried'] + ' '+ ali.calculateAge(2014));


// var mamad = new Object();
// console.log(mamad);
// mamad.name = "mamad";
// mamad['fuck'] = 'bazrgari';
// mamad.age = 21;
// console.log(mamad);

//6
var txt = "";
var person = {
    fname : "ali",
    lname: 'moosavi',
    age: 21,
    // returnName: function(){
    //     return this.fname+" "+this.lname;
    // }
};

// console.log(person.returnName());
// var x;

// for(x in person){
//     txt += person[x];
//     console.log(txt);
// } 

//7
//Data Type
// var undefined = undefined;
// var anull  = null;
// var returnName = function(){
//     return "ALI gholinezhad"
// };

// console.log(typeof(undefined) , typeof(anull) , typeof(returnName));
// var text1 = "ali" +12+ 4;//output = ali124
// var text3 = "Ali" +(12+4);//output = Ali16
// var text2 = 12+ 4+ "ali";
// console.log(text1 , text2 ,  text3);

//scope
myfunction();
    console.log(carName);
    
function myfunction(){
    carName = "audi";
}
//event


//Strings
//  /  as end line 
var x = "ALI"; //type of is string
var y = new String("ALI"); // typeOf is object
console.log(typeof(x) , typeof(y));

if(x===y){
    console.log("x is equal with y");
}
//
//String Methods
var txt = "Please locate where 'locate' occurs!!";
console.log("length is: "+ txt.length);
console.log(("index of locate is :" + txt.indexOf("locate" , 10) +'\n'+ "search: "+ txt.search('occurs')));//last index of
//slice  - substring - substr

var retxt = txt.replace("locate" , "fuck");
console.log(retxt);

var text2 = "hello";
var text3 = "world";
console.log(text2.concat(" "+text3.toUpperCase()));
//charAt - charCodeAt(position)

var str = "HELLO";
var arr = str.split("");
var txt= "";
for(var i = 0 ; i<arr.length ; i++){
    txt += arr[i];
    console.log(txt);
}

//numbers

var x = 100/ "Apple";
console.log(isNaN(x) +" \n"+typeof(NaN));
console.log(-2/0);//typeof infinty is number

var number = 64;
console.log(number.toString(2));

//array
var arr = [1,-54,123,12,54,34,87,34,12,32];
var sortarr = arr.sort(function(a,b){return a-b;});
console.log("biggest element in sortarr is :"+ sortarr[sortarr.length-1] );

var fruits = ["orange","banana","apple","mangi","nemat"];
for(x in fruits){
    console.log(fruits[x]);
}
console.log(Array.isArray(fruits));
var cars = [
    {type : "BMW", year: 2015},
    {type : "Mercedes" , year: 2001},
    {type : "Volvo", year : 2019} 
]
var sortcars = cars.sort(function(a , b){
    return a.year - b.year;
});
console.log(sortcars);



    




















































