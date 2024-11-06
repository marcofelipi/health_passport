document.getElementById('imc-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const idade = document.getElementById('idade').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;

  if (!idade || !peso || !altura) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  if (idade < 0 || idade > 100) {
    alert('Preencha a idade entre 0 a 100.');
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
  let resultadoSaude = '';
  let dicas = '';

  if (imc < 18.5) {
    resultadoSaude = 'Abaixo do peso';
    dicas = 'Considere consultar um nutricionista para orientações sobre alimentação saudável.';
  } else if (imc >= 18.5 && imc < 24.9) {
    resultadoSaude = 'Peso normal';
    dicas = 'Continue mantendo uma alimentação balanceada e praticando exercícios físicos regularmente.';
  } else if (imc >= 25 && imc < 29.9) {
    resultadoSaude = 'Sobrepeso';
    dicas = 'Tente perder peso com a ajuda de um profissional. A prática de exercícios é fundamental.';
  } else {
    resultadoSaude = 'Obesidade';
    dicas = 'Procure um médico ou nutricionista para um plano de emagrecimento saudável.';
  }

  document.body.innerHTML = `
    <div class="container">
      <h1>Resultado</h1>
      <p><strong>IMC: </strong>${imc.toFixed(2)}</p>
      <p><strong>Estado de Saúde: </strong>${resultadoSaude}</p>
      <h2>Dicas para você:</h2>
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
            <div class="carousel-caption d-none d-md-block">
              <h5>Mantenha-se saudável!</h5>
              <a href="https://www.minhavida.com.br/receitas" target="_blank">Confira mais receitas saudáveis</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/slide2.jpg" class="d-block w-100" alt="Slide 2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Slide 2 Título</h5>
              <p>Texto descritivo para o segundo slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/slide3.jpg" class="d-block w-100" alt="Slide 3">
            <div class="carousel-caption d-none d-md-block">
              <h5>Slide 3 Título</h5>
              <p>Texto descritivo para o terceiro slide.</p>
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
      
      <a href="https://blog.sabin.com.br/autocuidado/como-ter-uma-rotina-saudavel/" target="_blank" style="text-align: center">Como posso organizar minha rotina?</a><br>
      <a href="https://www.minhavida.com.br/receitas" target="_blank">Confira mais receitas saudáveis</a>
      <a href="https://www.minhavida.com.br/saude/dicas" target="_blank">Veja dicas de vida saudável</a>
    </div>
  `;
});
