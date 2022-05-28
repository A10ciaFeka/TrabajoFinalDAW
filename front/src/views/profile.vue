<style scoped>
.fuente{
    font-family: fuenteGorda !important;
}
.fondo{
  background-color: #14181C;
}
.bg-dark{
    background-color: #21282F !important;
}
.card-img-top{
    width:185px;
    height:255px;
}
.bg-image{
    width:185px;
    height:255px;
}
.card{
    max-width: 230px !important;
}
.comment{
    width:100px;
    height:150px;
}

@media (max-width: 576px){
    .card-img-top{
        width:140px !important;
        height:185px !important;
    }
    .bg-image{
        width:140px !important;
        height:185px !important;
    }
    .card-title{
        overflow: hidden !important;
        max-width: 100px !important;
    }
}
.borde{
    border-right: 1px solid green;
    padding-right: 1em;
}

.imgBorder{
  border: 0.1px solid #6E7C7C;
}
.bordeabajo{
    border-bottom: 1px solid gray;
}
.nombre{
    text-decoration: none !important;
}
.hoverClass:hover .nombre{
    color: #198754 !important;
}
.perfil{
  border: 2px solid #6E7C7C;
  box-shadow: 5px 6px 6px 1px #151515;
}
.perfil2{
  border: 2px solid #6E7C7C;
}
.perfil2:hover{
  box-shadow: 5px 6px 6px 1px #151515;
}

.products:hover{
  box-shadow: 9px 10px 10px 5px #151515;
}
.cards{
  max-width: 255px !important;
  transition: all 0.2s ease;
  cursor: pointer;
}
.cards:hover{
    z-index: 3;
  box-shadow: 9px 10px 10px 5px #151515;
  transform: scale(1.1);
}

</style>
<template>
  <div>
    <navbar />
    <div class="container mt-5 bg-dark">
      <div class="pt-5 ps-3 d-flex justify-content-between">
        <div class="d-flex ">
            <div>
                <img v-bind:src="'usuarios/' + imagen" class="rounded-circle perfil" height="150" width="150" background-size="100% auto" background-position="50%" alt="">
            </div>
            <div>
                <h2 class="mt-4 ms-3 fuente">{{usuario.usuario_apodo}}</h2>
            </div>
        </div>
        <div class="d-flex mt-4" style="height: 70px;">
            <div class="d-flex  flex-column text-center borde">
                <div>
                    <Span>4</Span>
                </div>
                <div>
                    <span>REVIEWS</span>
                </div>
            </div>
            <div class="d-flex ms-3 flex-column text-center borde">
                <div>
                    <Span>4</Span>
                </div>
                <div>
                    <span>SEGUIDOS</span>
                </div>
            </div>
            <div class="d-flex ms-3 me-5 flex-column text-center">
                <div>
                    <Span>4</Span>
                </div>
                <div>
                    <span>SEGUIDORES</span>
                </div>
            </div>     
        </div>
      </div>

        <div class="d-flex">
            <div class="col-9">
                <!-- Productos -->
                <div class="d-flex mt-5">

                    <div class="overflow-hiden">

                        <div class="mt-3">

                            <h4 class="fuente ms-4">JUEGOS VALORADOS</h4>
                            <hr class="bg-success mx-2 me-5">
                        </div>
                        <div class="container pt-1">
                            <div class="row">

                                <div class="col-1 ms-3" v-for="review in reviews" :key="review">
                                    <div class="card bg-dark cards box bar products">
                                        <router-link :to="{path:'/producto',query:{id_producto:review.id_producto}}">
                                            <img v-bind:src="`productos/${review.producto_imagen}`" class="card-img-top imgBorder" alt="" width="185" height="255"/>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- reviews -->

                <div class="mt-5 w-100">
                    <h4 class="fuente ms-4">REVIEWS RECIENTES</h4>
                    <hr class="bg-success mx-2 me-5">
                </div>
                <div class="d-flex w-100 mb-3">

                    <div class="pt-3 w-100">
                        <div class="d-flex w-100 flex-column">
                            <div class="w-100 ms-4 my-3 border-bottom pb-4 hoverClass"  v-for="review in reviews" :key="review">
                                <div class="d-flex">
                                    <div class="w-30">
                                        <router-link :to="{path:'/producto',query:{id_producto:review.id_producto}}">
                                            <img v-bind:src="`productos/${review.producto_imagen}`" class="comment imgBorder" alt="" width="185" height="255"/>
                                        </router-link>
                                    </div>
                                    <div class="d-flex w-70 flex-column ms-4">
                                        <div>
                                            <router-link class="nombre" :to="{path:'/producto',query:{id_producto:review.id_producto}}">
                                                <h5 class="nombre fuente">{{review.producto_nombre}}</h5>
                                            </router-link>
                                        </div>
                                        <div class="d-flex">
                                            <div>
                                                <h5 class="me-2">{{review.review_nombre}}</h5>
                                            </div>
                                            <div>
                                                <star-rating :rating="review.review_estrellas" :show-rating="false" :star-size="13" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                                            </div>
                                            <div class="mx-2">
                                                <span class="text-muted">{{review.review_fecha}}</span>
                                            </div>
                                        </div>
                        
                                        <div v-if="review.review_texto!='null'">
                                            <span>{{review.review_texto}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
            <div class="col-3 mt-3">
                <div class="text center mt-5 w-100">
                    <h4 class="fuente text-center">SEGUIDOS</h4>
                    <hr class="bg-success mx-4">
                </div>
                <div class="container pt-3">
                    <div class="row">
                        <div v-if="idamigos.length!==0">

                            <div class="col-4 ms-2 text-center mb-3 me-2"  v-for="idamigo in idamigos" :key="idamigo">

                                <div class="mx-5 d-flex w-100 flex-column text-center">
                                    <router-link class="nombre" :to="{path:'/usuario',query:{id_usuario:idamigo.id_usuario}}">
                                        <div>
                                            <img v-bind:src="`usuarios/${idamigo.usuario_fotoPerfil}`" class="rounded-circle perfil2" height="100" width="100" background-size="100% auto" background-position="50%" alt="">
                                        </div>
                                        <div class="text-center">
                                            <span>{{idamigo.usuario_apodo}}</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <h5 class="text-center">No sigues a ningún usuario</h5>
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
import moment from 'moment';
import StarRating from 'vue-star-rating'

export default {
  name: 'profile_page',
  props: {
    msg: String
  },
  components: {
    foter,
    navbar,
    StarRating
  },
  data() {
      return{
        usuario: [],
        imagen: null,
        productos: [],
        idamigos:[],
        reviews:[]
      }
  },
  mounted(){

    if (sessionStorage.info == null) {
      console.log('No hay usuario');
    }
    else{
      this.usuario = JSON.parse(sessionStorage.info);
      this.imagen = this.usuario.usuario_fotoPerfil
    }

    axios.get(`http://localhost:3000/usuario/${this.usuario.id_usuario}/amigos`)
        .then((response)=>{
            this.idamigos = response.data
            console.log(this.idamigos);
        }); 

    axios.get(`http://localhost:3000/review/usuario/${this.usuario.id_usuario}`)
        .then((response)=>{
            this.reviews = response.data
            for (const review in this.reviews) {
                this.reviews[review].review_fecha = moment(this.reviews[review].review_fecha).format('DD-MM-YYYY');
            }
            console.log('review del usuario: ',response.data);
        });
    
                // let json ={
                //     "id_usuario" : '7',
                //     "id_amigo" : '4',

                // };
                // axios.post('http://localhost:3000/usuario/seguir_usuario',json)
                // .then( response => {
                //     console.log(response);
                //     if(response.data.statusText == 'OK'){
                //         console.log("Entra");

                //     }
                //     else{
                //         console.log("Falla")
                //     }
                // })
            
  },
  methods:{
    //   obtenerproduct(){
    //       for (const review in this.reviews) {
    //           for (const producto in this.productos) {
    //               if(this.reviews[review].id_producto == this.productos ){

    //         }
    //           }
            
    //       }
    //   }
  },
  beforeCreate () {
    document.querySelector('body').classList.remove('fondo2');
  }
    
}
 </script>