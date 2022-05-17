<style scoped>
</style>
<template>
  <div>

    <navbar />
    
        <div class="container">
            <div class="card mb-5 mt-4 bg-dark d-flex flex-row">
                <div class="card-body">
                    <div class="mt-3 ms-4">
                        <div class="row">
                            <div class=" d-flex flex-column col-2 align-items-center">
                                <img src="https://static.scientificamerican.com/espanol/cache/file/AF74ADFC-11A1-4BE8-8C6D050938F3CD40_source.jpg"
                                    class="mb-2 rounded-circle"
                                    width="130" height="130">
                            </div>

                            <div class="col-7 mt-2">
                                <h2 class="fw-bold">{{usuario.usuario_apodo}}</h2>

                                <button type="button" class="btn btn-secondary bg-secondary rounded btn-sm">
                                    EDITAR PERFIL
                                </button>
                            </div>

                            <div class="col-3 mt-4">
                                <span class="h5">{{this.reviews.length}} Reviews</span>
                                <span class="h5 ms-3">{{this.amigos.length}} Amigos</span>
                            </div>
                        </div>

                        <div class="ms-4 mt-5 me-5">
                            
                            <div class="d-flex justify-content-between">
                              <h5>Reviews recientes</h5>
                              <span>Mostrar más</span> 
                            </div>
                            
                            <div class="border-top" v-for="review in reviews" :key="review">
                                <div class="mt-3 mb-4 d-flex flex-row">
                                    <div class="col-2">
                                        <div class="mb-2">
                                        <img :src="`usuarios/${review.usuario_fotoPerfil}`" height="160" width="120">
                                        </div>
                                        <p class="mb-1 bg-success col-6 text-center rounded">
                                        <strong>{{review.usuario_apodo}}</strong>
                                        </p>
                                    </div>

                                    <div class="col-10">
                                    
                                        <span class="">
                                          <strong class="h4 fw-bold">{{review.review_nombre}}</strong>
                                        </span>
                                        
                                        <div class="d-flex">
                                          <star-rating :rating="review.review_estrellas" :show-rating="false" :star-size="15" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                                          <span class="mt-1 ms-2 small text-muted">{{date(review.review_fecha)}}</span>
                                        </div>

                                        <p class="mt-3 text-lighter" v-if="review.review_texto!='null'">
                                        {{review.review_texto}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <foter /> 
  </div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import foter from '@/components/footer.vue';
import axios from 'axios';
import StarRating from 'vue-star-rating';
import moment from 'moment';


export default {
  name: 'profile_page',
  data(){
    return{
      usuario:{},
      reviews:[],
      amigos:[],
      prefijo: 'http://',
      id_usuario:null
    }
  },
  components: {
    foter,
    navbar,
    StarRating
  },
  mounted(){
    this.crearPagina();
    this.getUsuario();
    this.getReviewsUsuario();
    this.getAmigos();
  },
  methods:{
    getUsuario(){
      axios.get(`http://localhost:3000/usuario/5`)
        .then((response)=>{
          this.usuario=response.data;
      })
    },
    getReviewsUsuario(){
      axios.get(`http://localhost:3000/review/usuario/5`)
        .then((response)=>{
          console.log(response.data);
          this.reviews=response.data;
      })
    },
    getAmigos(){
      axios.get(`http://localhost:3000/usuario/5/amigos`)
        .then((response)=>{
          this.amigos=response.data;
      })
    },
    crearPagina(){
      this.id_usuario= this.$route.query.id_usuario;
    },
    date(fecha){
      let res=fecha;
      res= moment(res).format('DD-MM-YYYY');
      return res;
    }
  }
    
}
 </script>