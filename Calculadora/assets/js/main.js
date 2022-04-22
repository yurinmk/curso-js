function criaCalculadora() {
  return {
    //Atributos
    display: document.querySelector(".display"),

    //Métodos
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.btnLimpaDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.btnApagaUm();
        }

         if (el.classList.contains("btn-eq")) {
          this.calcular();
        }
      });
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        this.display.value = this.display.value.replace(/[a-zA-Z ]/g, '');

        if (e.keyCode === 13) {
          this.calcular();
        }

         if (e.keyCode === 27) {
          this.btnLimpaDisplay();
        }
      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    btnLimpaDisplay() {
      this.display.value = "";
    },

    btnApagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calcular() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida!");
          return;
        }

        this.display.value = conta;
      } catch (error) {
        alert("Conta inválida!");
        return;
      }
    },
  };
}

const calculadora = criaCalculadora();

calculadora.inicia();
