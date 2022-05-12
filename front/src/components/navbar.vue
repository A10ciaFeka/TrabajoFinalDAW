<style scoped>
.mmm{
    margin-left: 10px;
}
.routerstyle{
  text-decoration: none;
}


</style>
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <router-link class="navbar-brand me-2 mb-1 d-flex align-items-center" to="/">
        <img
          src="..\assets\img\logo.png"
          height="25"
          loading="lazy"
          style="margin-top: 2px;"
        />
      </router-link>
      <!-- Search form -->

    </div>
    <div class="navbar-nav flex-row d-none d-md-flex"> 
      <!-- Aqui tengo que poner cosas -->
      <div class="mx-3">
        <router-link to="/catalogo" class="routerstyle">
        <span>Catalogo</span>
        </router-link>
      </div>
      <div v-if="sesion" class="mx-3">
        <span>Amigos</span>
      </div>
      <div v-if="admin" class="mx-3">
        <router-link to="/AdminPanel" class="routerstyle">
          <span>Panel Administrador</span>
        </router-link>
      </div>
    </div>  
  <div class="navbar-nav flex-row d-none d-md-flex">
    <div class="form-outline">
      <input type="search" id="form1" class="form-control" placeholder="Buscar..." aria-label="Search" />
    </div>
  </div>
   

    <!-- Right elements -->
      <ul v-if="sesion" class="navbar-nav flex-row">
        <li class="nav-item d-sm-flex align-items-sm-center">
          <span  class="d-none d-sm-block ms-1">{{usuario.usuario_apodo}}</span>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img :src="`usuarios/${usuario.usuario_fotoPerfil}`" class="rounded-circle mmm" height="35" width="35" background-size="100% auto" background-position="50%" alt=""></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">Opciones</a></li>
                <li><a class="dropdown-item" href="#!">Cerrar sesión</a></li>
            </ul>
        </li>
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
export default {
  name: 'navbar_first',
  props: {
    msg: String
  },
  data() {
      return{
        admin: false,
        sesion: false,
        usuario: null
      }
  },
  mounted(){
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
    }

  }
}
</script>

