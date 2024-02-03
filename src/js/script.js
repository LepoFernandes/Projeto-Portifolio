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

function openDetailsModal(projectId) {
  const modalId = `myModal${projectId}`;
  const modalElement = document.getElementById(modalId);

  if (modalElement) {
    openModal(modalId);

    const thumbnailsContainer = modalElement.querySelector('.thumbnail');
    const mainImage = modalElement.querySelector('.main-image');

    const imageCount = 3;
    createThumbnails(thumbnailsContainer, imageCount, projectId, modalId, mainImage);
  }
}

function openModal(modalId) {
  const modalElement = document.getElementById(modalId);
  if (modalElement) {
    modalElement.style.display = 'block';
  }
}

function closeDetailsModal(event, modalId) {
  const modalElement = document.getElementById(modalId);
  const isInsideContent = modalElement.querySelector('.modal-content').contains(event.target);

  if (!isInsideContent) {
    modalElement.style.display = 'none';
  }
}

function createThumbnails(thumbnailsContainer, imageCount, projectId, modalId, mainImage) {
  thumbnailsContainer.innerHTML = '';

  for (let i = 1; i <= imageCount; i++) {
    const thumbnail = document.createElement('img');
    thumbnail.src = `src/img/mockup/miniatura_${projectId}_${i}.png`;
    thumbnail.alt = `Miniatura ${i}`;
    thumbnail.classList.add('thumbnail');

    thumbnail.onclick = function () {
      mainImage.src = `src/img/mockup/miniatura_${projectId}_${i}.png`;
    };

    thumbnailsContainer.appendChild(thumbnail);
  }
}

//PARA DAR ZOOM 


// Obtém todas as instâncias de elementos com as classes 'box' e 'main-image'
const boxes = document.querySelectorAll('.box');
const images = document.querySelectorAll('.main-image');

// Adiciona os eventos a cada par correspondente
boxes.forEach((box, index) => {
  const img = images[index];

  box.addEventListener("mousemove", (e) => {
    const x = e.clientX - box.getBoundingClientRect().left;
    const y = e.clientY - box.getBoundingClientRect().top;

    // Ajuste a escala conforme necessário
    const scaleValue = 1.5;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = `scale(${scaleValue})`;
  });

  box.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
  });
});
