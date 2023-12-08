
function escreverTexto(elemento, texto, intervalo) {
    let i = 0;
    const escrever = setInterval(function() {
      elemento.innerHTML += texto.charAt(i);
      i++;
      if (i > texto.length) {
        clearInterval(escrever);
      }
    }, intervalo);
  } 
  document.getElementById("h1-home").style.display = "none";
  const elementoTexto = document.getElementById('texto-escrevendo');
  const textoParaEscrever = 'LUCAS FERNANDES';
  const intervaloDeEscrita = 100;
  escreverTexto(elementoTexto, textoParaEscrever, intervaloDeEscrita);


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
},5000)


function nextImage(){
  count++;
  if(count>7){
    count = 1;
  }


  document.getElementById("radio"+count).checked = true;
}


document.addEventListener('DOMContentLoaded', function () {
  var scrollLinks = document.querySelectorAll('.smooth');

  scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          var targetId = this.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});