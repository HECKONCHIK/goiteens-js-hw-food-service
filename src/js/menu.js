import galleryItemTpl from "../templates/menu";
import food from "../js/food.json";

const foodList = document.querySelector('.js-menu');
const switchTheme = document.querySelector('.js-input');

switchTheme.addEventListener('change', switchThemeFunc);

function switchThemeFunc() {
    if (this.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

const markup = galleryItemTpl(food);

foodList.insertAdjacentHTML('beforeend', markup);



