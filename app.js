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
}