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
</style>
<template>
<div>
  <navbar_first />
  <div class="contenedor margen">
    <div class="izquierda">
      <home_recientes/>
      <seccion />
    </div>
    <div class="derecha">
      <revAmigos/>
      <!-- <news_menu/> -->
    </div>
  </div>
  <footer_down/>
</div> 
</template>

<script>
import revAmigos from '@/components/revAmigos.vue'
import seccion from '@/components/seccion.vue'
import home_recientes from '@/components/home_recientes.vue'
import navbar_first from '@/components/navbar.vue'
// import news_menu from '@/components/newsmenu.vue'
import footer_down from '@/components/footer.vue'
import { ref } from 'vue'



    let message = ref(sessionStorage.info);


export default {
  name: 'Home-logged',
  components: {
    seccion,
    home_recientes,
    revAmigos,
    navbar_first,
    // news_menu,
    footer_down
  },
  data(){
    return{

    }
  },
  mounted(){


      
  },
  methods:{
    
  }
}
function comprobar(){
      console.log('lo intento');
      if(sessionStorage.info == null){
      console.log('fallo');
      }
      else{
        let sesion = sessionStorage.info
        message = sesion
        console.log('Lo logre'+ sesion);
      }
    }

export let useComposition = function() {
    // other functions, for example to mutate message ref
    
    setTimeout(function () {    
      console.log('tu abuela');
      comprobar();                       
    },1000)

    console.log(message);
    return {
        message,
    }
}
</script>