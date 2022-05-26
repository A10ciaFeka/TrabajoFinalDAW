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
</style>
<template>

<div>
    <navbar_first />

        <div class="container">
            <div class="card mb-5 mt-4 bg-dark d-flex flex-row">
                <div class="card-body">
                    <div class="mt-3 ms-4">

                        <div class="mt-3 mb-2">
                            
                            <div class="d-flex justify-content-center">
                                <div class="text-center">
                                    <h1 class="fw-bold display-3">Mejora tu cuenta</h1>
                                    <h5 class="">Los suscriptores disfrutaran de ventajas exclusivas</h5> 
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mb-4 border-top border-success pt-4">

                            <div class="col-3 mt-2 me-4 tarjeta d-flex flex-column align-items-center rounded border border-danger">
                                <div class="m-3">
                                    <h3 class="bg-danger text-center mb-3">FREE</h3>
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
                                    </p>  

                                    <p class="text-center" v-else>
                                        <router-link class="routerstyle" to="">
                                        <a class="btn btn-secondary mt-1 shadow-lg btn-round text-light btn-lg btn-rised disabled">CONSEGUIDO</a>
                                        </router-link>
                                    </p>  
                                </div>
                            </div>

                            <div class="col-3 mt-2 tarjeta d-flex flex-column align-items-center rounded border border-success">
                                <div class="m-3">
                                    <h3 class="bg-success text-center mb-3" >PREMIUM</h3>
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