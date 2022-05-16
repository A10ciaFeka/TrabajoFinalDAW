<style scoped>
  
  /* .comentario{
    background-color: rgb(33, 27, 27);
    border: 1px solid rgb(84, 84, 84);
    padding: 10px;
    border-radius: 4px;
    box-shadow: 2px 2px rgb(96, 96, 96);
  } */

</style>
<template>
    
    <section class="container mb-3 bg-dark">
        <div class="mt-2">
          <h4 class="p-2 text-center">Reviews: {{this.maxItems}}</h4>
        </div>


        <div class="m-4 border-top" v-for="review in reviews" :key="review">
          <div class="mt-3 mb-4 d-flex flex-row comentario">
            <div class="col-2">
                <div class="mb-2 ms-3">
                  <img :src="`usuarios/${review.usuario_fotoPerfil}`" class="rounded-circle" height="50" width="50">
                </div>
                <p class="mb-1 ms-2 col-6 text-center">
                  <strong>{{review.usuario_apodo}}</strong>
                </p>
            </div>

            <div class="col-10">
            
                <div class=" d-flex flex-column">
                  <div>
                    <span class="me-2"><u class=" fs-5">{{review.review_nombre}}</u></span>
                  </div>
                  <div class="d-flex">
                    <div>
                      <star-rating :rating="review.review_estrellas" :show-rating="false" :star-size="13" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                    </div>
                    <div class="ms-2">
                      <span class="text-muted fs-6">{{review.review_fecha}}</span>
                    </div>
                  </div>
                </div>
                <div class="text-lighter" v-if="review.review_texto!='null'">
                  {{review.review_texto}}
                </div>
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
import moment from 'moment';
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
          sesion: false,
          usuario: null,
          idamigos: null
        }
    },
    mounted(){
      this.listarReviews();
      if(sessionStorage.info == null){
        let v = this
      setTimeout(function () {    
        v.comprobar();                       
      },500)
      }
      else{
        this.sesion = true;
        this.usuario = JSON.parse(sessionStorage.info);
      }
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
            for (const review in this.reviews) {
              this.reviews[review].review_fecha = moment(this.reviews[review].review_fecha).format('DD-MM-YYYY');
              }
            
          });
          axios.get(`http://localhost:3000/usuario/${this.usuario.id_usuario}/amigos_id`)
            .then((response)=>{
              this.idamigos = response.data
              console.log(this.idamigos);
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