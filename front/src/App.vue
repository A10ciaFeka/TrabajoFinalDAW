<style>
.contenedor{
  display:flex;
  justify-content: space-between;
}
.izquierda{
  width: 70%;
}
.derecha{
  width: 25%;
}
*{
  color: #fff;
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
    document.querySelector('body').setAttribute('style', 'background:#14181C')
  },
  components: {
    navbar_first
  }
}
</script>