<script>
import StarRating from 'vue-star-rating'
export default {
  name:"seccion_general",
  components: {
  StarRating
  },
  data(){
    return{
      games: [
        {
          name: 'Elden Ring',
          rating: 4,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Peppa pig',
          rating: 5,
          Url: 'https://fr.web.img3.acsta.net/pictures/20/03/30/12/25/1591799.jpg'
        },
        {
          name: 'Pierde vidas',
          rating: 0.5,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg'
        },
        {
          name: 'Sekiro',
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS'
        },
        {
          name: 'Sekiro2',
          rating: 5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS'
        },
        {
          name: 'Pierde vidas2',
          rating: 0,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg'
        },
        {
          name: 'Peppa pig2',
          rating: 2.5,
          Url: 'https://fr.web.img3.acsta.net/pictures/20/03/30/12/25/1591799.jpg'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Peppa pig',
          rating: 5,
          Url: 'https://fr.web.img3.acsta.net/pictures/20/03/30/12/25/1591799.jpg'
        },
        {
          name: 'Pierde vidas',
          rating: 0.5,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg'
        },
        {
          name: 'Sekiro',
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS'
        },
        {
          name: 'Sekiro2',
          rating: 5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS'
        },
        {
          name: 'Pierde vidas2',
          rating: 0,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg'
        },
        {
          name: 'Peppa pig2',
          rating: 2.5,
          Url: 'https://fr.web.img3.acsta.net/pictures/20/03/30/12/25/1591799.jpg'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Peppa pig',
          rating: 5,
          Url: 'https://fr.web.img3.acsta.net/pictures/20/03/30/12/25/1591799.jpg'
        },
        {
          name: 'Pierde vidas',
          rating: 0.5,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg'
        },
        {
          name: 'Sekiro',
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS'
        },
        {
          name: 'Sekiro2',
          rating: 5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS'
        },
        {
          name: 'Pierde vidas2',
          rating: 0,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg'
        },
        {
          name: 'Peppa pig2',
          rating: 2.5,
          Url: 'https://fr.web.img3.acsta.net/pictures/20/03/30/12/25/1591799.jpg'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        }
      ]
    }
  }
}
</script>

<template>
  

  <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
      <div class="container pt-3">
        <div class="row">
          <div class="col-lg-2 p-2" v-for="game in games" :key="game">
            <div class="card text-white bg-dark">
              <img v-bind:src="game.Url" class="card-img-top" alt="" width="200" height="255"/>
              <div class="card-body">
                <h5 class="card-title">{{game.name}}</h5>
                <star-rating :rating=game.rating :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  
</template>

<style>
.row>*{
   width: auto !important;
}
</style>