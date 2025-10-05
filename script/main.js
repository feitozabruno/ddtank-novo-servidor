document.addEventListener("DOMContentLoaded", () => {
  // Define a data de lançamento: 11 de Outubro do ano corrente, às 11:00.
  const ANO_LANCAMENTO = new Date().getFullYear(); // Pega o ano atual automaticamente
  const MES_LANCAMENTO = 9; // 9 = Outubro... (0 = Janeiro)
  const DIA_LANCAMENTO = 11;
  const HORA_LANCAMENTO = 11; // 11hrs
  const MINUTO_LANCAMENTO = 0; // 11:00hrs
  const SEGUNDO_LANCAMENTO = 0; // 11:00:00hrs

  // Define a data de lançamento com base nas constantes acima.
  // const launchDate = new Date(new Date().getFullYear(), 9, 11, 11, 0, 0); --- IGNORE ---
  const launchDate = new Date(
    ANO_LANCAMENTO,
    MES_LANCAMENTO,
    DIA_LANCAMENTO,
    HORA_LANCAMENTO,
    MINUTO_LANCAMENTO,
    SEGUNDO_LANCAMENTO
  );

  const countdownElement = document.querySelector(".contador h2.destaque");

  if (countdownElement) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      // Se a data de lançamento já passou, para o contador.
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "LANÇADO!";
        return;
      }

      // Calcula dias, horas, minutos e segundos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Formata os números para terem sempre dois dígitos (ex: 09, 08, 07)
      const totalHours = days * 24 + hours;
      const formattedHours = String(totalHours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");

      // Atualiza o HTML do contador
      countdownElement.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
  }

  const preRegistroBtn = document.querySelector(".pre-registro-btn");
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".close-modal");

  preRegistroBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("show");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  });

  const form = document.querySelector(".modal-content form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Pré-registro realizado com sucesso!");
    modal.classList.remove("show");
  });
});
