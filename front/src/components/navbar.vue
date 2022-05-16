<style scoped>
.mmm{
    margin-left: 10px;
}
.routerstyle{
  text-decoration: none;
}
.modal{
  display: block !important;
  overflow-x: hidden;
  overflow-y: hidden;
}
.modal-content{
  height: fit-content;
  max-height: 500px;
  overflow: hidden;
}
.cards{
  transition: all 0.2s ease;
  cursor: pointer;
}
.cards:hover{

  box-shadow: 5px 6px 6px 2px #151515;
  transform: scale(1.05);
}
hr{
  margin: 0;
}
.alargar{
  width: 200px;
}
</style>
<template>
<div class="modal mt-3"  tabindex="-1" v-if="buscar" @click="cerrar()">
  <div  class="modal-dialog mt-5">
    <div class="modal-content bg-dark p-3 ms-4 mt-5">
      <div class="cards bg-dark" v-for="item in items" v-bind:key="item.id" >
        <div class="d-flex">
          <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:item.id_producto}}">
            <div>
              <img class="m-3" :src="`productos/${item.producto_imagen}`" width="60" height="85">
            </div>
          </router-link>
          <router-link class="routerstyle" :to="{path:'/producto',query:{id_producto:item.id_producto}}">
            <div class="card-body overflow-hidden">
              <div class="centrar">
                <div>
                  <h6 class="card-title">{{item.producto_nombre}}</h6>
                </div>
              </div>
              <p class=" overflow-hidden text-nowrap">Plataforma: {{item.producto_plataforma}}</p>
            </div>
          </router-link>
        </div>
        <hr class="bg-danger">
        
      </div>
      
    </div>
  </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid justify-content-between">
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
        <span>Catalogo</span>
        </router-link>
      </div>
      <div v-if="sesion" class="mx-2  mt-3">
        <span>Amigos</span>
      </div>
      <div v-if="admin" class="mx-2  mt-3">
        <router-link to="/AdminPanel" class="routerstyle">
          <span>Panel Administrador</span>
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
          <span  class="d-none d-sm-block ms-1">{{usuario.usuario_apodo}}</span>
        </li>
        <li class="nav-item d-sm-flex align-items-sm-center">
          <img :src="`usuarios/${usuario.usuario_fotoPerfil}`" class="rounded-circle mmm" height="45" width="45" background-size="100% auto" background-position="50%" alt="">
        </li>
        <li class="nav-item d-sm-flex align-items-sm-center mx-2">
          <router-link to="/profile" class="routerstyle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg>
          </router-link>
        </li>
        <li class="nav-item d-sm-flex align-items-sm-center ms-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
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
            <a class="nav-link d-sm-flex align-items-sm-center" href="">Login</a>
          </router-link>
          <router-link to="/register" class="routerstyle">
            <a class="nav-link d-sm-flex align-items-sm-center" href="">Sing Up</a>
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
        products: null
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
    buscador(){
      this.buscar = true
    },
    cerrar(){
      this.buscar = false
    },
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

