function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
  });

  // Прокрутк при клике

  const useItems = document.querySelectorAll('.use__item[data-goto]');
  if (useItems.length > 0) {
    useItems.forEach(useItem => {
      useItem.addEventListener("click", onUseLinkClick);
    });

    function onUseLinkClick (e) {
      const useItem = e.target;
      if (useItem.dataset.goto && document.querySelector(useItem.dataset.goto)) {
        const gotoBlock = document.querySelector(useItem.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    }
  }

  // Меню бургер

  const menuBurger = document.querySelector('.navigation__burger');
  if (menuBurger) {
    const navigation = document.querySelector('.navigation__body');
    menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      menuBurger.classList.toggle('navigation__burger_active');
      navigation.classList.toggle('navigation__body_active');
    });
  }