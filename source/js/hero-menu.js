const hiddenMenu = (evt) => {
  if (evt.target === document.querySelector('.page-body__container--hero') ||
      evt.target === document.querySelector('.page-body__header') ||
      evt.target === document.querySelector('.page-body')) {

    document.querySelector('.page-body').classList.remove('page-body--menu-open');

    document.querySelector('.hero__menu').classList.toggle('hero__menu--closed');
    document.querySelector('.button-section--menu').classList.toggle('button-section--opened');
  }
};

document.querySelector('.button-section--menu').addEventListener('click', () => {
  document.querySelector('.button-section--menu').classList.toggle('button-section--opened');
  document.querySelector('.hero__menu').classList.toggle('hero__menu--closed');
  document.querySelector('.page-body').classList.toggle('page-body--menu-open');
  document.addEventListener('click', hiddenMenu);
});


document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.page-body').classList.remove('page-body--menu-open');
    document.querySelector('.button-section').classList.remove('button-section--opened');
    document.querySelector('.hero__menu').classList.add('hero__menu--closed');
  }
});
