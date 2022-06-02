<style>
.fondo2{
  background-image: url('../../public/productos/fondoProduct3.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<template>
  <div>

    <navbar />
    <div class="container rows">
      <review_info :producto_id="this.crearPagina()" />
      <comments :producto_id="this.crearPagina()" />
    </div>
    <futer /> 
  </div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import futer from '@/components/footer.vue';
import review_info from '@/components/review_info.vue'
import comments from '@/components/comments.vue'

export default {
  name: 'review_page',
  components: {

    review_info,
    comments,
    futer,
    navbar
  },
  mounted(){
    this.crearPagina();
  },
  methods:{
    crearPagina(){
      return this.$route.query.id_producto;
    }
  },
  beforeCreate () {
    document.querySelector('body').classList.add('fondo2');
  }
    
}
 </script>