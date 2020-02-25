// var fname = document.getElementById("fname");
// var takeDay = document.getElementById("takeDay");
// var revDay = document.getElementById("revDay");
// var btns = document.getElementById("btns");
// var msgs = document.getElementById("msgs");
// var closee = document.getElementById("closee");
// closee.addEventListener("click",function(){
//     msgs.style.left="-100%";
// });
// btns.addEventListener("click",function(){
//         if(fname.value.length > 4 ){
//           if(takeDay.value.length > 0){
//               if(revDay.value > 0 ){
//                   alert("you're signup now");
//                   msgs.style.left="13%";
//               }else{
//                   alert("please shoose how many day you want");
//                   revDay.focus();
//               }
//           }else{
//               alert("please select a day");
//               takeDay.focus();
//           }
//         }
//         else{
//           alert("please enter your name");
//           fname.focus();
//         }
// });
var phoneformat =/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
var bro = document.getElementById("newee");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phone = document.getElementById("phone");
var thwtime = document.getElementById("thetime");
var city = document.getElementById("city");
var room = document.getElementById("room");
var tax = document.getElementById("tax");
var ttprice = document.getElementById("tPrice");
var email = document.getElementById("email");
var sform = document.getElementById("sform");
var msgs = document.getElementById("msgs");
var closee = document.getElementById("closee");

var cityname = document.getElementById("cityname");
var duration = document.getElementById("ruration");
var emailholder = document.getElementById("emailholder");
var phoneNumber = document.getElementById("phoneNumber");
var paidprice = document.getElementById("paidprice");


closee.addEventListener("click",function(){
    msgs.style.left="-100%";
});
sform.addEventListener("click",function(){
    if(phoneformat.test(phone.value)){
        if(mailformat.test(email.value)){
            cityname.innerHTML  = city.value;
            duration.innerHTML  = thetime.value / 24 + " Day";
            emailholder.innerHTML  = email.value;
            phoneNumber.innerHTML = phone.value;
            msgs.style.left="50%";
        }else{
           alert("please enter a valid email address");
        }
    }else{
        alert("please enter a valid phone number");
    }
});

thetime.addEventListener("change",function(){
    var taman;
    taman = Number(thetime.value) * 25 ; 
    room.innerHTML = taman + " DH";
    var totalprice = taman + 100;
    ttprice.innerHTML =  "The Total price is " + totalprice  + " DH";
});


