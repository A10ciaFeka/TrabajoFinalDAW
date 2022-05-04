<style scoped>
.row>*{
   width: auto !important;
}
.caca{
  text-align: left;
}
.card-title{
  overflow: hidden !important;
  max-width: 150px !important;
}
.row {
  margin-top: 1em;
    --bs-gutter-x: 0rem;
    justify-content: space-around;
}
.margenabajo{
  margin-bottom: 2em;
}
.card-img-top{
  width:200px;
  height:255px;
}
.bg-image{
  width:200px;
  height:255px;
}
.card{
  max-width: 255px !important;
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
span{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px !important;
}
star-rating{
  star-size: 0px
}
}
span{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px !important;
}
</style>
<template>
    <div class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
      <div class="container pt-3">
        <h4 class="caca ms-2">SALIDAS RECIENTES</h4>
        <div class="row">
          <div class="col-md-4 col-lg-2 col-6 margenabajo" v-for="producto in productos" :key="producto">
            <div class="card bg-dark">
              <router-link :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
              <img v-bind:src="prefijo + producto.producto_imagen" class="card-img-top" alt="" width="200" height="255"/>
              </router-link>
              <div class="card-body">
                <router-link :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                  <div class="card-title"><span>{{producto.producto_nombre}}</span></div>
                </router-link>
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
    name: 'first_menu',
    components: {
    StarRating,
    },
    props: {
      msg: String
    },
    data(){
      return{
        prefijo: 'http://',
        productos: null
      }
    },
    mounted () {
      axios.get('http://localhost:3000/producto/listar/6')
        .then((response) => (this.productos = response.data.resultados));

        console.log(      axios.get('http://localhost:3000/producto/listar/6')
);
    }
  }
    
  
</script>