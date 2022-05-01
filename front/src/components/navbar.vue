<style scoped>
.mmm{
    margin-left: 10px;
}
.routerstyle{
  text-decoration: none;
}
.barra {
  display: flex;
  font-size: 40px !important;
}


</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid p-3">
    <router-link class="navbar-brand me-2 mb-1 d-flex align-items-center" to="/">
      <img
        src="../assets/img/logo.png"
        height="20"
        loading="lazy"
        style="margin-top: 2px;"
      />
    </router-link>
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="me-3">
        <div class="form-white input-group" style="width: 250px;">
          <input type="search" class="form-control rounded" placeholder="Buscar en Gameboxd "
            aria-label="Search" aria-describedby="search-addon" />
        </div>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mt-2 p-2">
          <router-link to="/catalog">
            <span>Catalogo</span>
          </router-link>
        </li>
        <li class="nav-item mt-2 p-2">
          <router-link to="/catalog">
            <span>Amigos</span>
          </router-link>
        </li>
        <li class="nav-item mt-2 p-2">
          <router-link to="/catalog">
            <span>Listas</span>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav d-flex flex-row ms-auto me-3">
        <li class="nav-item me-3 me-lg-0 dropdown">
          <div class="mdi mdi-account"></div>
        </li>
      </ul>
    </div>
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
