<style scoped>

</style>
<template>
    
    <section class="container mb-3 bg-dark">
        <p class="text-center p-3"><strong>Reviews: {{this.maxItems}}</strong></p>

        <div class="m-4 border-top" v-for="review in reviews" :key="review">
          <div class="mt-3 mb-4 d-flex flex-row">
            <div class="col-2">
                <div class="mb-2 ms-3">
                  <img :src="`usuarios/${review.usuario_fotoPerfil}`" height="50" width="50">
                </div>
                <p class="mb-1 bg-success col-6 text-center rounded">
                  <strong>{{review.usuario_apodo}}</strong>
                </p>
            </div>

            <div class="col-10">
            
                <p class="mt-2 d-flex">
                  <span class="me-2"><u class=" fs-5">{{review.review_nombre}}</u></span>

                  <star-rating :rating="review.review_estrellas" :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                </p>
                <p class="text-lighter">
                  {{review.review_texto}}
                </p>
            </div>
          </div>
        </div>
      
        
      <div class="pb-4 pt-3">
        <Pagination
          :totalPages="rows"
          :maxVisibleButtons="3"
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
import axios from 'axios';

export default {
  name: 'comment_section',
  components: {
    StarRating,
    Pagination
  },
    data(){
        return{
          perPage: 5,
          maxItems: 0,
          currentPage: 1,
          reviews: null,
          rows: 0,
        }
    },
    mounted(){
      this.listarReviews();
    },
    methods: {
      listarReviews(){
        let offset = 0;
        if(this.currentPage>1){
          offset = (this.currentPage-1)*this.perPage;
        }
        axios.get(`http://localhost:3000/review/producto/${this.producto_id}/${this.perPage}/${offset}`)
          .then((response)=>{
            this.reviews = response.data.resultados;
            this.maxItems = response.data.total;
            this.rows = Math.ceil((this.maxItems/this.perPage));
          });
      },
      onPageChange(page) {
        this.currentPage = page
        this.listarReviews();
      },

    },
    props:{
      producto_id: Number
    }
}
</script>