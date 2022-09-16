// let a = new Date();
// document.write(a)
// var a = prompt("Enter a 1st Number")
// var b = prompt("Enter a second  Number")
// var z = Number(a)*Number(b);
// document.write(z);
// var todaydate = new Date('01-24-2007')


// document.write(todaydate)
// document.write(todaydate.Getdate())
// document.write(todaydate.GetMonth())
// document.write(todaydate.getFullYear())
// document.write(todaydate.getSeconds())
// document.write(todaydate.GetTime())

// var todaydate = new Date()
// (todaydate.Getdate())
// var a=prompt("Enter Your Birth Year") 
// var b = Number(todaydate)-Number(a)
// alert(b);
// // alert(todaydate);



// ASSIGNMENT 1//
// var todaydate = new Date()
// document.write(todaydate)

// ASSIGNMENT 2//
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(4,7);
// alert("Current month is:" + c)

// ASSIGNMENT 3//
// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);

// ASSIGNMENT 4//
// var currentDay = new Date();
// var b = currentDay.toString();
// var c = b.slice(8,10);
// if ( c == "Mon"){
//     alert("Its Not Fun Day!")
// }
// else if ( c == "Tue"){
//     alert("Its Not Fun Day!")
// }
// else if ( c == "Wed"){
//     alert("Its Not Fun Day!")
// }
// else if ( c == "Thu"){
//     alert("Its Not Fun Day!")
// }
// else if ( c == "Fri"){
//     alert("Its Not Fun Day!")
// }
// else if ( c == "Sat"){
//     alert("Its Fun Day!")
// }
// else if ( c == "Sun"){
//     alert("Its Fun Day!")
// }

// ASSIGNMNET 5 //
// var todayDate = new Date("09-30-2022");
// var a = todayDate.toString();
// var b = a.slice(8,10)

// if (b == "1"){
//     alert("First Fiifteen Days Of the Month")
// }

//  else if (b == "2"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "3"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "3"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "4"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "5"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "6"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "7"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "8"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "9"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "10"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "11"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "12"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "13"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "14"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "15"){
//     alert("First Fiifteen Days Of the Month")
// }
//  else if (b == "16"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "17"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "18"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "19"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "20"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "21"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "22"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "23"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "25"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "26"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "27"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "28"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "29"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "30"){
//     alert("Last Fiifteen Days Of the Month")
// }
//  else if (b == "31"){
//     alert("Last Fiifteen Days Of the Month")
// }
 

// ASSIGNMENT 6//
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// ASSIGNMENT 7//
// var date = new Date();
// alert (date)
// NOT DONE   

 // ASSIGNMENT 8//

//  var todayDate = new Date()
//  var a =new Date("6-18-201")
//  var specDate = new Date(a);
//  var specDataTime =specDate.getTime(); 
//  var currentTime = todayDate.getTime('6-18-2015');
//  var diff = currentTime - specDataTime
//  var finalDate = diff/(1000*60*60*24*365)
//  alert(finalDate)
// ASSIGNMENT 9//

// var date1 = new Date("06/18/2015");
// var date2 = new Date();
// var now = date2.getTime() - date1.getTime();
// var  f = now / (1000 * 3600 * 24);
// document.write(Math.round(f));
// document.write(" Days have passed since 1st Ramadan,2015")
// ASSIGNMENT 10 //
// var todayDate = new Date('12-05-2015')
// document.write("On reference date: "+todayDate)
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// document.write("<br>" + Todaymilli+"seconds has passed since begining of 2015");

// ASSIGNMENT 11 //
// var m = new Date()
// document.write("Current Date: " + m)
// var a = new Date().getTime();
// var b =new Date(a + 1 * 60 * 60 * 1000);
// document.write( "</br> 1 hour ago, it was: " +b)

// //ASSIGNMENT 12 //
// var date = new Date();
// document.write("current date: "+date)
// const datecopy = new Date(date.getTime());
// datecopy.setFullYear(date.getFullYear()- 100);
// document.write("<br> 100 years back it was "+datecopy)



//ASSIGNMENT 13 //
// var todayDate = new Date()
// var a =prompt("Enter Your Birth Year")
// var specDate = new Date(a);
// var specDataTime =specDate.getTime(); 
// var currentTime = todayDate.getTime();
// var diff = currentTime - specDataTime
// var finalDate = diff/(1000*60*60*24*365)
// alert(finalDate)

//ASSIGNMENT 14 //
//     var a = ("M.SUFIYAN")
//     var b = new Date(01-01-2022);
//     var c = b.setMonth('february');
//    var d = ('410');
//     var e = ('20');
//     var f = ("6502")
//     var g = (450);
//     var D = ("6300");
//    var x = (d * e );
//     document.write("customer Name " + a  + "<br>") 
//     document.write('month: ' +  b.toDateString()+"<br>");
//    document.write("units: "  + d +"<br>");
//     document.write(" charges per units : " + e +"<br>");
//     document.write( "<br>" + "NET AMOUNT PAYABLE  (WITHIN DUE DATE): " + d * e ) ;
//     document.write( "<br>" + "GROSS AMOUNT PAYABLE (AFTER DUE DATE) " + (x + g )  );   


