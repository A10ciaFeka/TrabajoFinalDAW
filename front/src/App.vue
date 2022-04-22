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
  <div class="contenedor">
    <div class="izquierda">
        <!-- <seccion/> -->
      <first_menu/>
    </div>
    <div class="derecha">
      <right_menu/>
    </div>
  </div>
  


  
  
</template>

<script>
import navbar_first from './components/navbar.vue'
import right_menu from './components/rightmenu.vue'
// import seccion from './components/seccion.vue'
import first_menu from './components/firstmenu.vue'

export default {
  name: 'App',
    beforeCreate () {
    document.querySelector('body').classList.add('fondo');
  },
  components: {
    navbar_first,
    // seccion,
    first_menu,
    right_menu
  }
}
</script>

