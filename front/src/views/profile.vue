<style scoped>
.fuente{
    font-family: fuenteGorda !important;
}
.fondo{
  background-color: #14181C;
}
.bg-dark{
    background-color: #21282F !important;
}
.card-img-top{
    width:185px;
    height:255px;
}
.bg-image{
    width:185px;
    height:255px;
}
.card{
    max-width: 230px !important;
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
}
.borde{
    border-right: 1px solid green;
    padding-right: 1em;
}

<<<<<<< HEAD
=======
.imgBorder{
  border: 0.1px solid #6E7C7C;
}


.perfil{
  border: 2px solid #6E7C7C;
  box-shadow: 5px 6px 6px 1px #151515;
}

.products:hover{
  box-shadow: 9px 10px 10px 5px #151515;
}
>>>>>>> 34d9b32371067ef006316dd88ed97f898167d17b

</style>
<template>
  <div>
    <navbar />
    <div class="container mt-5 bg-dark">
      <div class="pt-5 ps-3 d-flex justify-content-between">
        <div class="d-flex ">
            <div>
<<<<<<< HEAD
                <img v-bind:src="'usuarios/' + imagen" class="rounded-circle" height="150" width="150" background-size="100% auto" background-position="50%" alt="">
            </div>
            <div>
                <h2 class="mt-4 ms-5">{{usuario.usuario_apodo}}</h2>
=======
                <img v-bind:src="'usuarios/' + imagen" class="rounded-circle perfil" height="150" width="150" background-size="100% auto" background-position="50%" alt="">
            </div>
            <div>
                <h2 class="mt-4 ms-3 fuente">{{usuario.usuario_apodo}}</h2>
>>>>>>> 34d9b32371067ef006316dd88ed97f898167d17b
            </div>
        </div>
        <div class="d-flex mt-4" style="height: 70px;">
            <div class="d-flex  flex-column text-center borde">
                <div>
                    <Span>4</Span>
                </div>
                <div>
                    <span>REVIEWS</span>
                </div>
            </div>
            <div class="d-flex ms-3 flex-column text-center borde">
                <div>
                    <Span>4</Span>
                </div>
                <div>
                    <span>SEGUIDOS</span>
                </div>
            </div>
            <div class="d-flex ms-3 me-5 flex-column text-center">
                <div>
                    <Span>4</Span>
                </div>
                <div>
                    <span>SEGUIDORES</span>
                </div>
            </div>     
        </div>
      </div>

      <!-- Productos -->
    <div class="d-flex mt-3">
<<<<<<< HEAD
        <div class="overflow-auto text-center">
=======
        <div class="text-center">
>>>>>>> 34d9b32371067ef006316dd88ed97f898167d17b
            <h3>Juegos valorados</h3>
            <hr>
        <div class="container pt-3">
            <div class="row">
<<<<<<< HEAD
                <div class="col-3" v-for="producto in productos" :key="producto">
                    <div class="card bg-dark box bar">
                        <router-link :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                        <img v-bind:src="`productos/${producto.producto_imagen}`" class="card-img-top" alt="" width="185" height="255"/>
=======
                <div class="col-3 " v-for="producto in productos" :key="producto">
                    <div class="card bg-dark box bar products">
                        <router-link :to="{path:'/producto',query:{id_producto:producto.id_producto}}">
                            <img v-bind:src="`productos/${producto.producto_imagen}`" class="card-img-top imgBorder" alt="" width="185" height="255"/>
>>>>>>> 34d9b32371067ef006316dd88ed97f898167d17b
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

        <!-- Seguidos -->
        <div class="text center mt-3 w-100">
            <h3 class="text-center">Seguidos</h3>
            <hr>
        </div>
        <div class="d-flex">
            <div class="overflow-auto text-center">
            <div class="container pt-3">
                <div class="row">
                    <div class="col-3 ms-2"  v-for="idamigo in idamigos" :key="idamigo">
<<<<<<< HEAD
                        <div class="mx-2  d-flex flex-column">
=======
                        <div class="mx-5 d-flex flex-column">
>>>>>>> 34d9b32371067ef006316dd88ed97f898167d17b
                            <div>
                                <img v-bind:src="`usuarios/${idamigo.usuario_fotoPerfil}`" class="rounded-circle" height="100" width="100" background-size="100% auto" background-position="50%" alt="">
                            </div>
                            <div class="ms-3">
                                <span>{{idamigo.usuario_apodo}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    </div>

    <foter /> 
  </div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import foter from '@/components/footer.vue';
import axios from 'axios';

export default {
  name: 'profile_page',
  props: {
    msg: String
  },
  components: {
    foter,
    navbar,
    //StarRating
  },
  data() {
      return{
        usuario: [],
        imagen: null,
        productos: [],
        idamigos:[],
      }
  },
  mounted(){
    if (sessionStorage.info == null) {
      console.log('No hay usuario');
    }
    else{
      this.usuario = JSON.parse(sessionStorage.info);
      this.imagen = this.usuario.usuario_fotoPerfil
    }
    console.log(this.usuario);
    axios.get(`http://localhost:3000/producto/listar/4/0`)
    .then((response)=>{
          this.productos = response.data.resultados
          console.log(this.productos);
    });
    axios.get(`http://localhost:3000/usuario/${this.usuario.id_usuario}/amigos`)
    .then((response)=>{
        this.idamigos = response.data
        console.log(this.idamigos);
    });
    
                // let json ={
                //     "id_usuario" : '7',
                //     "id_amigo" : '5',

                // };
                // axios.post('http://localhost:3000/usuario/seguir_usuario',json)
                // .then( response => {
                //     console.log(response);
                //     if(response.data.statusText == 'OK'){
                //         console.log("Entra");

                //     }
                //     else{
                //         console.log("Falla")
                //     }
                // })
            
  },
  beforeCreate () {
    document.querySelector('body').classList.remove('fondo2');
  }
    
}
 </script>