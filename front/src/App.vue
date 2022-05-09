<style>

@font-face {
  font-family: fuenteCuerpo;
  src: url(assets/font/Futura\ Light\ Condensed\ Regular.otf);
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
  background-color: #63d471;
  background-image: linear-gradient(315deg, #63d471 20%, #003c57 60%);
}
</style>
<template>
  

  <router-view /><!-- Donde se visualizan las vistas -->
  
</template>

<script>
  // import {USER} from './store'
  import { useStore } from 'vuex'


export default {
  name: 'App',
    beforeCreate () {
    document.querySelector('body').classList.add('fondo');
  },
  setup() {
    const store = useStore()
    // store.commit('USER', "Manolo")
    // console.log(store.getters.user);
  },
  components: {

  },
  methods:{
    getuserinfo(e){
      
      axios.get(`http://localhost:3000/usuario/login/${this.usuario_apodo}/${this.usuario_contrasena}`)
      .then( response => {

      console.log(response);

      if(!response.data.Error){
          console.log("Entra");
          localStorage.token = response.data.token;
          this.$router.push('/');
      }
      else{
          console.log("Falla")
          alert('oye muchacho')
          this.error = true;
      }
      })
    }
  }
}
</script>