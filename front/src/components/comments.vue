<style scoped>

</style>
<template>
    
    <section class="container mb-3 bg-dark">
        <p class="text-center p-3"><strong>Comments: {{reviews.length}}</strong></p>

        <div v-if="currentPage<rows">
            <div class="m-4 border-top" v-for="i in maxItems" :key="i">
                <div class="mt-3 mb-4 d-flex flex-row">
                    <div class="col-1">
                        <img v-bind:src="reviews[i-1 + (maxItems*(currentPage-1))].Url" class="shadow-1-strong rounded-circle border" alt="" width="65" height="65"/>
                    </div>

                    <div class="col-10">
                        <p class="mb-1 bg-success col-2 text-center rounded"><strong>{{reviews[i-1 + (maxItems*(currentPage-1))].user}}</strong></p>
                        <star-rating :rating="reviews[i-1 + (maxItems*(currentPage-1))].rating" :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                        <p class="mt-3">{{reviews[i-1+ (maxItems*(currentPage-1))].txt}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="m-4 border-top" v-for="i in reviews.length-(maxItems*(currentPage-1))" :key="i">
                <div class="mt-3 mb-4 d-flex flex-row">
                    <div class="col-1">
                        <img v-bind:src="reviews[i-1+ (maxItems*(currentPage-1))].Url"
                        class="shadow-1-strong rounded-circle border" alt="" width="65" height="65"/>
                    </div>

                    <div class="col-10">
                        <p class="mb-1 bg-success col-2 text-center rounded"><strong>{{reviews[i-1 + (maxItems*(currentPage-1))].user}}</strong></p>
                        <star-rating :rating="reviews[i-1 + (maxItems*(currentPage-1))].rating" :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                        <p class="mt-3">{{reviews[i-1+ (maxItems*(currentPage-1))].txt}}</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="pb-4 pt-3">
            <Pagination
                :totalPages="rows"
                :maxVisibleButtons="perPage"
                :perPage="perPage"
                :currentPage="currentPage"
                @pagechanged="onPageChange"
            />
      </div>
    </section>

</template>

<script>

import StarRating from 'vue-star-rating'
import Pagination from '@/components/pagination.vue'

export default {
  name: 'comment_section',
  components: {
    StarRating,
    Pagination
  },
    data(){
        return{
            perPage: 3,
            maxItems: 6,
            currentPage: 1,
            reviews: [
        {
          rating: 4,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png',
          txt: 'Un juego maravilloso',
          user: 'Selcus'
        },
        {
          rating: 0.5,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg',
          txt: 'Me arruio la vida y ahora ni mi perro me quiere',
          user: 'AAAAAAAAA'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 5,
          Url: 'https://i0.wp.com/adxgames.net/wp-content/uploads/2020/02/half-life-2-pc-1.jpg?fit=330%2C410&ssl=1',
          txt: 'El mejor juego existente',
          user: 'TheTroya'
        },
        {
          rating: 5,
          Url: 'https://i0.wp.com/adxgames.net/wp-content/uploads/2020/02/half-life-2-pc-1.jpg?fit=330%2C410&ssl=1',
          txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut? Repellendus alias dolor ad nam, soluta distinctio quis accusantium!',
          user: 'conchesumadre'
        },
        {
          rating: 4,
          Url: 'https://i0.wp.com/adxgames.net/wp-content/uploads/2020/02/half-life-2-pc-1.jpg?fit=330%2C410&ssl=1',
          txt: 'https://www.youtube.com/watch?v=ePSUMnkXyJM&ab_channel=Spax',
          user: '1234567890123456'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        },
        {
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          txt: 'Me dieron por el culo muy fuertemente',
          user:'A10cia'
        }
      ]
        }
    },
    computed: {
        rows() {
        return ((this.reviews.length/this.maxItems)+1).toFixed()
        }
    },
    methods: {
        onPageChange(page) {
        this.currentPage = page
        }
    }
}
</script>