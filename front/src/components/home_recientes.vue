<style scoped>
.row>*{
   width: auto !important;
}
.caca{
  text-align: left;
}
.card-title{
  overflow: hidden !important;

}

.routerstyle{
  text-decoration: none;
  padding: 0;
  margin: 0;
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
  height:270px;
}
.bg-image{
  width:200px;
  height:270px;
}
.cards{
  max-width: 255px !important;
  transition: all 0.2s ease;
  cursor: pointer;
}
.cards:hover{

  box-shadow: 9px 10px 10px 5px #151515;
  transform: scale(1.1);
}
.card-body{
  padding: 0 1rem 1rem 1rem !important;
}
.nombre{
  text-align: center;
}

.bg-dark{
  background-color: #445566 !important;
}

.fuente{
  font-family: fuenteGorda !important;
}

@media (max-width: 576px){
  h4{
    text-align: center !important;
  }
  .card{
    width: 140px !important;
  }
  .nombre{
    display: none;
  }
  .card-body{
  padding: 1rem 1rem !important;
  }
  .card-img-top{
    width:130px !important;
    height:180px !important;
    
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
@media (max-width: 1100px){

}
hr{
  background-color: #22e83a; height: 1.5px; border: 0;
}
</style>
<template>
    <div class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
      <div class="container pt-3">
        <h4 class="caca ms-2 fuente">SALIDAS RECIENTES</h4>
        <hr>  
        <div class="row pt-2">
          <div class="col-md-4 col-lg-2 col-6 margenabajo" v-for="producto in productos" :key="producto">
            <div class="cards bg-dark">
              <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                <img v-bind:src="`productos/${producto.producto_imagen}`" class="card-img-top" alt=""/>
              </router-link>
              <div class="card bg-dark">
                <div class="nombre mt-3">
                  <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                    <div class="card-title"><span>{{producto.producto_nombre}}</span></div>
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
    name: 'first_menu',
    components: {
    StarRating,
    },
    props: {
      msg: String
    },
    data(){
      return{
        productos: null
      }
    },
    mounted () {
      axios.get('http://localhost:3000/producto/listar_recientes/5')
        .then((response) => {
            this.productos = response.data; 
        });
    },
  }
    
  
</script>