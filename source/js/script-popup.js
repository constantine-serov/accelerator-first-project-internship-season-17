const buttons = document.querySelectorAll('.button-section--slide');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.popup')
      .showModal();
    document.querySelector('.page-body')
      .classList.toggle('page-body--popup-open');
  });
});

document.querySelector('.button-section--popup-submit')
  .addEventListener('click', () => document.querySelector('.page-body').classList.remove('page-body--popup-open'));

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.page-body').classList.remove('page-body--popup-open');
  }
});
