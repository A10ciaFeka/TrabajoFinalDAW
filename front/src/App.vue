<style>

@font-face {
  font-family: fuenteCuerpo;
  src: url(assets/font/Futura\ Light\ Condensed\ Regular.otf);
}
@font-face {
  font-family: fuenteGorda;
  src: url(assets/font/GraphikBold.otf);
}
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
  font-family: fuenteCuerpo !important; 
  font-size: 20px;
  font-weight: lighter;
  color: #fff;
}
.fondo{
  background-color: #14181C;
}
</style>
<template>
  

  <router-view /><!-- Donde se visualizan las vistas -->
  
</template>

<script>
  // import {USER} from './store'
  // import { useStore } from 'vuex'
  // import { defineComponent } from 'vue'
  

  // export const defineComponent({
  //   setup() {
  //     const { message } = useComposition();

  //     return { // make it available in <template>
  //       message
  //     }
  //   },
  // })
export default {
  name: 'App',
    beforeCreate () {
    document.querySelector('body').classList.add('fondo');
  },
  setup() {
 

  },
  components: {

  },
  methods:{
    
  }
}
</script>