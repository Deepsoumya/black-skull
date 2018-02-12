<!--Result:<input type="number" name="output_number" id="output_number" value="0" disabled/><br>
Operand:<input type="text" name="operand" id="operand" disabled/><br>-->
Input:<input type="text" name="input_number" id="input_number" value="0" disabled/><br>
<input type="button" name="one" id="one" onclick="one()" value="1">
<input type="button" name="two" id="two" onclick="two()" value="2">
<input type="button" name="three" id="three" onclick="three()" value="3">
<input type="button" name="plus" id="plus" onclick="plus()" value="+">
<input type="button" name="del" id="del" onclick="del()" value="del"><br>
<input type="button" name="four" id="four" onclick="four()" value="4">
<input type="button" name="five" id="five" onclick="five()" value="5">
<input type="button" name="six" id="six" onclick="six()" value="6">
<input type="button" name="minus" id="minus" onclick="minus()" value="-"><br>
<input type="button" name="seven" id="seven" onclick="seven()" value="7">
<input type="button" name="eight" id="eight" onclick="eight()" value="8">
<input type="button" name="nine" id="nine" onclick="nine()" value="9">
<input type="button" name="mult" id="mult" onclick="mult()" value="*"><br>
<input type="button" name="clear" id="clear" onclick="clean()" value="c">
<input type="button" name="zero" id="zero" onclick="zero()" value="0">
<input type="button" name="equal" id="equal" onclick="equal()" value="=">
<input type="button" name="division" id="division" onclick="division()" value="/">
<input type="button" name="dot" id="dot" onclick="dot()" value="."><br>
Result:<input type="number" name="output_number" id="output_number" value="0" disabled/>
<input type="button" name="reset" id="reset" onclick="reset()" value="reset"/><br>
Opereand:<input type="text" name="operand" id="operand" disabled/>
<input type="text" name="input" id="input" disabled hidden/>
Raw
 script.js
var result = 0;
function one(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "1";
  }else{
    document.getElementById('input_number').value += "1";
  }
  }
function two(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "2";
  }else{
    document.getElementById('input_number').value += "2";
  }
  }
function three(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "3";
  }else{
    document.getElementById('input_number').value += "3";
  }
  }
function four(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "4";
  }else{
    document.getElementById('input_number').value += "4";
  }
  }
function five(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "5";
  }else{
    document.getElementById('input_number').value += "5";
  }
  }
function six(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "6";
  }else{
    document.getElementById('input_number').value += "6";
  }
  }
function seven(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "7";
  }else{
    document.getElementById('input_number').value += "7";
  }
  }
function eight(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "8";
  }else{
    document.getElementById('input_number').value += "8";
  }
  }
function nine(){
  if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "9";
  }else{
    document.getElementById('input_number').value += "9";
  }
  }
function zero(){
  if(document.getElementById('input_number').value > "0"){
    if(document.getElementById('input_number').value === "0"){
    document.getElementById('input_number').value = "";
    document.getElementById('input_number').value += "0";
  }else{
    document.getElementById('input_number').value += "0";
  }
  }
  }
function dot(){
  if(document.getElementById('input_number').value[document.getElementById('input_number').value.length - 1] === "."){
  //document.getElementById('input_number').value += "";
  }
  else{
  document.getElementById('input_number').value += ".";
  }
  }
function plus(){
  //document.getElementById('input').value = document.getElementById('input').value + "+";
  if(document.getElementById('input_number').value === "0"){
    
  }
  else if(document.getElementById('operand').value === ""){
    document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) + parseFloat(document.getElementById('input_number').value);
  }
  else{
    if(document.getElementById('operand').value === "+"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) + parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "-"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) - parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "*"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) * parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "/"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) / parseFloat(document.getElementById('input_number').value);
     }
  }
  document.getElementById('input_number').value = 0;
  //document.getElementById('operand').value = "+";
  /*if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "+"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "+";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "-"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "-";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "*"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "*";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "/"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "/";
  }
  else{
    document.getElementById('input').value = document.getElementById('input').value + "+";
  }*/
  document.getElementById('operand').value = "+";
  }
function minus(){
  //document.getElementById('input').value = document.getElementById('input').value + "-";
  if(document.getElementById('input_number').value === "0"){
    
  }
  else if(document.getElementById('operand').value === ""){
    document.getElementById('output_number').value=  parseFloat(document.getElementById('input_number').value);
  }
  else{
    if(document.getElementById('operand').value === "+"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) + parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "-"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) - parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "*"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) * parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "/"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) / parseFloat(document.getElementById('input_number').value);
     }
  }
  document.getElementById('input_number').value = 0;
  //document.getElementById('operand').value = "-";
  /*if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "+"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "+";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "-"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "-";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "*"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "*";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "/"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "/";
  }
  else{
    document.getElementById('input').value = document.getElementById('input').value + "-";
    
  }*/
  document.getElementById('operand').value = "-";
  }
function mult(){
  //document.getElementById('input').value = document.getElementById('input').value + "*";
  if(document.getElementById('input_number').value === "0"){
    
  }
  else if(document.getElementById('operand').value === ""){
    document.getElementById('output_number').value=  parseFloat(document.getElementById('input_number').value);
  }
  else{
    if(document.getElementById('operand').value === "+"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) + parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "-"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) - parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "*"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) * parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "/"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) / parseFloat(document.getElementById('input_number').value);
     }
  }
  document.getElementById('input_number').value = 0;
  //document.getElementById('operand').value = "*";
  /*if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "+"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "+";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "-"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "-";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "*"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "*";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "/"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "/";
  }
  else{
    document.getElementById('input').value = document.getElementById('input').value + "*";
    
  }*/
  document.getElementById('operand').value = "*";
  }
function division(){
  //document.getElementById('input').value = document.getElementById('input').value + "/";
  if(document.getElementById('input_number').value === "0"){
    
  }
  else if(document.getElementById('operand').value === ""){
    document.getElementById('output_number').value=  parseFloat(document.getElementById('input_number').value);
  }
  else{
    if(document.getElementById('operand').value === "+"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) + parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "-"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) - parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "*"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) * parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "/"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) / parseFloat(document.getElementById('input_number').value);
     }
  }
  document.getElementById('input_number').value = 0;
  //document.getElementById('operand').value = "/";
  /*if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "+"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "+";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "-"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "-";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "*"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "*";
  } else if(document.getElementById('input').value[document.getElementById('input').value.length - 1] === "/"){
    document.getElementById('input').value[document.getElementById('input').value.length - 1] = "/";
  }
  else{
    document.getElementById('input').value = document.getElementById('input').value + "/";
    
  }*/
  document.getElementById('operand').value = "/";
  }
function clean(){
  document.getElementById('input_number').value = 0;
  }
function equal(){
  //document.getElementById('output_number').value = document.getElementById('input').value;
  if(document.getElementById('input_number').value === "0"){
    
  }
  if(document.getElementById('operand').value === "+"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) + parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "-"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) - parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "*"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) * parseFloat(document.getElementById('input_number').value);
     }
  else if(document.getElementById('operand').value === "/"){
     document.getElementById('output_number').value= parseFloat(document.getElementById('output_number').value) / parseFloat(document.getElementById('input_number').value);
     }
  document.getElementById('operand').value = "#";
}
function reset(){
  document.getElementById('output_number').value = 0;
  document.getElementById('input').value = "";
  document.getElementById('operand').value = "";
}
function del(){
  if(document.getElementById('input_number').value.length === 1){
    document.getElementById('input_number').value = 0;
  }
  else{
    document.getElementById('input_number').value = document.getElementById('input_number').value.slice(0,-1);
  }
}
