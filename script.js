let jogo;
function iniciarJogo() {
    const jogador1 = document.getElementById('Jogador1').value ||'jogador 1';
    const jogador2 = document.getElementById('Jogador2').value ||'jogador 2';

    jogo = new JogoDaVelha(jogador1, jogador2);
    document.getElementById('entrada-nomes').classList.add('oculto');
    document.getElementById('joga-container').classList.remove('oculto');
    jogo.atualizarPlacar();

    document. querySelectorAll('.celula').forEach(celula => {
        celula.addEventListener('click', function() {
            jogo.Jogada(this.getAttribute('data-index'));
        });
    });
  }       

  class JogoDaVelha {
    constructor(jogador1, jogador2) {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.placarJogador1 = 0;
        this.placarJogador2 = 0;
        this.jogadorAtual = 'x';
        this.tabuleiro = Array(9).fill(null);
        this.jogoAtivo = true;
        this.atualizarVezJogador();
    }
    atualizarVezJogador() {
      const vezJogador = this.jogadorAtual === 'x' ? this.jogador1 : this.jogador2;
      document.getElementById('vez-jogador')
      .textContent = `vez de: {vezJogador} (${this.jogadorAtual})`;
      


    }
  }