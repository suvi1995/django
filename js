function
<input id="num1">
<input id="num2">
<button onclick="resultfun()">sumbit</button>
<p id="result">
    Result is: 
</p>
<script>
    //selecting input num1
    //selecting input num2
    var b1=document.getElementById("num1")
    var b2 = document.getElementById("num2")
    //selecting result
    var result = document.getElementById("result")
    
    console.log(total)
    function resultfun()
    {
      var b1value=Number(b1.value)
     var b2value=Number(b2.value)
     var total= b1value + b2value
      result.textContent=total
    }   
    
</script>
random number1:
math.random() giving random no
math.floor() giving round no
var a =math.random()
var b =math(a)
console.log(b)
===============================

<input id="textbox" onkeyup="check()">
<p id="typeing"></p>
<script>
    var txt=document.getElementById("textbox")
    var resukt=document.getElementById("typeing")
    function check()
    {
        resukt.textContent=txt.value
    }
    

</script>

