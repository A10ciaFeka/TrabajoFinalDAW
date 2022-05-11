<style scoped>
.card-img-top{
    width: 350px;
    height: 450px;
}
@media (max-width: 991px){
    .card-img-top{
        width:250px !important;
        height:350px !important;
    }
}
@media (max-width: 576px){
    .card-img-top{
        width:140px !important;
        height:185px !important;
    }
}
.modal{

  display: block !important;
  /* margin: 5rem ; */
  background: rgba(125, 125, 125, .8) 
  
}
p {
  text-align: left;
}

#form label {
  font-size: 20px;
}

.clasificacion input[type="radio"] {
  display: none;
}

.clasificacion label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

.clasificacion label:hover,
.clasificacion label:hover ~ label {
  color: orange;
}

.clasificacion input[type="radio"]:checked ~ label {
  color: orange;
}


</style>
<template>
    <!-- nombre sinopsis fsalida disp pu plat img etiq -->
    <div>
        <div class="modal"  tabindex="-1" v-if="escribir">
        <div  class="modal-dialog">
          <div class="modal-content bg-dark p-5">
            <div class="titulo">
              <h2 class="negro text-center" >Review</h2>
            </div>
            <div class="cuerpo">
              <form @submit="enviar">
                <div class="d-flex pt-2">
                    <span>Puntuación: </span>
                    <p class="clasificacion mx-2">
                        <input id="radio1" type="radio" name="estrellas" value="5"  v-model="puntuacion" required><!--
                        --><label for="radio1">★</label><!--
                        --><input id="radio2" type="radio" name="estrellas" v-model="puntuacion" value="4" required><!--
                        --><label for="radio2">★</label><!--
                        --><input id="radio3" type="radio" name="estrellas" v-model="puntuacion" value="3" required><!--
                        --><label for="radio3">★</label><!--
                        --><input id="radio4" type="radio" name="estrellas" v-model="puntuacion" value="2" required><!--
                        --><label for="radio4">★</label><!--
                        --><input id="radio5" type="radio" name="estrellas" v-model="puntuacion" value="1" required><!--
                        --><label for="radio5">★</label>
                    </p>
                    {{puntuacion}}
                </div>
                
                <div class="form-outline form-white  mt-2">
                    <label class="form-label" for="inputReview">Título</label>
                    <input type="text" name="inputReview" v-model="titulo" class="form-control" required>
                </div>
                <div class="form-outline form-white  mt-4">
                    <label class="form-label" for="textAreaExample">Cuerpo</label>
                    <textarea class="form-control" v-model="texto" name="texto" rows="4"></textarea>
                    
                </div>
                <div class="d-flex justify-content-between mt-5">
                    <div>
                        <button class="btn mx-1  btn-danger " @click="crear()">Cancelar</button>
                    </div>
                    <div>
                        <input type="submit" class="btn mx-1  btn-success" value="Guardar">
                    </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
            <div class="card mb-5 mt-4 bg-dark d-flex flex-row">
              <div class="card-body">
                <img :src="`productos/${item.producto_imagen}`" class="mt-2" height="450" width="300"/>
              </div>

              <div class="p-2 ms-2 ms-0">
                  <div class="d-flex">

                    <h2 class="card-title mt-4 me-3">{{item.producto_nombre}}</h2> 
                    <star-rating :rating=item.producto_puntuacionMedia :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mt-2"></star-rating>
                  </div>
                  <div class="small text-muted mb-3">Fecha de lanzamiento: {{this.fecha}}</div>
                  <p>Platatormas: {{item.producto_plataforma}}</p>

                  <div class="d-flex">
                      <span class="me-2">Etiqueta(s):</span>
                      <span class="bg-secondary me-1 rounded-pill col-2 text-center text-nowrap" v-for="tag in tags" :key="tag">{{tag}}</span>
                  </div>
                  <div class="border-bottom">
                      <h5 class="mt-4">Sinopsis</h5>
                      <p class="card-text mb-3">{{item.producto_sinopsis}}</p>
                  </div>
                  <input v-if="item.producto_disponible==1" type="button" class="btn btn-light mt-3" value="Escribir review" @click="crear()">
                  <input v-else type="button" class="btn btn-light mt-3" value="Escribir review" disabled>
              </div>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>

import axios from 'axios';
import moment from 'moment';
import StarRating from 'vue-star-rating';

 
export default {
  name: 'game_info',
  components: {
    StarRating
  },
    data(){
        return{
            item:{},
            prefijo: 'http://',
            url:null,
            tags:{},
            fecha: null,
            escribir: false,
            puntuacion: '',
            titulo: null,
            texto: null,
            maxItems: null,
            usuario: null,
            sesion: false
            
        }
    },
    mounted(){
        this.getProducto();
        axios.get(`http://localhost:3000/review/producto/${this.producto_id}/0/0`)
          .then((response)=>{
            this.maxItems = response.data.total;
            console.log(this.maxItems);
          });

        if(sessionStorage.info == null){
          let v = this
          setTimeout(function () {    
            console.log('tu abuela');
            v.comprobar();                       
          },500)
        }
        else{
          this.sesion = true
          this.usuario = JSON.parse(sessionStorage.info)
        }

    },
    methods: {
        getProducto(){
        axios.get(`http://localhost:3000/producto/${this.producto_id}`)
            .then((response)=>{
                this.item=response.data;
                this.separar();
                this.date();
            })
        },
        separar(){
            this.tags = this.item.producto_etiqueta.split(',');
        },
        date(){
           this.fecha = moment(this.item.producto_fechaSalida).format('DD-MM-YYYY');
        },
        montarUrl(imagen){
            console.log(imagen);
            
        },
        onPageChange(page) {
            this.currentPage = page;
            this.listarReviews();
        },
        crear(){
          if(this.escribir){
            this.escribir = false;
            console.log(this.escribir);
          }
          else{
            this.escribir = true;
            console.log(this.escribir);
          }
      },
      enviar(e){
        e.preventDefault();
        let json = {
          'review_estrellas': this.puntuacion,
          'review_nombre': this.titulo,
          'review_texto,': this.texto,
          'review_total' : this.maxItems,
          'id_producto' : this.item.id_producto,
          'id_usuario' : this.usuario.id_usuario
        }
        axios.post(`http://localhost:3000/review/crear`, json)
        .then((response)=>{
          console.log(response);
          this.$router.go();
        })
        .catch((error)=>{
          console.log(error);
        });
      },
      comprobar(){
      console.log('lo intento');
      if(sessionStorage.info == null){
      console.log('fallo');
      }
      else{
        this.sesion = true
        this.usuario = JSON.parse(sessionStorage.info)
        console.log('Lo logre '+ this.usuario);
      }
    }
    
    },
    props:{
      producto_id: Number
    }
}
</script>