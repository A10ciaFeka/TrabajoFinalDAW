<style scoped>
.fondo{
  background-color: #14181C;
}
.tarjeta{
    background-color: #545454;
}

.bg-success{
  background-color: #22e83a !important;
}
.btn-success{
  background-color: #22e83a !important;
}
section{
  background: radial-gradient(rgba(255, 255, 255, 0) 20%, #212529 73%), url('../../public/productos/premiumPortada.jpg');
  background-position: center;
  background-size:contain;
}
.letras{
    text-shadow: 5px 0 black, 0 3px black;
}
</style>
<template>

<div>
    <navbar_first />

        <div class="container">
            <div class="card mb-5 mt-4 bg-dark d-flex flex-row">
                <div class="card-body">
                    <div class="mt-3 ms-4">

                        <section class="mt-3 mb-2">

                            <div class="container-fluid">
                                <div class="row  justify-content-center align-items-end d-flex text-center h-100 pt-5">
                                
                                <div class="col-12 col-md-8  h-50 mt-5 pt-5">
                                    <br>
                                    <h1 class="letras fw-bold display-3 pt-5">Mejora tu cuenta</h1>
                                    <h5 class="">Los suscriptores disfrutaran de ventajas exclusivas</h5> 
                                </div>
                                </div>
                            </div>
                        </section>

                        <div class="d-flex justify-content-center mb-4 border-top border-success pt-4">

                            <div class="col-4 mt-2 me-4 tarjeta d-flex flex-column rounded border border-danger">
                                <div class="m-3">
                                    <h3 class="bg-danger text-center mb-3">FREE</h3>
                                    <p>Cuenta de usuario básica para comenzar a disfrutar de Gameboxd.</p>
                                    <p>Posee los siguientes beneficios:</p>
                                    <ul class="d-grid gap-3">
                                        <li>Crea reviews de los videojuegos que quieras</li>
                                        <li>Ve reviews de tus amigos y otros usuarios</li>
                                    </ul>
                                    
                                </div>

                                <div class="mt-auto">
                                    <p class="text-center" v-if="!sesion">
                                        <router-link class="routerstyle" to="/register">
                                        <a href="" class="btn btn-danger mt-1 shadow-lg btn-round text-light btn-lg btn-rised">REGISTRARSE</a>
                                        </router-link>
                                        <br>o
                                        <router-link class="routerstyle" to="/login">
                                        <a href="" class="text-info">Iniciar Sesion</a>
                                        </router-link>
                                    </p>  

                                    <p class="text-center" v-else>
                                        <router-link class="routerstyle" to="">
                                        <a class="btn btn-secondary mt-1 shadow-lg btn-round text-light btn-lg btn-rised disabled">CONSEGUIDO</a>
                                        </router-link>
                                    </p>  
                                </div>
                            </div>

                            <div class="col-4 mt-2 tarjeta d-flex flex-column rounded border border-success">
                                <div class="m-3">
                                    <h3 class="bg-success text-center mb-3" >PREMIUM</h3>
                                    <p>Cuenta otorgada a los usuarios que apoyen de forma activa a Gameboxd, con una serie de ventajas exclusivas.</p>
                                    <p>Posee los siguientes beneficios:</p>
                                    <ul class="d-grid gap-3">
                                        <li>Todo lo que hay en el FREE</li>
                                        <li>Sin anuncios</li>
                                        <li>Acceso a nuestro discord</li>
                                        <li>Acceso a la newsletter</li>
                                        <li>Acceso a demos y betas de desarrolladores</li>
                                    </ul>
                                    
                                </div>

                                <div class="mt-auto mb-auto">
                                    <p class="text-center">
                                        <router-link class="routerstyle" to="">
                                        <a href="" class="btn btn-success mt-1 shadow-lg btn-round text-light btn-lg btn-rised">3.99 $/mes</a>
                                        </router-link>
                                        <br>o
                                        <router-link class="routerstyle" to="">
                                        <a href="" class="text-info">Pagar Anualmente</a>
                                        </router-link>
                                    </p>  
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="">

                </div>
            </div>
        </div>


    <footer_down/>
</div>

</template>

<script>
import navbar_first from '@/components/navbar.vue'
import footer_down from '@/components/footer.vue'
export default {
  name: 'premium-page',

  components: {
    navbar_first,
    footer_down
  },
  data(){
      return{
          sesion:false
      }
  },
  mounted(){
      if(sessionStorage.info == null){
          let v = this
          setTimeout(function () {    
            v.comprobar();                       
          },500)
        }
        else{
          this.sesion = true
        }
  },
  methods:{
      comprobar(){
      if(sessionStorage.info == null){
        console.log();
      }
      else{
        this.sesion = true
        this.usuario = JSON.parse(sessionStorage.info)
      }
    }
  },
    NavbareforeCreate () {
    document.querySelector('body').classList.remove('fondo2');
  }
}
</script>