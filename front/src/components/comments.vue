<style scoped>
  
  /* .comentario{
    background-color: rgb(33, 27, 27);
    border: 1px solid rgb(84, 84, 84);
    padding: 10px;
    border-radius: 4px;
    box-shadow: 2px 2px rgb(96, 96, 96);
  } */
hr{
  border: 3px solid green ;
}

.titulo{
  font-size: 20px !important;
  font-family: fuenteGorda !important;
}

.fuente{
  font-family: fuenteGorda !important;
}
.modal{
  display: block !important;
  /* margin: 5rem ; */
  background: rgba(125, 125, 125, .8);
}
.negro{
  color: black !important;
}
.nombre{
  text-decoration: none;
}
.nombre:hover strong{
  color: #237A58 !important;
}
</style>
<template>
    <div class="modal"  tabindex="-1" v-if="create">
        <div  class="modal-dialog modal-dialog-centered">
          <div class="modal-content p-4 bg-dark">
            <div class="my-4 text-center">
              <h4>¿Estás seguro de eliminar la review?</h4>
            </div>
            <div class="d-flex justify-content-around">
              <div>
                <button class="btn mx-1  btn-success " @click="eliminar()">Cancelar</button>
              </div>
              <div>
                 <button class="btn mx-1  btn-danger " @click="enviar()">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    <section class="container mb-3 bg-dark">
      <div v-show="sesion" class="border-bottom">
        <div class="pt-3 mt-2">
          <h4 class="p-2 text-center fuente" style="font-size: 120%">Mi review/Reviews de amigos</h4>
        </div>

        <div class="m-4 border-top" v-for="revamigo in revamigos" :key="revamigo">
          <div class="mt-3 mb-2 d-flex flex-row comentario">
            <div class="col-2 d-flex flex-column justify-content-center">
                <div class="mx-auto">
                  <router-link class="nombre" :to="{path:'/profile',query:{id_usuario:revamigo.id_usuario}}">
                    <img :src="`usuarios/${revamigo.usuario_fotoPerfil}`" class="rounded-circle" height="50" width="50">
                  </router-link>
                </div>
                <p class="mx-auto">
                  <router-link class="nombre" :to="{path:'/profile',query:{id_usuario:revamigo.id_usuario}}">
                    <strong>{{revamigo.usuario_apodo}}</strong>
                  </router-link>
                </p>
            </div>

            <div class="col-9">
            
                <div class=" d-flex flex-column">
                  <div class="d-flex">
                    <div>
                      <span class="me-2 titulo">{{revamigo.review_nombre}}</span>
                    </div>
                    <div>
                      <star-rating :rating="revamigo.review_estrellas" :show-rating="false" :star-size="13" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                    </div>
                    <div class="ms-2">
                      <span class="text-muted fs-6">{{revamigo.review_fecha}}</span>
                    </div>
                  </div>
                </div>
                <div class="text-lighter" v-if="revamigo.review_texto!='null'">
                  {{revamigo.review_texto}}
                </div>
            </div>
            <div v-if="this.usuario.id_usuario==revamigo.id_usuario" class="col-1">
              <button class="btn btn-success" @click="eliminar(revamigo.id_review)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>  
              </button>
            </div>
          </div>
        </div>
      </div>

        <div class="mt-5 mb-3">
          <h4 class="p-2 pt-4 text-center fuente" style="font-size: 120%">Reviews: {{this.maxItems}}</h4>
        </div>

        <div class="mx-3 border-top" v-for="review in reviews" :key="review">
          <div class="mt-3 mb-2 d-flex flex-row comentario">
            <div class="col-2 d-flex flex-column justify-content-center">
              <div class="mx-auto">
                  <router-link class="nombre" :to="{path:'/profile',query:{id_usuario:review.id_usuario}}">
                    <img :src="`usuarios/${review.usuario_fotoPerfil}`" class="rounded-circle" height="50" width="50">
                  </router-link>
                </div>
                <p class="mx-auto">
                  <router-link class="nombre" :to="{path:'/profile',query:{id_usuario:review.id_usuario}}">
                    <strong>{{review.usuario_apodo}}</strong>
                  </router-link>
                </p>
            </div>

            <div class="col-9">
            
                <div class=" d-flex flex-column">
                  <div class="d-flex">
                    <div>
                      <span class="me-2 titulo">{{review.review_nombre}}</span>
                    </div>
                    <div>
                      <star-rating :rating="review.review_estrellas" :show-rating="false" :star-size="13" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                    </div>
                    <div class="ms-2">
                      <span class="text-muted fs-6">{{review.review_fecha}}</span>
                    </div>
                  </div>
                </div>
                <div class="text-lighter mt-2" v-if="review.review_texto!='null'">
                  {{review.review_texto}}
                </div>
            </div>
            <div v-if="this.usuario != null">
              <div v-if="this.usuario.id_usuario==review.id_usuario" class="col-1">
                <button class="btn btn-success" @click="eliminar(review.id_review)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>  
                </button>
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
          idamigos: null,
          cajon: null,
          revamigos: [],
          create: false,
          objeto: null
        }
    },
    mounted(){
      if(sessionStorage.info == null){
        let v = this;
        setTimeout(function () {    
          v.comprobar()               
        },500);
      }
      else{
        this.sesion = true;
        this.usuario = JSON.parse(sessionStorage.info);
      }
      if(this.sesion){
      axios.get(`http://localhost:3000/usuario/${this.usuario.id_usuario}/amigos_id`)
      .then((response)=>{
        this.idamigos = response.data

        
      });
      axios.get(`http://localhost:3000/review/producto/${this.producto_id}`)
      .then((response)=>{
        this.cajon = response.data.resultados
        for (const caja in this.cajon) {
              this.cajon[caja].review_fecha = moment(this.cajon[caja].review_fecha).format('DD-MM-YYYY');
            } 
        this.reviewsamigos()
      });
      }
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
            for (const review in this.reviews) {
              this.reviews[review].review_fecha = moment(this.reviews[review].review_fecha).format('DD-MM-YYYY');
              }    
        });
      },
      onPageChange(page) {
        this.currentPage = page
        this.listarReviews();
      },
      comprobar(){
      console.log('lo intento');
      if(sessionStorage.info == null){
      console.log('');
      }
      else{
        this.sesion = true;
        this.usuario = JSON.parse(sessionStorage.info);
        if(this.usuario.usuario_administrador == 0){
          this.admin = true;
        }
      }
    },
    reviewsamigos(){
      for (const caja in this.cajon) {
        for (const id in this.idamigos) {

          if(this.idamigos[id] == this.cajon[caja].id_usuario){
            this.revamigos.push(this.cajon[caja])     
          }
        }
      }
      console.log('array completa' + this.revamigos);
    },
    eliminar(e){
      if(this.create){
        this.create = false;
      }
      else{
        this.create = true;
      }
      for (let review in this.reviews) {
        if(this.reviews[review].id_review == e){
          this.objeto = this.reviews[review]
        }
      }
    },
    enviar(){
      let json = {
              "review_estrellas": parseInt(this.objeto.review_estrellas),
              "review_total":  parseInt(this.maxItems),
              "id_producto":  parseInt(this.objeto.id_producto),
              "id_review":  parseInt(this.objeto.id_review),
            };
            console.log(json);
            axios.delete(`http://localhost:3000/review/eliminar`, {data: json})
            .then((response)=>{
              console.log(response);
              this.$router.go();
            })
            .catch((error)=>{
              console.log(error);
            });
    }
    

    },
    props:{
      producto_id: Number
    }
}
</script>