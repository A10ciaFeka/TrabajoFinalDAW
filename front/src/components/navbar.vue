<style scoped>
.mmm{
    margin-left: 10px;
}
.routerstyle{
  text-decoration: none;
}
.navbar {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

</style>
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <router-link class="navbar-brand me-2 mb-1 d-flex align-items-center" to="/">
        <img
          src="../assets/img/logo.png"
          height="20"
          loading="lazy"
          style="margin-top: 2px;"
        />
      </router-link>
      <!-- Search form -->

    </div>
    <div class="navbar-nav flex-row d-none d-md-flex"> 
      <!-- Aqui tengo que poner cosas -->
      <div class="mx-3">
        <router-link to="/catalog" class="routerstyle">
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
      <ul class="navbar-nav flex-row">
        <li class="nav-item d-sm-flex align-items-sm-center">
          <span  class="d-none d-sm-block ms-1">{{nombre}}</span>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJ-TjQYkc0ETqiFHhZrQ63PL0cCHfdi1cew&usqp=CAU" class="rounded-circle mmm" height="35" width="35" background-size="100% auto" background-position="50%" alt=""></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">Opciones</a></li>
                <li><a class="dropdown-item" href="#!">Cerrar sesión</a></li>
            </ul>
        </li>
    </ul>
    <!-- <ul class="navbar-nav flex-row">
      <li v-if="sesion" class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <span  class="d-none d-sm-block ms-1">{{nombre}}</span>
          <img v-bind:src="imagen" class="rounded-circle mmm" height="35" width="35" background-size="100% auto" background-position="50%"/>
        </a>
      </li>
      <li v-else class="nav-item me-3 me-lg-1">
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
    </ul> -->
    <!-- Right elements -->
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
        admin: true,
        sesion: true,
        nombre: 'Eduardo',
        imagen: 'https://static.scientificamerican.com/espanol/cache/file/AF74ADFC-11A1-4BE8-8C6D050938F3CD40_source.jpg'
      }
  },
  mounted(){
    
  }
}
</script>
