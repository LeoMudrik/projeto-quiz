const perguntas = [
    {
        texto: "ESTA PREPARADO(A)?",
        opcoes: ["CLARO"],
        correta: "CLARO",
    },
    {
        texto: "Local do primeiro beijo?",
        opcoes: ["Samba", "Sertanejo", "Pagode"],
        correta: "Pagode",
        objeto: "🥁"
    },   
    {
        texto: "Nome do cupido?",
        opcoes: ["Pedro", "Leo", "Joao"],
        correta: "Pedro",
        objeto: "❤️"
    },
    {
        texto: "Destino da última viagem juntos?",
        opcoes: ["NY", "Espanha", "Cuba"],
        correta: "Cuba",
        objeto: "🚩"
    },
    {
        texto: "Nome dos dois filhos de 4 patas?",
        opcoes: ["Berlim e Mike", "Berlim e Barney", "Mike e Bidu"],
        correta: "Berlim e Mike",
        objeto: "🐶🐶"
    },
    {
        texto: "Bairro onde moram?",
        opcoes: ["Sagrada Família", "Cidade Nova", "Silveira"],
        correta: "Silveira",
        objeto: "🏠"
    },
    {
        texto: "Bebida preferida do casal?",
        opcoes: ["Cerveja", "Canelinha", "Caipirinha"],
        correta: "Cerveja",
        objeto: "🍺"
    },
    {
        texto: "PARABENS! VOCÊ ADQUIRIU TODOS OS EMOJIS !",
        opcoes: ["Retirar a Recompensa"],
        correta: "Retirar a Recompensa"
  
    },
    {
        texto: "Já que você faz parte da nossa vida e dos nossos momentos mais felizes... \n\nTemos uma novidade muito especial para te contar ❤️",
        opcoes: ["Novidade"],
        correta: "Novidade",
    }


  ];
  
  let indice = 0;
  let encontrados = [];
  
  function mostrarPergunta() {
    if (indice < perguntas.length) {
      const p = perguntas[indice];
      document.getElementById('pergunta').textContent = p.texto;
      const opcoesDiv = document.getElementById('opcoes');
      const erroMsg = document.getElementById('mensagem-erro');
  
      opcoesDiv.innerHTML = '';
      erroMsg.textContent = '';
  
      p.opcoes.forEach(opcao => {
        const btn = document.createElement('button');
        btn.textContent = opcao;
        btn.onclick = () => verificarResposta(opcao);
        opcoesDiv.appendChild(btn);
      });
    } else {
      mostrarFinal();
    }
  }
  
  function verificarResposta(resposta) {
    const p = perguntas[indice];
    const erroMsg = document.getElementById('mensagem-erro');
  
    if (resposta === p.correta) {
      encontrados.push(p.objeto);
      atualizarObjetos();
      indice++;
      mostrarPergunta();
    } else {
      erroMsg.textContent = "❌ A resposta está incorreta. Tente novamente!";
    }
  }
  
  function atualizarObjetos() {
    const div = document.getElementById('objetos-encontrados');
    div.textContent = "Objetos encontrados: " + encontrados.join(' ');
  }
  
  function mostrarFinal() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('final').style.display = 'block';
  }
  
  mostrarPergunta();
  
