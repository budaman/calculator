var buttons = Array.from(document.querySelectorAll('.number'));
var op = Array.from(document.querySelectorAll('.op'));
var lygu = document.querySelector('.lygu');
var ats = document.querySelector('.view');


var suma = "";
var pirmasSk = 0;
var antrasSk = 0;
var zenklas = "";

lygu.addEventListener('click', function skaiciavimas() {
   if (zenklas == "+") {
      antrasSk = suma;
      var ats = pirmasSk * 1 + antrasSk * 1;
   } else if (zenklas == "-") {
      antrasSk = suma;
      var ats = pirmasSk * 1 - antrasSk * 1;
   }
   ats.innerHTML = "aaa";
   alert(ats);


});

op.forEach(o => o.addEventListener('click', function operatorius() {
   if (this.value == "+") {
      pirmasSk = suma;
      suma = "";
      zenklas = "+";
   } else if (this.value == "-") {
      pirmasSk = suma;
      suma = "";
      zenklas = "-";
   } else return;

}));

buttons.forEach(button => button.addEventListener('click', function test() {
   if (suma == "" || suma == undefined) {
      suma = this.value;
      suma.toString();
      console.log(suma);
   } else {
      suma = suma + this.value;
      suma.toString();
      console.log(suma);
   }
   ats.innerHTML = suma;
}));
