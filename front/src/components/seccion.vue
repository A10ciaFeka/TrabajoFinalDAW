<style scoped>
.row>*{
   width: auto !important;
}
.titulo{
  text-align: left;
}
.card-img-top{
  width:200px;
  height:255px;
}
.bg-image{
  width:200px;
  height:255px;
}
@media (max-width: 576px){
.card-img-top{
  width:132px !important;
  height:185px !important;
  
}
.bg-image{
  width:132px !important;
  height:185px !important;
  
}

.routerstyle{
  text-decoration-line: none !important;
  text-decoration: none !important;
}
a{
  text-decoration: none !important;
}
}
.row {
    --bs-gutter-x: 0rem;
    justify-content: space-around;
}
.margenabajo{
  margin-bottom: 2em;
}
.cards{
  max-width: 255px !important;
  transition: all 0.2s ease;
  cursor: pointer;
}
.cards:hover{

  box-shadow: 5px 6px 6px 2px #151515;
  transform: scale(1.05);
} 
</style>

<template>
  <div class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
      <div class="container pt-3">
        <h4 class="caca ms-2">MEJOR VALORADOS</h4>
        <div class="row">
          <div class="col-md-4 col-lg-2 col-6 margenabajo" v-for="producto in productos" :key="producto">
            <div class="cards bg-dark">
              <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                <img v-bind:src="`productos/${producto.producto_imagen}`" class="card-img-top" alt=""/>
              </router-link>
              <div class="card bg-dark">
                <div class="nombre mt-3">
                  <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                  <span>{{producto.producto_nombre}}</span>
                  </router-link>
                </div>
                <div class="card-body align-self-center">
                  <star-rating :rating=producto.producto_puntuacionMedia :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import StarRating from 'vue-star-rating';
  import axios from 'axios';
export default {
  name:"seccion_general",
  components: {
  StarRating
  },
  data(){
    return{
      productos: null,
      objeto: null
    }
  },
    mounted () {
      axios.get('http://localhost:3000/producto/listar_mejores/5')
        .then((response) => this.productos = response.data);
    }
}
</script>