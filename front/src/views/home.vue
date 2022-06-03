<style scoped>
.margen{
  margin-bottom: 8em;
}
.contenedor{
  display:flex;
  justify-content: space-between;
  padding-top: 2 em;
}
.izquierda{
  width: 70%;
}
.derecha{
  width: 30%;
}
/* @media (max-width: 576px){
.contenedor{
  display:flex;
  justify-content: space-between;
  flex-direction: column;
} */
@media (max-width: 1100px){
.contenedor{
  display:flex;
  justify-content: space-between;
  flex-direction: column;
}

.izquierda{
  width: 100%;
}
.derecha{
  width: 100%;
}
}
.row{
  --bs-gutter-x: 0 !important;
}
.routerstyle{
  text-decoration: none;
  padding: 0;
  margin: 0;
}
.fondo{
  background-color: #14181C;
  background-image: none !important;
}
a{
  font-size: 20px !important;
  font-family: fuenteGorda !important;
}
</style>
<template>
<div>
  <navbar_first />
    <section class="pt-5  pb-5 mt-0 mb-5  d-flex row bg-dark carrusel" style="height:95vh; background-size: cover;">
      <div class="d-flex justify-content-center">
        <img :src="`productos/elden.png`" alt="" height="230">
      </div>
      <div class="container-fluid">
        <div class="row  justify-content-center align-items-end d-flex text-center h-100">
          <div class="col-12 col-md-8  h-50 mt-5 pt-5">
              <p class="lead mt-5 text-light mb-3" style="font-family: fuenteGorda !important;font-size:18px">El nuevo juego de Hidetaka Miyazaki y George R.R Martin</p>
              <p>
                <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:36}}">
                  <a href="" class="btn btn-success mt-1 shadow-lg btn-round text-light btn-lg btn-rised">Saber más</a>
                </router-link>
              </p>  
          </div>
        </div>
      </div>
    </section>
  <div class="contenedor margen">
    <div class="izquierda">
      <home_recientes/>
      <seccion />
    </div>
    <div class="derecha">
      <!-- <revAmigos/> -->
      <news_menu/>
    </div>
  </div>
  <footer_down/>
</div> 
</template>

<script>
// import revAmigos from '@/components/revAmigos.vue'
import seccion from '@/components/seccion.vue'
import home_recientes from '@/components/home_recientes.vue'
import navbar_first from '@/components/navbar.vue'
import news_menu from '@/components/proxLanzamientos.vue'
import footer_down from '@/components/footer.vue'


export default {
  name: 'Home-logged',
  components: {
    seccion,
    home_recientes,
    // revAmigos,
    navbar_first,
    news_menu,
    footer_down
  },
  data(){
    return{
      imgIndex: 0,
      imagenesCarrusel: ['productos/eldenPortada.jpg','productos/eldenPortada2.jpg','productos/eldenPortada3.jpg'],
      intervalo: null
    }
  },
  mounted(){
    document.querySelector('.carrusel').style.backgroundImage = `linear-gradient(rgba(255,255,255,0) 70%, #14181C), url('${this.imagenesCarrusel[0]}')`;
    this.intervalo = 
      setInterval(()=>{
        this.imgIndex = (this.imgIndex+1)==this.imagenesCarrusel.length ? 0 : this.imgIndex+1;
        this.cambiarImagen(this.imgIndex);
      },12000);
      
  },
  methods:{
    
    cambiarImagen(indexActual){
      document.querySelector('.carrusel').style.backgroundImage = `linear-gradient(rgba(255,255,255,0) 70%, #14181C), url('${this.imagenesCarrusel[indexActual]}')`;
    }
  },
  beforeCreate () {
    document.querySelector('body').classList.remove('fondo2');
    document.querySelector('body').classList.remove('fondo3');
  },
  watch: {
    $route () {
      clearInterval(this.intervalo);
    }
  }
}
</script>