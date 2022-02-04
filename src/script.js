

function myFunction() {

    var X = document.getElementById("length").value;
    a = parseInt(X);
    var y = document.getElementById("width").value;
    b=parseInt(y);


    var peri = 2*(a+b);
    var area = a*b;
    
    document.getElementById("result-1").innerHTML = area;

    document.getElementById("result-2").innerHTML = peri;
  }

  document.get