//PARA ESCREVER O NOME

document.getElementById("h1-home").style.display = "none";
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
const elementoTexto = document.getElementById('texto-escrevendo');
const textoParaEscrever = 'LUCAS FERNANDES';
const intervaloDeEscrita = 150;
escreverTexto(elementoTexto, textoParaEscrever, intervaloDeEscrita);

//PARA ROLAR A TELA MAIS SUAVE

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

//PARA COPIAR O EMAIL

document.addEventListener('DOMContentLoaded', function() {
  var copyButton = document.getElementById('copyButton');
  var emailDisplay = document.getElementById('emailDisplay');

  copyButton.addEventListener('click', function() {
    var range = document.createRange();
    range.selectNode(emailDisplay);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      
      document.execCommand('copy');

  
      Swal.fire({
        title: 'Copiado!',
        text: 'O texto foi copiado para a área de transferência.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

    } catch (err) {
      
      console.error('Erro ao copiar: ', err);

      
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um erro ao tentar copiar o texto.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }

    window.getSelection().removeAllRanges();
  });
});

//MENU HAMBURGUER

document.addEventListener('DOMContentLoaded', function() {
  var hamburgerIcon = document.querySelector('.hamburger-menu');
  var headerItems = document.querySelector('.header-items');

  hamburgerIcon.addEventListener('click', function() {
      headerItems.classList.toggle('show');
  });

  var menuItems = document.querySelectorAll('.header-items a');
  menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
          headerItems.classList.remove('show');
      });
  });
});

//PARA OS EFEITOS
AOS.init();

//PARA OS MODALS

function detailProject(element){
  element.style.filter = 'brightness(0.8)';
}

function resetProject(element){
  element.style.filter = 'brightness(1.0)';
}

function openDetailsModal(){
  const modal = document.getElementById('detailsModal');
  modal.style.display = 'block'
}

//CONTINUAR