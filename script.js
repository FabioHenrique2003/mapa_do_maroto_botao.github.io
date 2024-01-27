function checkFields() {
    var field1Value = document.getElementById('field1').value;
    var resultDiv = document.getElementById('result');

    if (field1Value === "eu juro solenemente não fazer nada de bom") {
      resultDiv.innerHTML = '<p>Acertou! Abrindo o mapa...</p>';
      // Redirecionar para outro site
      setTimeout(function () {
        window.location.href = 'https://fabiohenrique2003.github.io/mapa_do_maroto.github.io/';
      }, 2000); // Tempo de espera de 2 segundos antes do redirecionamento (opcional)
    } else {
      resultDiv.innerHTML = '<p>Tente novamente.</p>';
    }
  }