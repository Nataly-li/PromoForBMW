const designLBlockElem = document.querySelector('.design-block');
//const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
  modalElem.classList.remove('hidden');
  disableScroll();
};

const closeModal = () => {
  modalElem.classList.add('hidden');
  enableScroll();
};

// делегирование
designLBlockElem.addEventListener('click', (event) => {
  const target = event.target;

  if (target.matches('.more')) {
    openModal();
  }
});

// через forEach
// moreElems.forEach((moreElem) => {
//   moreElem.addEventListener('click', openModal);
// });

modalElem.addEventListener('click', (event) => {
  const target = event.target;

  if (
    target.classList.contains('overlay') ||
    target.classList.contains('modal__close')
  ) {
    closeModal();
  }

  // === вместо contains можно использовать matches ===
  /*
  if (target.matches('.overlay, .modal__close')) {
    closeModal();
  }
  */
});
