<style scoped>
.centrar{
    display: flex;
    vertical-align: middle;

}
.fuente{
  font-family: fuenteGorda !important;
}
@media (max-width: 1400px){
.centrar {
   flex-direction: column; 
}
.centrar div h5{
    margin: 0 !important;
}
}
.alinear{
    display: flex;
    justify-content: center;
}
.dr{
    width: 70%;
}
.iz{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;  
}
.bg-dark{
  background-color: #445566 !important;
}
span{
    width: 200px !important;

    padding: 2px 5px;
    /* white-space: nowrap; */
    overflow: hidden;
}
p{
    margin-bottom: 0;
}
.overflow-ellipsis {
  text-overflow: ellipsis;
}
hr{
    /* color: #22e83a; */
    background-color: #22e83a; height: 1.5px; border: 0;
}
.card{
    cursor: pointer;
}
.routerstyle{
  text-decoration: none;
  padding: 0;
  margin: 0;
}
</style>
<template>
    <div class="container bcontent pt-3">
    <h4 class="fuente">PROXIMOS LANZAMIENTOS</h4>
    <hr />
    <div class="card mb-3 bg-dark" v-for="proximo in proximos" :key="proximo" >
        <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:proximo.id_producto}}">
        <div class="alinear ">
            <div class="iz">
                <img class="m-3" :src="`productos/${proximo.producto_imagen}`" width="80" height="120">
            </div>
            <div class="dr">
                <div class="card-body">
                    <div class="centrar">
                        <div><h6 class="card-title fuente">{{proximo.producto_nombre}}</h6></div>
                    </div>
                    <p class="">Fecha de lanzamiento: {{proximo.producto_fechaSalida}} </p>
                    <p class=" overflow-hidden text-nowrap">Plataforma: {{proximo.producto_plataforma}}</p>

                </div>
            </div>
        </div>
        </router-link>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
export default {
    name: 'news_menu',
    components: {
    },
    data(){
        return{
            productos: null,
            proximos: []
        }
    },
    mounted () {
      axios.get('http://localhost:3000/producto/listar')
        .then((response) => {
            this.productos = response.data.resultados;
            this.disponibles()
        });
        

    },
    methods:{
        disponibles(){
            for (const producto in this.productos) {
                if (this.productos[producto].producto_disponible == 0) {
                    this.productos[producto].producto_fechaSalida = moment(this.productos[producto].producto_fechaSalida).format('DD-MM-YYYY');
                    this.proximos.push(this.productos[producto])
                }
            }
        }
    }
}
</script>