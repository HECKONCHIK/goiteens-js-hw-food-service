import galleryItemTpl from "../templates/menu";
import food from "../js/food.json";

const foodList = document.querySelector('.js-menu');

const markup = galleryItemTpl(food);

foodList.insertAdjacentHTML('beforeend', markup);