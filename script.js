document.getElementById('imc-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const idade = document.getElementById('idade').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  let resultadoSaude = '';
  let dicas = '';

  if (!idade || !peso || !altura) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  if (idade < 2 || idade > 100) {
    alert('Preencha a idade entre 2 a 100 anos.');
    return;
  }

  if (peso < 0 || peso > 500) {
    alert('Preencha o peso de 0 a 500kg.');
    return;
  }

  if (altura < 0 || altura > 2.3) {
    alert('Preencha a altura entre 0 e 2.3m.');
    return;
  }

  const imc = peso / (altura * altura);

  if (idade<=14)
    {
      resultadoSaude='Consulte a <a href="/img/imcinfantil.png" target="_blank">tabela de IMC infantil</a>.';
      document.body.innerHTML = `
        <div class="container">
          <p><strong>Seu IMC: </strong>${imc.toFixed(2)}</p>
          <p><strong>Estado de Saúde: </strong>${resultadoSaude}</p>
        </div>`;
      return;
    }

  if (imc < 18.5 && idade>14) {
    resultadoSaude = 'Abaixo do peso';
    dicas = 'Considere consultar um nutricionista para orientações sobre alimentação saudável.';
  } else if (imc >= 18.5 && imc < 24.9 && idade>14) {
    resultadoSaude = 'Peso normal';
    dicas = 'Continue mantendo uma alimentação balanceada e praticando exercícios físicos regularmente.';
  } else if (imc >= 25 && imc < 29.9 && idade>14) {
    resultadoSaude = 'Sobrepeso';
    dicas = 'Tente perder peso com a ajuda de um profissional. A prática de exercícios é fundamental.';
  } else if (imc>=29.9 && idade>14){
    resultadoSaude = 'Obesidade';
    dicas = 'Procure um médico ou nutricionista para um plano de emagrecimento saudável.';
  }

  document.body.innerHTML = `
    <div class="container">
      <img src="img/newlogo.PNG" style="margin-bottom: 10px">
      <p><strong>Seu IMC: </strong>${imc.toFixed(2)}</p>
      <p><strong>Estado de Saúde: </strong>${resultadoSaude}</p>
      <h3>Dicas para você:</h3>
      <p>${dicas}</p>
      <br>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/habitos-rotina-saudavel.jpg" class="d-block w-100" alt="Slide 1">
            <div class="carousel-caption">
              <h5>Como me alimentar melhor?</h5>
              <a href="https://www.minhavida.com.br/receitas" target="_blank" style="color:white;">Receitas saudáveis de A-Z</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/water_drinking.jpg" class="d-block w-100" alt="Slide 2">
            <div class="carousel-caption">
              <h5>Como posso organizar minha rotina?</h5>
              <a href="https://blog.sabin.com.br/autocuidado/como-ter-uma-rotina-saudavel/" target="_blank" style="text-align: center; color: white">8 dicas práticas para ter uma rotina saudável</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/lifestyle.jpg" class="d-block w-100" alt="Slide 3">
            <div class="carousel-caption">
              <h5>Benefícios da vida saudável</h5>
              <a href="https://www.terra.com.br/vida-e-estilo/comportamento/vida-saudavel-confira-os-beneficios,dcbebcc4efeefc41a317ab11af3c18bfaq6b7064.html" target="_blank" style="color:white">Confira os benefícios</a>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
      <a href="https://www.doctoralia.com.br/medico-clinico-geral/passo-fundo" target="_blank" style="color:green; margin-top:10px; text-align: right;">Consulte os médicos disponíveis na sua cidade</a>
    </div>
  `;
});
