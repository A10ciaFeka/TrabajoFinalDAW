<style scoped>

@font-face {
  font-family: fuenteGorda;
  src: url(../assets/font/GraphikBold.otf);
}

.mmm{
    margin-left: 10px;
}
.routerstyle{
  text-decoration: none;
}
.modal2{
  display: block !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
.modal-content2{
  height: fit-content !important;
  max-height: 500px !important;
  overflow: hidden !important;
}

.fuente{
  font-family: fuenteGorda !important;
}
.cards{
  margin: 8px;
  border-bottom: 1px solid #198754;
}
.cards:hover h6{
  color: #237A58 !important;
}
.nav_items:hover{
  color: #237A58 !important;
}
.imgBorder{
  border: 0.1px solid #6E7C7C;
}
hr{
  margin: 0;
}
.alargar{
  width: 200px;
}
.navbar{
  box-shadow: 0 5px 5px -5px black;
}
.tamm{
  max-width: 300px;
}

.rueda:hover {
  fill: #237A58 !important;
}
.modal3{
  display: block !important;
  /* margin: 5rem ; */
  background: rgba(125, 125, 125, .8);
}
</style>
<template>
    <div class="modal3 modal"  tabindex="-1" v-if="create">
        <div  class="modal-dialog modal-dialog-centered">
          <div class="modal-content p-4 bg-dark">
            <div class="my-4 text-center">
              <h4>¿Estás seguro de cerrar sesión?</h4>
            </div>
            <div class="d-flex justify-content-around">
              <div>
                <button class="btn mx-1  btn-success " @click="dameloPapi()">Cancelar</button>
              </div>
              <div>
                 <button class="btn mx-1  btn-danger " @click="salir()">Cerrar Sesión</button>
              </div>
            </div>
          </div>
        </div>
      </div>
<div class="modal modal2 mt-3"  tabindex="-1" v-if="buscar" @click="cerrar()">
  <div class="modal-dialog mt-5">
    <div class="modal-content modal-content2 bg-dark p-3 ms-4 mt-5">
      <div class="cards bg-dark" v-for="item in items" v-bind:key="item.id" >
        <div class="d-flex">
          <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:item.id_producto}}">
            <div>
              <img class="m-3 imgBorder" :src="`productos/${item.producto_imagen}`" width="60" height="85">
            </div>
          </router-link>
          <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:item.id_producto}}">
            <div class="card-body overflow-hidden">
              <div class="centrar">
                <div>
                  <h6 class="card-title fuente">{{item.producto_nombre}}</h6>
                </div>
              </div>
              <p class="tamm overflow-hidden text-nowrap">Plataforma: {{item.producto_plataforma}}</p>
            </div>
          </router-link>
        </div>
        
      </div>
      
    </div>
  </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid justify-content-evenly">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <router-link class="navbar-brand me-2 mb-1 d-flex align-items-center" to="/">
        <img
          src="..\assets\img\logo.png"
          height="43"
          loading="lazy"
          style="margin-top: 2px;"
        />
      </router-link>
      <!-- Search form -->
      <!-- <div class="navbar-nav flex-row d-none d-md-flex">  -->
      <!-- Aqui tengo que poner cosas -->
      <div class="mx-2 ms-4 mt-3">
        <router-link to="/catalogo" class="routerstyle">
        <span class="nav_items">Catalogo</span>
        </router-link>
      </div>
      <div v-if="sesion" class="mx-2  mt-3">
        <router-link to="/premium" class="routerstyle">
          <span class="nav_items">Premium</span>
        </router-link>
      </div>
      <div v-if="admin" class="mx-2  mt-3">
        <router-link to="/AdminPanel" class="routerstyle">
          <span class="nav_items">Panel Administrador</span>
        </router-link>
      </div>
    <!-- </div> -->
    </div>
      
  <div class="navbar-nav flex-row d-none d-md-flex">
    <div class=" main-search-input">
      <div class="main-search-input-item">
        <input  type="search" v-model="search" id="form1" @focus="buscador()"  class="form-control alargar" placeholder="Buscar..." aria-label="Search" />
      </div>
    </div>
  </div>
   

    <!-- Right elements -->
      <ul v-if="sesion" class="navbar-nav flex-row">
        <li class="nav-item d-sm-flex align-items-sm-center">
          <span class="d-none d-sm-block ms-1">{{usuario.usuario_apodo}}</span>
        </li>
        <li class="nav-item d-sm-flex align-items-sm-center">
          <img :src="`usuarios/${usuario.usuario_fotoPerfil}`" class="rounded-circle mmm" height="45" width="45" background-size="100% auto" background-position="50%" alt="">
        </li>
        <li class="nav-item d-sm-flex align-items-sm-center mx-2">
          <router-link to="/profile" class="routerstyle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill rueda" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg>
          </router-link>
        </li>
        <li class="nav-item d-sm-flex align-items-sm-center ms-2 mt-1" style="cursor: pointer;" v-on:click="dameloPapi()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right rueda" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
        </li>
        <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img :src="`usuarios/${usuario.usuario_fotoPerfil}`" class="rounded-circle mmm" height="35" width="35" background-size="100% auto" background-position="50%" alt=""></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">Opciones</a></li>
                <li><a class="dropdown-item" href="#!">Cerrar sesión</a></li>
            </ul>
        </li> -->
    </ul>
    <ul v-else class="navbar-nav flex-row">
      <li  class="nav-item me-3 me-lg-1">
        <div class="nav-link d-sm-flex align-items-sm-center">
          <router-link to="/login" class="routerstyle">
            <a class="nav-link d-sm-flex align-items-sm-center" href="">Entrar</a>
          </router-link>
          <router-link to="/register" class="routerstyle">
            <a class="nav-link d-sm-flex align-items-sm-center" href="">Registro</a>
          </router-link>
          <img src="../assets/img/user.svg" class="rounded-circle mmm" height="35" width="35" background-size="100% auto" background-position="50%"/>
        </div>
      </li>
    </ul>

  </div>
</nav>
</template>

<script>
 import axios from 'axios';
export default {
  name: 'navbar_first',
  props: {
    msg: String
  },
  data() {
      return{
        admin: false,
        sesion: false,
        usuario: null,
        buscar: false,
        search: '',
        products: null,
        create: false,
      }
  },
  mounted(){
    axios.get('http://localhost:3000/producto/listar')
        .then((response) => {
            this.products = response.data.resultados; 
        });
    if(sessionStorage.info == null){
        let v = this
      setTimeout(function () {    
        console.log('tu abuela');
        v.comprobar();                       
      },500)
      }
      else{
        this.sesion = true;
        this.usuario = JSON.parse(sessionStorage.info);
        console.log(this.usuario);
        if(this.usuario.usuario_administrador == 0){
          this.admin = true;
        }
      }
    

  },
  methods:{
    comprobar(){
      console.log('lo intento');
      if(sessionStorage.info == null){
      console.log('fallo');
      }
      else{
        this.sesion = true;
        this.usuario = JSON.parse(sessionStorage.info);
        if(this.usuario.usuario_administrador == 0){
          this.admin = true;
        }
        console.log('Lo logre '+ this.usuario);
      }
    },
    salir(){
      sessionStorage.clear();
      this.$router.push('login');
    },
    buscador(){
      this.buscar = true
    },
    cerrar(){
      this.buscar = false
    },
    dameloPapi(){
      if(this.create){
        this.create = false;
      }
      else{
        this.create = true;
      }
    }
    // caca(){
    //   var key = this.search
    //   var response = [];
    //   if (key != "") {
    //     for(product of this.products){
    //       for(value of Object.values(product)){
    //         if (value.IndexOf(key) >= 0)  {
    //           response.push(product);
    //         }
    //       }
    //     }
    //   }
    // }
  },
  computed: {
    items() {
      return this.products.filter(item => {
        return item.producto_nombre.toLowerCase().includes(this.search.toLowerCase());
      });
    }
    // filteredProducts() {
    //   return this.products.filter(p => {
    //     // return true if the product should be visible

    //     // in this example we just check if the search string
    //     // is a substring of the product name (case insensitive)
    //     return p.producto_nombre.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    // //   });
    // }
    
  },
  created () {
    window.addEventListener('scroll', this.cerrar);
  }
}
</script>

