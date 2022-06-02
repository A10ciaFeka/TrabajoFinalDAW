<style scoped>

.loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    min-height: 500px;
    background: #000000;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box
}

.user {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px
}

h3 {
    margin: 0;
    padding: 0 0 20px;
    color: #22e83a;
    text-align: center
}

.loginBox input {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 1em;
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
    border: none;
    border-bottom: 2px solid #262626;
    outline: none;
    height: 40px;
    color: #fff;
    background: transparent;
    font-size: 25px;
    padding-left: 20px;
    box-sizing: border-box
}

.loginBox input[type="text"]:hover,
.loginBox input[type="password"]:hover {
    color: #42F3FA;
    border: 1px solid #42F3FA;
    box-shadow: 0 0 5px rgba(0, 255, 0, .3), 0 0 10px rgba(0, 255, 0, .2), 0 0 15px rgba(0, 255, 0, .1), 0 2px 0 black
}

.loginBox input[type="text"]:focus,
.loginBox input[type="password"]:focus {
    border-bottom: 2px solid #42F3FA
}

.inputBox {
    position: relative
}

.inputBox span {
    position: absolute;
    top: 10px;
    color: #262626
}

.loginBox input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    font-size: 25px;
    background: #22e83a;
    font-family: fuenteGorda !important;
    color: black;
    border-radius: 20px;
    cursor: pointer
}

.loginBox a {
    color: #00ffff;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: block
}
p {
    color: #22e83a
}
.fondo{
  background-color: #14181C;
}
input[type=checkbox] {
    display:none;

}
input[type=checkbox]:checked + label {
    border: 1px solid green;
    box-shadow: 2px 3px 3px 0px rgb(1, 99, 1);
}
input#thing1[type=checkbox] + label
{
    background-image: url("../../public/usuarios/user1.jpg");
    background-size: cover;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display:inline-block;
    padding: 0 0 0 0px;
}
input#thing2[type=checkbox] + label
{
    background-image: url("../../public/usuarios/user2.jpg");
    background-size: cover;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display:inline-block;
    padding: 0 0 0 0px;
}
input#thing3[type=checkbox] + label
{
    background-image: url("../../public/usuarios/user3.jpg");
    background-size: cover;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display:inline-block;
    padding: 0 0 0 0px;
}
input#thing4[type=checkbox] + label
{
    background-image: url("../../public/usuarios/user4.jpg");
    background-size: cover;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display:inline-block;
    padding: 0 0 0 0px;
}
input#thing5[type=checkbox] + label
{
    background-image: url("../../public/usuarios/user5.jpg");
    background-size: cover;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display:inline-block;
    padding: 0 0 0 0px;
}
</style>
<template>
    <div class="loginBox">
         <!--Logo  -->
        <!-- <img class="user" src="" height="100px" width="100px">  -->
        <h3>Registrarse</h3>
        <form v-on:submit.prevent="register">
            <div class="inputBox"> 
                <input id="name" type="text" v-model="usuario_apodo" placeholder="Usuario"> 
                <input id="pass" type="text" v-model="usuario_email" placeholder="Email"> 
            </div> 
            <div class="inputBox"> 
                <input  type="password" v-model="usuario_contrasena" placeholder="Contraseña"> 
                <!-- <input id="pass" type="password" v-model="repetir_contrasena" placeholder="Repetir contraseña">  -->
            </div> 
            <div class="inputBox mb-2">
                <p>Imagen perfil:</p>
                <div class="d-flex justify-content-between mx-3" >

                        <input type="checkbox" name='foto' id="thing1" v-bind:class = "{seleccionado: foto1}" required value="1" @change="uniqueCheck"/><label for="thing1"></label>

                        <input type="checkbox" name='foto' id="thing2" required value="2" @change="uniqueCheck"/><label for="thing2"></label>

                        <input type="checkbox" name='foto' id="thing3" required value="3" @change="uniqueCheck"/><label for="thing3"></label>

                        <input type="checkbox" name='foto' id="thing4" required value="4" @change="uniqueCheck"/><label for="thing4"></label>

                        <input type="checkbox" name='foto' id="thing5" required value="5" @change="uniqueCheck"/><label for="thing5"></label>

                </div>
                
            </div>
            <input type="submit" name="" value="Registrarse">
        </form>
        <router-link to="/login"> 
            <a href="#">¿Ya tienes cuenta? Iniciar sesion<br></a>
        </router-link>
    </div>
     
</template>
<script>
    import axios from 'axios';
export default {
    name: 'register-firts',
    components: {
        },
        data(){
            return{
                error: false,
                usuario_apodo: '',
                usuario_contrasena: '',
                usuario_email: '',
                additional_grouped: null,
                foto1: false,
            }
        },
        methods:{
            register(){
                let json ={
                    "usuario_apodo" : this.usuario_apodo,
                    "usuario_contrasena" : this.usuario_contrasena,
                    "usuario_email" : this.usuario_email
                };
                axios.post('http://localhost:3000/usuario/crear',json)
                .then( response => {
                    console.log(response);
                    if(!response.data.Error){
                            this.$router.push('login');
                        }
                        else{
                            console.log("Falla")
                            alert('El usuario ya esta cogido')
                            this.error = true;
                        }
                })
            },
            uniqueCheck(e){
                this.additional_grouped = null;
                if (e.target.checked) {
                    this.additional_grouped = e.target.value;
                    let caca = document.querySelectorAll('input[type=checkbox]');
                    for (let i = 0; i < caca.length; i++) {
                        if(caca[i].value != e.target.value){
                            caca[i].checked = false
                        }
                        
                    }
                    
                }
                this.foto1 = true
                console.log(this.additional_grouped);
            }
        },
  beforeCreate () {
    document.querySelector('body').classList.remove('fondo2');
  } 
}

</script>


