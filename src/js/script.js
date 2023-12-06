
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


  document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.border-glow');

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