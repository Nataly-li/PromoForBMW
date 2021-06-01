document.addEventListener('DOMContentLoaded', () => {
  const featureLinksElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  featureLinksElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('feature__link_active')) {
        btn.classList.remove('feature__link_active');
        featureSubElems[index].classList.add('hidden');
      } else {
        featureSubElems.forEach((featureSubElem) => {
          featureSubElem.classList.add('hidden');
        });
        featureLinksElems.forEach((featureLinksElem) => {
          featureLinksElem.classList.remove('feature__link_active');
        });

        btn.classList.add('feature__link_active');
        featureSubElems[index].classList.remove('hidden');
      }
    });
  });
});
