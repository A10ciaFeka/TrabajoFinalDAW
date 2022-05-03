<style scoped>
*{
  overflow-x: hidden;
  overflow-y: hidden;
}

.listausu{
  width: 1000px;
  height: 500px;
  margin: 2em;
  overflow-y: scroll;
  scrollbar-width: thin;  
  scrollbar-color: #22e83a #42F3FA;   
}
.listausu::-webkit-scrollbar {
  width: 12px;    
}

.listausu::-webkit-scrollbar-track {
  background: #42F3FA;   
}

.listausu::-webkit-scrollbar-thumb {
  background-color: #22e83a;  
  border-radius: 20px;  
  border: 3px solid #42F3FA; 
}
.listaproduct{
  width: 1000px;
  height: 500px;
  margin: 2em;
  overflow-y: scroll;
  scrollbar-width: thin;  
  scrollbar-color: #22e83a #42F3FA;   
}
.listaproduct::-webkit-scrollbar {
  width: 12px;          
}

.listaproduct::-webkit-scrollbar-track {
  background: #42F3FA;     
}

.listaproduct::-webkit-scrollbar-thumb {
  background-color: #22e83a;    
  border-radius: 20px;       
  border: 3px solid #42F3FA;  
}
.listausu ul{
  border-bottom: 1px solid #00ffff;
}
.listaproduct ul{
  border-bottom: 1px solid #00ffff;
}
.formulario{
  width: 800px;
  height: 400px;
}
.box{
  width: 100px;
}
.id{
  width: 75px;
}
.admin{
  width: 100px;
}
.email{
  width: 300px;
  overflow: hidden;
}
.puntero{
  cursor: pointer;
}
.partir{
  display: flex;
  flex-direction: column;
  margin-left: 6em;
}
/* .partir1{
  display: flex;
  justify-content: center;
}
.partir2{
  display: flex;
  justify-content: center;
} */
</style>
<template>
<div>
  <navbar_first />
  <div class="container-fluid p-0 m-0">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <h2>Opciones</h2>
          <ul class="nav nav-pills flex-column mb-auto puntero">
            <li class="nav-item" v-on:click="cambio('usuario')">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
                 Usuarios
              </span>
            </li>
            <li class="nav-item" v-on:click="cambio('producto')">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg>
                Productos
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="partir">  
        <div class="partir1">
          <div class="flex" v-show="vistausu">
            <div class="listausu bg-dark text-white">

              <ul class="navbar-nav flex-row justify-content-between text-start" v-for="lista in listas" :key="lista">
                <li class="nav-item id">
                  <span>Id: {{lista.id_usuario}}</span>
                </li>
                <li class="nav-item box">
                  <span>Apodo: {{lista.usuario_apodo}}</span>
                </li>
                <li class="nav-item email">
                  <span>Email: {{lista.usuario_email}}</span>
                </li>
                <li class="nav-item admin">
                  <span>Verificado: {{lista.usuario_verificado}}</span>
                </li>
                <li class="nav-item admin">
                  <span>Administrador: {{lista.usuario_administrador}}</span>
                </li>            
              </ul>
            </div>
          </div>
        </div>
        <div class="partir2" v-show="vistaproduct">
          <div class="col" >
            <div class="listaproduct bg-dark text-white">

              <ul class="navbar-nav flex-row justify-content-between text-start" v-for="producto in productos" :key="producto">
                <li class="nav-item id">
                  <span>Id: {{producto.id_producto}}</span>
                </li>
                <li class="nav-item box">
                  <span>Titulo: {{producto.producto_nombre}}</span>
                </li>
                <li class="nav-item email">
                  <span>Sinopsis: {{producto.producto_sinopsis}}</span>
                </li>
                <li class="nav-item admin">
                  <span>Fecha salida: {{producto.producto_fechaSalida}}</span>
                </li>
                <li class="nav-item admin">
                  <span>Disponible: {{producto.producto_disponible}}</span>
                </li>
                <li class="nav-item admin">
                  <span>Num reseñas: {{producto.producto_numResenas}}</span>
                </li>
                <li class="nav-item admin">
                  <span>Plataforma: {{producto.producto_plataforma}}</span>
                </li>                
              </ul>
            </div>
          </div>
          <div class="formulario">
            <form>
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input type="text" id="form6Example1" class="form-control" />
                    <label class="form-label" for="form6Example1">First name</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input type="text" id="form6Example2" class="form-control" />
                    <label class="form-label" for="form6Example2">Last name</label>
                  </div>
                </div>
              </div>

              <!-- Text input -->
              <div class="form-outline mb-4">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">Company name</label>
              </div>

              <!-- Text input -->
              <div class="form-outline mb-4">
                <input type="text" id="form6Example4" class="form-control" />
                <label class="form-label" for="form6Example4">Address</label>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">Email</label>
              </div>

              <!-- Number input -->
              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">Phone</label>
              </div>

              <!-- Message input -->
              <div class="form-outline mb-4">
                <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                <label class="form-label" for="form6Example7">Additional information</label>
              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                <label class="form-check-label" for="form6Example8"> Create an account? </label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
    </div>
</div>
</template>

<script>
  import navbar_first from '@/components/navbar.vue'
  import axios from 'axios';
  export default {
    name: 'admin_panel',
    components: {
      navbar_first,
        },
        data(){
            return{
                listas: null,
                productos: null,
                vistausu: true,
                vistaproduct: false
            }
        },
        mounted () {
          axios.get('http://localhost:3000/usuario/listar')
            .then((response) => (this.listas = response.data));

          axios.get('http://localhost:3000/producto/listar')
          .then((response) => (this.productos = response.data.resultados));
        },
        methods:{
          cambio(value){
            if(value == "usuario"){
              this.vistausu = true;
              this.vistaproduct = false;
            }
            else if(value == "producto"){
              this.vistausu = false;
              this.vistaproduct = true;
            }
          }
        }
  }
</script>
