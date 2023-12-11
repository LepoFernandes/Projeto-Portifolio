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

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
    slides[index].classList.add('fade'); 
  }

  function updateSlide() {
    radioButtons.forEach((radio, index) => {
      if (radio.checked) {
        currentIndex = index;
        slides.forEach((slide) => {
          slide.classList.remove('fade'); 
        });
        showSlide(currentIndex);
      }
    });
  }

  radioButtons.forEach((radio) => {
    radio.addEventListener('change', updateSlide);
  });

  showSlide(currentIndex);
});

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
      alert('Endereço de e-mail copiado para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar o endereço de e-mail: ', err);
    }

    window.getSelection().removeAllRanges();
  });
});




