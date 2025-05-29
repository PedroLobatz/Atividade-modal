// Seleciona os elementos do DOM
const botaoAbrir = document.querySelector('.botao'); // botão "CLIQUE EM SAIBA MAIS"
const modal = document.querySelector('.modal');
const botaoFechar = document.querySelector('.btnFechar');
const video = document.getElementById('video');

// Função para abrir o modal
function abrirModal() {
  modal.style.display = 'flex'; // exibe o modal (supondo que no CSS modal esteja display: none)
  // Opcional: autoplay do vídeo ao abrir
  video.src += "?autoplay=1"; // adiciona autoplay no src
}

// Função para fechar o modal
function fecharModal() {
  modal.style.display = 'none';
  // Para parar o vídeo ao fechar, reseta o src
  video.src = video.src.replace("?autoplay=1", "");
}

// Eventos
botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);

// Fechar modal ao clicar fora do conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    fecharModal();
  }
});
