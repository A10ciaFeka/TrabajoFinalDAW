<style>
.row>*{
   width: auto !important;
}
.card-img-top{
  width:200px;
  height:255px;
}
</style>

<template>
  <div class="overflow-auto text-center">
    <div class="container pt-3">
      <div class="row" v-if="currentPage<rows">
        <div class="col-lg-2 p-2" v-for="i in maxItems" :key="i">
          <div class="card text-white bg-dark">
            <img v-bind:src="games[i-1 + (maxItems*(currentPage-1))].Url" class="card-img-top" alt="" width="200" height="255"/>
            <div class="card-body align-self-center">
              <star-rating :rating="games[i-1 + (maxItems*(currentPage-1))].rating" :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="currentPage>=rows">
        <div class="col-lg-2 p-2" v-for="i in games.length-(maxItems*(currentPage-1))" :key="i">
          <div class="card text-white bg-dark">
            <img v-bind:src="games[i-1 + (maxItems*(currentPage-1))].Url" class="card-img-top" alt="" />
            <div class="card-body align-self-center">
              <star-rating :rating="games[i-1 + (maxItems*(currentPage-1))].rating" :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
            </div>
          </div>
        </div>
      </div>

      <div>
      <Pagination
        :totalPages="rows"
        :maxVisibleButtons="perPage"
        :perPage="perPage"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
      </div>
    </div>

  </div>  
  
</template>

<script>
import StarRating from 'vue-star-rating'
import Pagination from '@/components/pagination.vue'
export default {
  name:"seccion_general",
  components: {
    StarRating,
    Pagination
  },
  data(){
    return{
      count: 0,
      perPage: 3,
      maxItems: 12,
      currentPage: 1,
      games: [
        {
          name: 'Elden Ring',
          rating: 4,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
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
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
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
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
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
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Elden Ring2',
          rating: 5,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        }
      ]
    }
  },
  computed: {
    rows() {
      return ((this.games.length/this.maxItems)+1).toFixed()
    }
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
    }
  }
}
</script>