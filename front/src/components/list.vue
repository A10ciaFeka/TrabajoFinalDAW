<style>
.row>*{
   width: auto !important;
}
.card-img-top{
  width:200px;
  height:255px;
}
</style>

<template>
  <div class="overflow-auto text-center">
    <div class="container pt-3">
      
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
      
      <Pagination
        :totalPages="rows"
        :maxVisibleButtons="3"
        :perPage="perPage"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
      
    </div>

  </div>  
  
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios';
import Pagination from '@/components/pagination.vue'
export default {
  name:"seccion_general",
  components: {
    StarRating,
    Pagination
  },
  data(){
    return{
      perPage: 8,
      maxItems: 0,
      currentPage: 1,
      productos: null,
      prefijo: 'http://',
      rows: 0
    }
  },
  mounted() {
    this.listarProducto();
  },
  methods: {
    listarProducto(){
      let offset = 0;  
      if(this.currentPage>1){
        offset = (this.currentPage-1)*this.perPage;
      }
      axios.get(`http://localhost:3000/producto/listar/${this.perPage}/${offset}`)
        .then((response)=>{
          this.productos = response.data.resultados;
          this.maxItems = response.data.total;
          this.rows = Math.ceil((this.maxItems/this.perPage));
          console.log("Rows: ",this.rows);
        })

    },
    onPageChange(page) {
      this.currentPage = page;
      this.listarProducto();
    }
  }
}
</script>