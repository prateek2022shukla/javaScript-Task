

document.getElementById('hToM').onclick = function(){
  var temp = document.getElementById('hToS');
  temp.checked = false;
}

document.getElementById('hToS').onclick = function(){
  var temp = document.getElementById("hToM");
  temp.checked = false;
}


function convert(){
  var t = document.getElementById("input-text").value;


  if(document.getElementById("hToM").checked){
    var res = t*60;
    document.getElementById("result").innerHTML = t + " hours = " + res + " minutes";

  }
   
  else{
    var res = t*60*60;
    document.getElementById("result").innerHTML = t + " hours = " + res + " seconds";

  }

  

  
}


