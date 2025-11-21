    const container = document.getElementById('scrollContainer');

    // Captura o evento de rolagem do mouse
    window.addEventListener('wheel', function(e) {
      e.preventDefault(); // evita rolagem vertical padrão
      // deltaY > 0 significa rolar para baixo → direita
      // deltaY < 0 significa rolar para cima → esquerda
    container.scrollLeft += e.deltaY;
    }, { passive: false });