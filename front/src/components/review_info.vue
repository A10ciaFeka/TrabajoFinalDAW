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
          <div class="modal-content bg-dark p-4">
            <div class="titulo">
              <h2 class="negro text-center" >Review</h2>
            </div>
            <div class="cuerpo">
              <form @submit="enviar">
                <div class="d-flex">
                    <span>Puntuación: </span>
                    <p class="clasificacion mx-2">
                        <input id="radio1" type="radio" name="estrellas" value="5"><!--
                        --><label for="radio1">★</label><!--
                        --><input id="radio2" type="radio" name="estrellas" value="4"><!--
                        --><label for="radio2">★</label><!--
                        --><input id="radio3" type="radio" name="estrellas" value="3"><!--
                        --><label for="radio3">★</label><!--
                        --><input id="radio4" type="radio" name="estrellas" value="2"><!--
                        --><label for="radio4">★</label><!--
                        --><input id="radio5" type="radio" name="estrellas" value="1"><!--
                        --><label for="radio5">★</label>
                    </p>
                </div>
                <div class="form-outline form-white">
                    <label class="form-label" for="textAreaExample">Review</label>
                    <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                    
                </div>
                <div class="d-flex justify-content-between mt-3">
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
                <div class="">
                    <img class="card-img-top m-3" v-bind:src="prefijo + item.producto_imagen" alt="..." width="450" height="550"/>
                </div>
                <div class="card-body">
                    <h2 class="card-title mt-4 ">{{item.producto_nombre}}</h2>
                    <div class="small text-muted mb-3">Fecha de lanzamiento: {{this.fecha}}</div>
                    <p>Platatormas: {{item.producto_plataforma}}</p>

                    <div class="d-flex justify-content-around">
                        <span class="me-2">Etiqueta(s):</span>
                        <span class="bg-secondary me-1 rounded-pill col-2 text-center text-nowrap" v-for="tag in tags" :key="tag">{{tag}}</span>
                    </div>
                    <div class="border-bottom">
                        <h5 class="mt-4">Sinopsis</h5>
                        <p class="card-text mb-3">{{item.producto_sinopsis}}</p>
                    </div>
                    <input v-if="item.producto_disponible==1" type="button" class="btn btn-light mt-4" value="Escribir review">
                    <input v-else type="button" class="btn btn-light mt-3" value="Escribir review" @click="crear()">
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>

import axios from 'axios';
import moment from 'moment';
 
export default {
  name: 'game_info',
  components: {
    
  },
    data(){
        return{
            item:{},
            prefijo: 'http://',
            url:null,
            tags:{},
            fecha: null,
            escribir: false
        }
    },
    mounted(){
        this.getProducto();
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
           this.fecha = moment(this.item.producto_fechasalida).format('DD-MM-YYYY');
        },
        onPageChange(page) {
        this.currentPage = page;
        this.listarProducto();
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
        }
    
    },
    props:{
        producto_id: Number
    }
}
</script>