<style>
.row>*{
   width: auto !important;
}
.caca{
  text-align: left;
}
</style>
<template>
    <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
      <div class="container pt-3">
        <h5 class="caca">Salidas recientes</h5>
        <div class="row">
          <div class="col-lg-2 p-2" v-for="producto in productos" :key="producto">
            <div class="card bg-dark">
              <img v-bind:src="prefijo + producto.producto_imagen" class="card-img-top" alt="" width="200" height="255"/>
              <div class="card-body">
                <div class="card-title">{{producto.producto_nombre}}</div>
                <star-rating :rating=producto.producto_puntuacionMedia :show-rating="false" :star-size="20" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
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
    axios.get('http://localhost:3000/producto/listar')
      .then((response) => (this.productos = response.data))
  }
  // methods:{
  //     async obtenerimg() {
  //       try {
  //         const res = await http.get("/producto/listar");
  //         const result = {
  //         status: res.status + "-" + res.statusText,
  //         headers: res.headers,
  //         data: res.data,
  //       };
  //         this.productos = await JSON.stringify(result);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  // },


  // //   async obtenerimg(){
  // //     try {
  // //       const res = await fetch('http://localhost:3000/producto/listar')
  // //       this.productos = await res.json()
  // //       console.log(this.productos);
  // //     } catch (error) {
  // //       console.log(error);
  // //     }
  // //   }
  // // },
  // created(){
  //   this.obtenerimg()
  // }
}
  
  
</script>