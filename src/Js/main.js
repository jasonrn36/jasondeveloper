const container = document.getElementById('scrollContainer');

// Captura o evento de rolagem do mouse
window.addEventListener('wheel', function(e) {
  e.preventDefault(); // evita rolagem vertical padrão

  if (e.ctrlKey) {
    // Se Ctrl estiver pressionado → aplica zoom
    // deltaY > 0 → diminuir zoom | deltaY < 0 → aumentar zoom
    let currentZoom = document.body.style.zoom ? parseFloat(document.body.style.zoom) : 1;

    if (e.deltaY < 0) {
      currentZoom += 0.1; // aumenta zoom
    } else {
      currentZoom = Math.max(0.1, currentZoom - 0.1); // diminui zoom (mínimo 0.1)
    }

    document.body.style.zoom = currentZoom;
    console.log("Zoom:", currentZoom);
  } else {
    // Caso contrário → rolagem horizontal
    container.scrollLeft += e.deltaY;
  }
}, { passive: false });
