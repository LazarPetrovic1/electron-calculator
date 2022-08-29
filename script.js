let calcScreen = document.getElementById("calc-screen");
const nine = document.getElementById("nine"),
  eight = document.getElementById("eight"),
  seven = document.getElementById("seven"),
  six = document.getElementById("six"),
  five = document.getElementById("five"),
  four = document.getElementById("four"),
  three = document.getElementById("three"),
  two = document.getElementById("two"),
  one = document.getElementById("one"),
  zero = document.getElementById("zero");

const modulus = document.getElementById("modulus"),
  cancel = document.getElementById("cancel"),
  plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  times = document.getElementById("times"),
  by = document.getElementById("by"),
  openPar = document.getElementById("open-par"),
  closePar = document.getElementById("close-par"),
  point = document.getElementById("point"),
  equals = document.getElementById("equals");

function writer(e) {
  calcScreen.innerHTML += e.path[0].outerText;
}

function presser(e) {
  calcScreen.innerHTML += e;
}

function clear() {
  calcScreen.innerHTML = "";
}

function evaluate() {
  try {
    calcScreen.innerHTML = String(eval(calcScreen.innerHTML));
  } catch (e) {
    calcScreen.innerHTML = e.name;
  }
}

function keyboard(e) {
  switch (e.keyCode) {
    case 48:
    case 96:
      presser("0");
      break;
    case 49:
    case 97:
      presser("1");
      break;
    case 50:
    case 98:
      presser("2");
      break;
    case 51:
    case 99:
      presser("3");
      break;
    case 52:
    case 100:
      presser("4");
      break;
    case 53:
    case 101:
      presser("5");
      break;
    case 54:
    case 102:
      presser("6");
      break;
    case 55:
    case 103:
      presser("7");
      break;
    case 56:
    case 104:
      presser("8");
      break;
    case 57:
    case 105:
      presser("9");
      break;
    case 107:
      presser("+");
      break;
    case 109:
      presser("-");
      break;
    case 106:
      presser("*");
      break;
    case 111:
      presser("/");
      break;
    case 18:
      presser("**");
      break;
    case 113:
      presser("**2");
      break;
    case 114:
      presser("**3");
      break;
    case 8:
      calcScreen.innerHTML = calcScreen.innerHTML.substring(
        0,
        calcScreen.innerHTML.length - 1
      );
      break;
    case 13:
      evaluate();
      break;
    case 67:
      clear();
      break;
    case 219:
      presser("(");
      break;
    case 221:
      presser(")");
      break;
    case 77:
      presser("%");
      break;
    default:
      console.log("Not a supported operation");
  }
}

nine.addEventListener("click", writer);
eight.addEventListener("click", writer);
seven.addEventListener("click", writer);
six.addEventListener("click", writer);
five.addEventListener("click", writer);
four.addEventListener("click", writer);
three.addEventListener("click", writer);
two.addEventListener("click", writer);
one.addEventListener("click", writer);
zero.addEventListener("click", writer);
modulus.addEventListener("click", writer);
plus.addEventListener("click", writer);
minus.addEventListener("click", writer);
by.addEventListener("click", writer);
times.addEventListener("click", writer);
point.addEventListener("click", writer);
openPar.addEventListener("click", writer);
closePar.addEventListener("click", writer);
cancel.addEventListener("click", clear);
equals.addEventListener("click", evaluate);
document.addEventListener("keydown", keyboard);