document.getElementById("nat").innerHTML = ""
document.getElementById("num").innerHTML = ""
var Total = "";
var zero  = 0;
var one   = 1;
var two   = 2;
var three = 3;
var four  = 4;
var five  = 5;
var six   = 6;
var seven = 7;
var eight = 8;
var nine  = 9;
var point = ".";

document.getElementById(1).addEventListener ("click",function(){
document.getElementById("nur2").innerHTML += document.getElementById("1").value
document.getElementById("num").innerHTML += one
   Total +=1
   // console.log(1)

   console.log(Total)
})

document.getElementById(2).addEventListener ("click",function(){
document.getElementById("num").innerHTML += two
document.getElementById("nur2").innerHTML += document.getElementById("2").value
   // console.log(2)
   Total +=2
   console.log(Total)

})

document.getElementById(3).addEventListener ("click",function(){
document.getElementById("num").innerHTML += three
document.getElementById("nur2").innerHTML += document.getElementById("3").value
   // console.log(3)
   console.log(Total)
   Total +=3
})

document.getElementById(4).addEventListener ("click",function(){
document.getElementById("num").innerHTML += four
document.getElementById("nur2").innerHTML += document.getElementById("4").value
   // console.log(4)
   console.log(Total)

   Total +=4
})

document.getElementById(5).addEventListener ("click", function () {
   document.getElementById("num").innerHTML += five

   document.getElementById("nur2").innerHTML += document.getElementById("5").value
   // console.log(5)
   Total +=5
   console.log(Total)

})

document.getElementById(6).addEventListener ("click", function () {
   document.getElementById("num").innerHTML += six
   document.getElementById("nur2").innerHTML += document.getElementById("6").value
   // console.log(6)
   Total +=6
   console.log(Total)

})

document.getElementById(7).addEventListener("click", function () {
   document.getElementById("num").innerHTML += seven
   document.getElementById("nur2").innerHTML += document.getElementById("7").value
   // console.log(7)
   Total +=7
   console.log(Total)

})

document.getElementById(8).addEventListener("click", function () {
   document.getElementById("num").innerHTML += eight
   document.getElementById("nur2").innerHTML += document.getElementById("8").value
   // console.log(8)
   Total +=8
   console.log(Total)

})

document.getElementById(9).addEventListener("click",function(){
   document.getElementById("num").innerHTML += nine
   document.getElementById("nur2").innerHTML += document.getElementById("9").value
   // console.log(9)
   Total +=9
   console.log(Total)

})

document.getElementById(0).addEventListener("click", function () {
   document.getElementById("num").innerHTML += document.getElementById("0").value  
    document.getElementById("nur2").innerHTML += document.getElementById("0").value

   // console.log("0")
   Total += 0
   console.log(Total)

   
})
// ------------------------------------------------------------------------------------
document.getElementById("res").addEventListener("click", function () {
   document.getElementById("num").innerHTML = " "
   document.getElementById("nat").innerHTML = " "
   Total=""
})

// document.getElementById("del").addEventListener("click", function () {
//    document.getElementById("num").innerHTML = document.getElementById("num").value
//    document.getElementById("nat").innerHTML += ""
   
// })

document.getElementById("mul").addEventListener("click", function () {
   document.getElementById("num").innerHTML += document.getElementById("mul").value
   document.getElementById("nur2").innerHTML += document.getElementById("mul").value
   Total += document.getElementById("mul").value
   console.log(Total)
})
document.getElementById("div").addEventListener("click", function () {
   document.getElementById("num").innerHTML += document.getElementById("div").value
   document.getElementById("nur2").innerHTML += document.getElementById("div").value
   Total += document.getElementById("div").value
   console.log(Total)
})
document.getElementById("plus").addEventListener("click", function () {
document.getElementById("num").innerHTML += document.getElementById("plus").value
document.getElementById("nur2").innerHTML += "+"  
   Total += document.getElementById("plus").value
   console.log(Total)
})
document.getElementById("neg").addEventListener("click", function () {
   document.getElementById("num").innerHTML += document.getElementById("neg").value
   document.getElementById("nur2").innerHTML += document.getElementById("neg").value
   Total += document.getElementById("neg").value
   console.log(Total)
})
document.getElementById("point").addEventListener("click", function () {
   document.getElementById("num").innerHTML += document.getElementById("point").value
   // document.getElementById("nur2").innerHTML += "+"
   Total += document.getElementById("point").value
   console.log(Total)


})


// eaquali = document.getElementById("nur2").value

document.getElementById("equal").addEventListener("click", function () {
   // document.getElementById("nat").innerHTML = document.getElementById("nur2").innerHTML.value
   document.getElementById("nat").innerHTML = "{{{{  " + eval(Total)+"  }}}}"
   // console.log(eaquali)
   console.log(eval(Total))
   eval(document.getElementById("num").innerHTML.value)
   console.log(document.getElementById("num").innerHTML.value)
})

// function back(){
//    var val = document.getElementById("num").value
//    document.getElementById("num").value= val.substring(0,exp.length-1)
// }





   // function go(num){
   //    var val = document.getElementById("num").value;
   //    var lastNum= val(val.length-1);
   //    if(val<30){
   //       if(!isNaN(lastNum)||lastNum==null||isNaN(num)){
   //          document.getElementById("num").value=val+lastNum
   //       }
   //    }
   // }
   // function how(){
   //    var goo = document.getElementById("num").value
   //    document.getElementById("nat").value = eval(goo)
   // }
