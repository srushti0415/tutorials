// function add(num1, num2) {
//     console.log(num1 + num2)
// }

// add(2,6);

// const Name = "holmes";l

// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// toUpper(Name);


// const myName = sru;
// const age = 19;

// console.log (`hello its me ${myName} n my ag is ${age}`);

// const add =  myName + age;
// console.log(add);


// /home/srushti/tutorials /index2.js   path of this file



// var age = prompt('What is your age?');

// document.getElementById('Text').innerHTML = age;

// // function  :))
// function sumnum(a, b) {
//     var c = a+b ;
//     console.log(c);
// }

// while loops :))

// var num = 1; 
// var a = 1;
// while (num <100) {
//     num *= a ;
//     console.log(a, num);
//     a++;
// }

// for loops :))

// for (let a = 1; a <= 11 ; a++){
//     {
//         console.log(a);
//     }
// }

// Data types :))

// let yourage = 19;  // numbers
// let urname = "sru"; // string
// let name = { first : 'sru', last : "kul"}; //  object
// let truth = false;   // boolen
// let list = [ 'coffee', 'apple', 'books'];// arrys
// let nothing = null; // value none


//  Strings in JavaScript
// let fruit = 'apple'
// let morefruits= 'apple,banana,kiwi'
// console.log(fruit.length);
// console.log(fruit.indexOf('ppl'));
// console.log(fruit.slice(0,15));
// console.log(fruit.replace('ppl' , '222'));
// console.log(fruit.split('<3'))


// Array :)
// let books = ['Sherlock', 'vincenzo', 'watson'];
// books = new Array ('Sherlock', 'vincenzo', 'watson');
// console.log(books[2]);

// books [ 1 ] = 'casanova';
// console.log(books);

// for (let i = 0 ; i< books.length; i++){
//     console.log(books[i]);
// };

// console.log('to string', books.toString());
// console.log(books.join (' <3 '));
// console.log(books.pop(), books);  // remove last item 
// console.log(books.push('vincenzoo'),books); // appends
// books[3] = 'holmes';
// console.log(books)              

// books.shift(); // remove first eement
// console.log(books); 
// books.unshift ('Watson')// add 1st element in array
// console.log(books)              

// let drinks = ['coffee', 'tea' , 'juice'];
// let allilove = books.concat(drinks);
// console.log(allilove);
// console.log(allilove.slice ( 3,8));
// console.log(allilove.reverse());     
// console.log(allilove.sort());             


// let somenum = [3,5,7,11,4,9,56,9,69,55,30,15];
// console.log(somenum.sort(function(a, b) {return a-b}));// sort in accessid n descending order            //   

// let emptyarray = new Array ();
// for (let num = 0;  num <11 ; num++){
//     emptyarray.push(num);
// }
// console.log(emptyarray);


// Objects in javascript
// dictionaries in python

// let student = {
//     first: 'sherlock', last :'holmes', age: 19, height : 6.3 ,
//     studentInfo : function () {
//         return this.first + '\n'+ this.last  + "\n"; + this.age  }

// };
// console.log(student.first);
// console.log(student.last);
// student.first = '221b'
// console.log(student.first)
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());

// conditionals , control flows (if else)
// 18-35 is target
// var age = prompt( 'hey whats ur age ?');
// if ((age >=18) && (age <=35)) {
//     Status ='target demo';
//     console.log(Status);

// }else {
//     Status = 'not a audience'
//     console.log(Status);
// }

switch(2){
    case 6 :
     text= 'enjoy u r holiday';
    break;

    case 7:
    text = 'enjoy u r holiday';
    break;
    
    default:
    text = 'ohh its ur working day '
}
console.log(text);