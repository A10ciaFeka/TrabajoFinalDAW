<style>
.contenedor{
  display:flex;
  justify-content: space-between;
}
.izquierda{
  width: 70%;
}
.derecha{
  width: 30%;
}
*{
  color: #fff;
}
.fondo{
  background-image: url("assets/img/fondo.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<template>
  <navbar_first/>
  
  <router-link to="/catalog">catalog</router-link><!-- Provisional para ir al catalogo -->

  <router-view /><!-- Donde se visualizan las vistas -->
  
</template>

<script>
import navbar_first from './components/navbar.vue'

export default {
  name: 'App',
    beforeCreate () {
    document.querySelector('body').classList.add('fondo');
  },
  components: {
    navbar_first
  }
}
</script>