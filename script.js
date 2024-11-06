document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    if (!idade || !peso || !altura) {
      alert('Por favor, preencha todos os campos!');
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
        <img src="/img/habitos-rotina-saudavel.jpg" style="height:250px;width:500px;"/>
        <a href="https://blog.sabin.com.br/autocuidado/como-ter-uma-rotina-saudavel/" target="_blank" style="text-align: center">Como posso organizar minha rotina?</a><br>
        <a href="https://www.minhavida.com.br/receitas" target="_blank">Confira mais receitas saudáveis</a>
        <a href="https://www.minhavida.com.br/saude/dicas" target="_blank">Veja dicas de vida saudável</a>
      </div>
    `;
  });
  