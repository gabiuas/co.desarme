document.addEventListener("DOMContentLoaded", function() {

  var i = 2;

  var troca = function() {
    var foto = document.querySelector(".ft");

    foto.src = "img/projeto" + i + ".jpg";

    i++;

    if(i === 6) {
        i = 1;
    }
  }

  setInterval(troca, 7000);

});
