$(document).ready(function () {
  const button = document.querySelector('.password-recovery__button--js');

  // запуск таймера при открытии страницы
  const timerBlock = document.querySelector('.password-recovery__repeat--js');

  const runTimer = () => {
    button.disabled = true;
    timerBlock.style.display = 'block';
    let seconds = 60;

    const timerId = setInterval(() => {
      seconds--;

      if (seconds === 0) {
        clearInterval(timerId);
        timerBlock.style.display = 'none';
        button.disabled = false;
        seconds = 60;
      }

      timerBlock.innerHTML = `Повторная отправка возможна через ${seconds} сек`;
    }, 1000);
  };

  runTimer();

  // запуск таймера при клике на кнопку
  button.addEventListener('click', (event) => {
    event.preventDefault();
    runTimer();
  });
});
