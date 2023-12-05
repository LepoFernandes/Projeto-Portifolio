const icons = document.querySelectorAll('.home-icons a');

icons.forEach(icon => {
    const tooltip = icon.querySelector('.tooltip');
    const iconName = icon.getAttribute('data-tooltip');

    icon.addEventListener('mouseover', () => {
        tooltip.textContent = iconName;
        tooltip.style.display = 'block';
    });

    icon.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});


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

  