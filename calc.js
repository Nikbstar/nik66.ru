// Calculator
var radio = document.getElementsByName("calc");
document.getElementById("n1").oninput = calc;
document.getElementById("n2").oninput = calc;

for (var i = 0; i < radio.length; i++) {
  radio[i].onchange = calc;
}

function calc() {
  var num1, num2, result;
  num1 = parseInt(document.getElementById("n1").value);
  num2 = parseInt(document.getElementById("n2").value);

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      if (radio[i].value == "+") {
        result = num1 + num2;
      } else if (radio[i].value == "-") {
        result = num1 - num2;
      } else if (radio[i].value == "*") {
        result = num1 * num2;
      } else if (radio[i].value == "/") {
        if (num2 != 0) {
          result = num1 / num2;
        } else {
          result = "на 0 делить нельзя!";
        }
      }
    }
  }
  document.getElementById("result").innerHTML = "Результат: " + result;
}

// Slider
document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var position = 0;

function sliderLeft() {
  var polosa = document.getElementById('polosa');
  position -= 128;
  if (position < -512) {
    position = 0;
  }
  polosa.style.left = position+'px';
}

function sliderRight() {
  var polosa = document.getElementById('polosa');
  position += 128;
  if (position > 0) {
    position = -512;
  }
  polosa.style.left = position+'px';
}

// Photo
document.getElementById('myslide').onmousemove = function(event) {
  var x = event.offsetX;
  document.getElementById('photo-two').style.width = x + 'px';
  
}