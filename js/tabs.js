const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const designTitles = document.querySelectorAll('[data-tabs-title]');
const titles = document.querySelectorAll('.design__title');
//console.log('titles: ', titles);

for (const tab of tabsHandlerElems) {
  tab.addEventListener('click', () => {
    tabsHandlerElems.forEach(handler => {
      if (tab === handler) {
        handler.classList.add('design-list__item_active');
      } else {
        handler.classList.remove('design-list__item_active');
      }
    })

    tabsFieldElems.forEach(field => {
      if (field.dataset.tabsField === tab.dataset.tabsHandler) {
        field.classList.remove('hidden');
      } else {
        field.classList.add('hidden');
      }
    })

    // Первое решение
    designTitles.forEach(title => {
      if (title.dataset.tabsTitle === tab.dataset.tabsHandler) {
        title.classList.remove('hidden');
      } else {
        title.classList.add('hidden');
      }
    })

    // Второе решение
    // titles.forEach(title => {
    //   title.classList.toggle('hidden');
    // })
  })
}






