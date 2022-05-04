<style scoped>

    .card-img-top{
        width: 450px;
        height: 550px;
    }
</style>
<template>
    <!-- nombre sinopsis fsalida disp pu plat img etiq -->
    <div class="container">
        <div class="row align-items-center">
            <div class="card mb-5 mt-4 bg-dark d-flex flex-row">
                <div class="">
                    <img class="card-img-top m-3" v-bind:src="prefijo + url" alt="..." width="450" height="550"/>
                </div>
                <div class="card-body ">
                    <h2 class="card-title mt-4">{{item.producto_nombre}}</h2>
                    <div class="small text-muted mb-3">Fecha salida: {{item.producto_fechaSalida}}</div>
                    <p>Platatormas: {{item.producto_plataforma}}</p>
                    <p>Disponible: {{item.producto_disponible == 1 ? 'Si' : 'No'}}</p>

                    <p class="mb-0">Etiqueta(s):</p>
                    <div class="row">
                        <span class="bg-secondary me-4 mt-2 rounded-pill col-2 text-center" v-for="tag in this.item.producto_etiqueta" :key="tag">{{tag}}</span>
                    </div>
                    
                    <h5 class="mt-4">Sinopsis</h5>
                    <p class="card-text">{{item.producto_sinopsis}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'game_info',
  components: {

  },
    data(){
        return{
            item:{},
            prefijo: 'http://',
            url:null
        }
    },
    mounted(){
        this.getProducto()
        this.getImage()
    },
    methods: {
        getProducto(){
        axios.get(`http://localhost:3000/producto/${this.producto_id}`)
            .then((response)=>{
                
                console.log(response.data[0]);
            this.item=response.data[0];
            })
        },
        getImage(){
        axios.get(`http://localhost:3000/producto/${this.producto_id}/imagen`)
            .then((response)=>{
                this.url=response.data;
            })
        },
        onPageChange(page) {
        this.currentPage = page;
        this.listarProducto();
        }
    },
    props:{
        producto_id: Number
    }
}
</script>