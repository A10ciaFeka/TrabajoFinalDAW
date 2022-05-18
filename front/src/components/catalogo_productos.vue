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
.router-link{
  text-decoration: none;
}
.bajar{
  min-height: 950px;
  max-height: 1100px;
}
.imgBorder{
  border: 0.1px solid #6E7C7C;
  border-bottom: 0;
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
.bg-dark{
  background-color: #445566 !important;
}
</style>

<template>
  <div class="overflow-auto text-center bajar">
    <div class="container pt-3">
      
      <div class="row">

        <div class="col-md-4 col-lg-2 col-6 margenabajo" v-for="producto in productos" :key="producto">
          <div class="cards bg-dark">
            
            <router-link :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
              <img v-bind:src="`productos/${producto.producto_imagen}`" class="card-img-top imgBorder" alt="" width="200" height="255"/>
            </router-link>
            <div class="card-body">
              <router-link class="router-link" :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                <div class="card-title"><span>{{producto.producto_nombre}}</span></div>
              </router-link>  
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
      perPage: 12,
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
        })

    },
    onPageChange(page) {
      this.currentPage = page;
      this.listarProducto();
    }
  }
}
</script>