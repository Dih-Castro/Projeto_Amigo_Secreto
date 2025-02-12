const amigos = [];

// Obter elementos do DOM
const inputNome = document.getElementById('amigo');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaAmigos = document.getElementById('listaAmigos');
const btnSortear = document.getElementById('btnSortear');
const resultado = document.getElementById('resultado');

function adicionarAmigo() {
  const nome = inputNome.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  atualizarLista();
  inputNome.value = '';
}

function atualizarLista() {
  listaAmigos.innerHTML = '';
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome para realizar o sorteio.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

btnAdicionar.addEventListener('click', adicionarAmigo);
btnSortear.addEventListener('click', sortearAmigo);