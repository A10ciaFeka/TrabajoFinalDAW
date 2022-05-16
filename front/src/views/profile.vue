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
                                    class="mb-2 rounded"
                                    width="130" height="130">
                            </div>
                
                            <div class="col-9">
                                <h2 class="fw-bold">{{usuario.usuario_apodo}}</h2>
                                
                                <div class="">
                                    <span class="">{{this.reviews.length}} Reviews</span>
                                    <span class="ms-3">{{this.amigos.length}} Amigos</span>
                                </div>

                                <button type="button" class="mt-2 bg-primary">
                                    Editar perfil
                                </button>
                            </div>
                        </div>

                        <div class="ms-4 mt-5">
                            
                            <h5>Mis últimas reviews</h5>
                                
                                <div class="mt-4 border-bottom" v-for="review in reviews" :key="review">
                                    <div class="mt-3 mb-4 d-flex flex-row comentario">
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
                                            <p class="text-lighter" v-if="review.review_texto!='null'">
                                            {{review.review_texto}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            <h5 class="mt-4">Mis amigos</h5>
                            <div class="row justify-content-start">
                                <div class="col-md-4 col-lg-2 col-6" v-for="amigo in amigos" :key="amigo">
                                    <div class="mt-3 mb-4">
                                        <div class="">
                                            <div class="mb-2 ms-3 w-20">
                                            <img :src="`usuarios/${amigo.usuario_fotoPerfil}`" height="50" width="50">
                                            </div>
                                            <p class="mb-1 bg-success col-6 text-center rounded">
                                            <strong>{{amigo.usuario_apodo}}</strong>
                                            </p>
                                        </div>
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
    navbar
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
    }
  }
    
}
 </script>