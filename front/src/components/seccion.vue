<style scoped>
.row>*{
   width: auto !important;
}
.titulo{
  text-align: left;
}
.card-img-top{
  width:200px;
  height:255px;
}
.bg-image{
  width:200px;
  height:255px;
}
@media (max-width: 576px){
.card-img-top{
  width:132px !important;
  height:185px !important;
  
}
.bg-image{
  width:132px !important;
  height:185px !important;
  
}
}
.row {
    --bs-gutter-x: 0rem;
    justify-content: space-around;
}
.margenabajo{
  margin-bottom: 2em;
}
</style>

<template>
  
  <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
      <div class="container pt-3">
        <!-- titulo -->
        <h4 class="titulo">Reseñas de amigos</h4>
        <div class="row">
          <!-- for para colocar todos elementos. Hasta un maximo de 6 -->
          <div class="col-md-4 col-lg-2 col-6 margenabajo" v-for="i in ((games.length>6) ? 6 : games.length)" :key="i">
            <div class="card text-white bg-dark">
              <img v-bind:src="games[i-1].Url" class="card-img-top" alt=""/>
              <div class="card-body align-self-center">
                <star-rating :rating=games[i-1].rating :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  
</template>

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
        }
      ]
    }
  }
}
</script>