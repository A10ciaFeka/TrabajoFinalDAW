<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <img
          src="../assets/img/logo.png"
          height="20"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: 2px;"
        />
      </a>

      <!-- Search form -->

    </div>
   
    <div class="navbar-nav flex-row d-none d-md-flex">
      <div class="form-outline">
  <input type="search" id="form1" class="form-control" placeholder="Buscar..." aria-label="Search" />
</div>
    </div>
   

    <!-- Right elements -->
    <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-plus-circle fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <font-awesome-icon icon="fa-solid fa-bell" />
          <span class="badge rounded-pill badge-notification bg-danger">12</span>
        </a>
        
      </li>
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <strong class="d-none d-sm-block ms-1">{{nombre}}</strong>
                    <img
            v-bind:src="imagen"
            class="rounded-circle mmm"
            height="35"
            width="35"
            alt="No carga"
            loading="lazy"
            background-size="100% auto"
            background-position="50%"
            
          />
        </a>
      </li>

      
    </ul>
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
          nombre: 'Eduardo',
          imagen: 'https://static.scientificamerican.com/espanol/cache/file/AF74ADFC-11A1-4BE8-8C6D050938F3CD40_source.jpg'
      }
  },
  mounted(){
    
  }
}
</script>
<style>
.mmm{
    margin-left: 10px;
}

</style>