// Lista de amigos
let amigos = [];

// Adicionando amigo na lista
function adicionarAmigo() {
  const nomeAmigo = document.getElementById('amigo');
  const nome = nomeAmigo.value.trim();

  if (nome === "") {
    alert("Digite o nome de um amigo.");
    return;
  }

  amigos.push(nome);
  nomeAmigo.value = '';
  exibirAmigos();
}

// Exibindo nomes adicionados
function exibirAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Sorteando amigos
function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (amigos.length === 0) {
    resultado.innerHTML = '<li>Adicione um amigo para o sorteio.</li>';
    return
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong>!</li>`;
  
}