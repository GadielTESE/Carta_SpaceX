fetch('carta.json')
  .then(response => response.json())
  .then(data => {
    const carta = data.carta;

    // Obtener la fecha actual
    const fechaActual = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

    // Generar el contenido HTML de la carta
    const cartaHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <img src="logo.png" alt="Logo de la empresa" style="height: 40px;">
        <p style="text-align: right; font-weight: bold; margin: 0;">Fecha: ${fechaFormateada}</p>
      </div>
      <p>Estimad@ <strong>${carta.empleado}</strong>,</p>
      <p>${carta.mensaje}</p>
      <p style="margin-top: 50px; font-weight: bold;">Atentamente,</p>
      <p>${carta.emisor}</p>
      <img src="signature.png" alt="Firma" style="display: block; margin: 20px auto; width: 150px;">
      <footer style="margin-top: 50px; font-size: 12px; text-align: center; color: rgba(255, 255, 255, 0.7);">
        SpaceX - Av. Espacial, 123, Marte City - Tel. 000-123-4567
      </footer>
    `;

    // Insertar el contenido en el contenedor #carta
    document.getElementById('carta').innerHTML = cartaHTML;
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
    document.getElementById('carta').innerHTML = '<p>Error al cargar el contenido de la carta.</p>';
  });
