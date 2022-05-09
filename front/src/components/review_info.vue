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
</style>
<template>
    <!-- nombre sinopsis fsalida disp pu plat img etiq -->
    <div class="container">
        <div class="row align-items-center">
            <div class="card mb-5 mt-4 bg-dark d-flex flex-row">
                <div class="">

                    <img :src="`productos/${item.producto_imagen}`" class="card-img-top" alt="" width="450" height="555"/>

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
                    <input v-else type="button" disabled class="btn btn-light mt-3" value="Escribir review">
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
        montarUrl(imagen){
            console.log(imagen);
            
        },
        onPageChange(page) {
            this.currentPage = page;
            this.listarProducto();
        },
    
    },
    props:{
        producto_id: Number
    }
}
</script>