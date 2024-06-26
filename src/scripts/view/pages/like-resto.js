import FavoriteRestaurantApi from '../../data/favorite-restaurant-api';
import { createRestoItemTemplate } from '../templates/template-creator';

const LikeResto = {
  async render() {
    return `
    <h1 class="section__title">Favorite Restaurant</h1>

    <div id="content" class="card__list"></div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantApi.getAllResto();
    const restaurantContainer = document.querySelector('#content');

    if (resto.length) {
      resto.forEach((restos) => {
        restaurantContainer.innerHTML += createRestoItemTemplate(restos);
      });
    } else {
      restaurantContainer.innerHTML = `
      <div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>
    `;
    }
  },
};

export default LikeResto;