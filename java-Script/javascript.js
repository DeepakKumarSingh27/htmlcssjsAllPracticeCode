
// //variable represantation
// x = 100;
// document.write(x+"<br>");
// var x1 = "Deepak";
// document.write(x1+"<br>");
// let x2 = true;
// document.write(x2+"<br>");
// const x3 = "js";
// document.write(x3+"<br>");
// document.write(100/0+"<br>");
// document.write(-100/0+"<br>");
// document.write("java"/100+"<br>");
// document.write(false/100+"<br>");
// // string represantation
// var firstName = "Deepak";
// var middleName = 'Kumar';
// var lastName = `Singh`;
// document.write(firstName+" - "+ middleName+" -"+lastName+"<br>");

// //number represantation

// var x = 100;
// document.write(x+"<br>");
// var x1 = "100";
// document.write(x1+"<br>");
// var x4 = 100;
// document.write(typeof(x4)+x4+"<br>");
// //boolean datatypes

// var x = true;
// document.write(x+"<br>");
// var x1 = false;
// document.write(typeof(x1) + x1+"<br>");
// var x4 = 100;
// document.write("=======================")
// //undefined
// var x;
// document.write(x+"<br>");
// document.write(typeof(x)+"<br>")
// var x;
// document.write(x+"<br>");
// document.write(typeof(x)+"<br>");

// //null
// var x = 222;
// var x = null;
// document.write(x+"<br>");
// document.write(typeof(x)+"<br>");

// //NaN

// var x = 100;
// var x1 = 100;
// var x2 = x/x1;
// document.write(x2+"<br>");
// document.write(typeof(x2)+"<br>");

// var x = 100;

// document.write(x+"<br>");

// userinput
// var x = prompt("Enter your name");
 //document.write(x+"<br>");
// var age = prompt("Enter your age");
// if (age >= 18)
//   {
//     document.write("You are eligible to vote");
//   }  else {
//     document.write("You are not eligible to vote");
//   }
  // confirm("you want to enter the porn website....");
  // alert("This porn website not for kid.....");

  // var number  = prompt("Enter the number");
  // if (number == 26) {
  //   document.write("The number is 26");
  // } else if(number === 26){
  //   document.write("The number is not 26");
  // } else {
  //   document.write("The number is not for 26");
  // }

  // write java-script function
  // function myFunction() {
  //   document.getElementById("demo").innerHTML = "Hello World";
  // }
  // function myFunction1() {
  //   document.getElementById("demo1").innerHTML = "Hello World";
  // }
  // function myFunction2() {
  //   document.getElementById("demo2").innerHTML = "Hello World";
  // }
  // function myFunction3() {
  //   document.getElementById("demo3").innerHTML = "Hello World";
  // }
  // function myFunction4() {
  //   document.getElementById("demo4").innerHTML = "Hello World";
  // }
  // function myFunction5() {
  //   document.getElementById("demo5").innerHTML = "Hello World";
  // }
  // function myFunction6() {
  //   document.getElementById("demo6").innerHTML = "Hello World";
  // }
  // function myFunction7() {

  // document.write("............csk..........."+"<br>");
  // document.write("msd"+"<br>");
  // document.write("bravo"+"<br>");
  // document.write("............RCB..........."+"<br>");
  // document.write("virat"+"<br>");
  // document.write("Rohit"+"<br>");
  // function
  // function csk(params) {
  //   document.write("............csk..........."+"<br>");
  // document.write("msd"+"<br>");
  // document.write("bravo"+"<br>");
  // document.write("Deepak"+"<br>");
  // }
  // function rcb(params) {
  //   document.write("............RCB..........."+"<br>");
  // document.write("virat"+"<br>");
  // document.write("Rohit"+"<br>");
  // }
  // csk();
  // rcb();

  // function student() {
  //   document.write("Sytudent name is Deepak"+"<br>");
  //   document.write("i am from bihar"+"<br>");
  //   document.write("i am 18 years old"+"<br>");
  // }
  // student();
  // student();

  // function student(name,place) {
  //   document.write("Student name is "+name+"<br>");
  //   document.write("i am from "+place+"<br>");
  //   document.write("<br>");
  // }
  // student('Deepak','china');
  // student(`vikash`,"bhopal");

//   function display(A,B,C) {
//     document.write("A value is "+A+"<br>");
//     document.write("B value is "+B+"<br>");
//     document.write("C value is "+C+"<br>");
//     document.write("<br>");
//   }
// display(100,200,300);
// display(400,500,600);
// display(101,"java");
// display(true);
// display();

// function disp() {
//   document.write(arguments[0]+"<br>");
//   document.write(arguments[1]+"<br>");
//   document.write(arguments[2]+"<br>");
//   document.write(arguments[900]+"<br>");
//   document.write("<br>");
// }
// disp(100,200,300,400,500);
// disp();
// function disp() {
//   return 100;
// }
// var x= disp();
// document.write(x)
// function disp(a,b) {
//   var res = a + b;
//   return res;
// }
// var x = disp(100,200);

// document.write(x);

// function disp() {
//   return 12+90+45/78*35;
// }
// document.write(disp())
// function f1(p,c,m) {
//   var sum = p+c+m;
//   return sum;
// }
// var x = f1(90,80,70);
// f2(x);
// function f2(x) {
//   per = x/300.0*100.0;
//   document.write(per);
// }
//document.myform.name.value;
// function disp(...A) {
//   document.write("A value is "+A+"<br>");
// }
// disp(10);
// disp(10,20); 

// var x = function disp(name) {
//   document.write("function expression "+name);
// }
// x('deepak');

// var x = function(){
//   document.write("function expression");
// }
// x();
// var y = function(A,B){
//  document.write("value of "+A+" and "+B);
// }
// y(100,200);
// var x = function()
// {
//   return function(){
//     return "js";
//   }
// }
// var y = x();
// document.write(y());

// var x = function(sub) {
//     return sub;
// }
// var y = x(function() {
//       return "java-script";
// }
// )
// document.write(y());

// var x = () =>document.write("hai");
// x();
//   var x =_=> document.write("hai");
// x();

// var x = name=>document.write(name);
// x("Deepak");
// document.write("<br>");
// var x = (name,place) => document.write(name+" "+place); 

// x("Deepak","bhopal");

// var x = sub=>{return sub;}
// document.write(x("math")+"<br>");

// var x = (sub,sub1)=>{return sub+sub1;}


// var x = sub=>sub;

// document.write(x("hindi"));

// var successcallback = position=>console.log(position);
// var errorcallback = position=>console.log(position);
// navigator.geolocation.getCurrentPosition(successcallback,errorcallback);
// Array
// var emp = ["sanoo","vimal","ratan"];
// for(i = 0;i<emp.length;i++) {
//   document.write(emp[i]+"<br>");
//   console.log(emp[i]);
// }
// var emp = new Array();

// emp[0] = "sanoo";

// emp[1] = "vimal";

// emp[2] = "ratan";
// for(i = 0;i<emp.length;i++)
// document.write(emp[i]+"<br>");

// var emp = new Array("Deepak","ravi","shiva");
// for(i = 0;i<emp.length;i++) {
//   document.write(emp[i]+"<br>");
// }

// var arr = [1,"Hai",true,undefined];
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push("hello");
// console.log(arr);
// arr.unshift("Deepak");
// console.log(arr);
// arr.shift();
// console.log(arr);

// arr.splice(1,0,23);
// console.log(arr);


// let arr1 =[1,2,3,4,5];
// let arr2 =[6,7,8,9,10];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// let A = [35,75,81,31,100,75];
// x = A.find(x=>x>75);
// document.write(x+"<br>");



// class lipstick
// {
//   brand = "nykka";
//   color = "hotpink";
//   price = 1000;
//   weight = "2.2kg";
//   finishing = "matt";
// }
// var l1 = new lipstick();
// console.log(l1);

// class Signature 
// {
// price = 499;
// color = "Green";
// quantity = "750ml";
// }
// var s1 = new Signature();

// console.log(s1);
// var s2 = new Signature();

// console.log(s2);

// var s3 = new Signature();
// console.log(s3);


// class Drinks
// {
//   price;
//   color;
//   quantity;
//   constructor(price,color,quantity){
//     this.price = price;
//     this.color = color;
//     this.quantity = quantity;
//     document.write(this.price+" "+this.color+" "+this.quantity+"<br>");
//   }
// }

// var d1 = new Drinks(100,"red","100ml");
// console.log(d1);

// var str = "bangalore";
// var result = str.split("").reverse().join("");
// console.log(result);


// object literals
// const person = {
//   firstName: "Deepak",
//   lastName: "Singh",
//   fullName: "Deepak Singh", // Corrected the fullName property
//   age: 20,
//   height: 5.55,
//   hobbies: ["Deepa", "aaa"],
//   address: { // Corrected the property name from 'add' to 'address'
//       state: "Bihar", // Corrected the state name to uppercase
//       area: "BTM"
//   }
// };

// console.log(person.address.state);
// const per = {
//   firstName:"Deepak",
//   LastName:"Singh",
//   age:"22",
//   height:"5.9",
//   hobbies:["Deepa","aaa"]
// }
// console.log(per)
// var x = JSON.stringify(per);
// console.log(x);

// var txt = "Abcdefghijklmnopqrstuvwxyz";
// let len = txt.length;
// console.log(len);


// let text1 = "          helloworld";
// let text2 = text1.trim();
// document.write("length text1 = "+text1.length +"<br>");
// document.write("length text2 = "+text2.length+"<br>");
//dom
// tag = document.getElementsByTagName("hi");
// console.log(tag);
// var ele = document.getElementsByTagName("x");
// console.log(ele);
// var ele = document.getElementById("heading1");
// console.log(ele);
// var ele1 = document.getElementById("heading2");
// console.log(ele1);

// function msg() {
//   var ele = document.getElementById("heading1").innerHTML;
//   console.log(ele);
//   alert("NO!")
// }
//msg();



// var x = document.createElement("Hi");
// x.textContent = "DOM";
// x.id = "heading1";
// x.className = "js";
// console.log(x);
// var y = document.createElement("div");
// y.textContent = "i am div tag";
// console.log(y);

// var x = document.createElement("hi");
// x.textContent = "Dom";
// console.log(x);

// document.body.appendChild(x);

// var y = document.createElement("h3");

// y.textContent = "i am h3 tag";

// console.log(y);
// document.body.appendChild(y);
// y.style.fontStyle = "italic";
// y.style.border = "3px dotted red";
// y.style.textAlign = "center";



// var hi = document.getElementById("heading");
// var h2 = document.createElement("hi");
// h2.textContent = "java-script";
// console.log(h2);
// hi.insertAdjacentElement("beforebegin",h2);
// hi.insertAdjacentElement("beforeend",h2);
// hi.insertAdjacentElement("afterbegin",h2);
// hi.insertAdjacentElement("afterend",h2);

// var ul = document.getElementById("ul");
// var li = document.getElementById("li");
// var ele = document.createElement("li");
// ele.textContent = "web-tech";

// ul.insertBefore(ele,li);




