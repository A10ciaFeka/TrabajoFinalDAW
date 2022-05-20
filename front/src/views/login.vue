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
    font-size: 25px;
    outline: none;
    height: 40px;
    color: #fff;
    background: transparent;
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
    margin-top: 1em;
    border: none;
    outline: none;
    height: 40px;
    font-family: fuenteGorda !important;
    background: #22e83a;
    color: black;
    border-radius: 20px;
    cursor: pointer
}

.loginBox a {
    color: #1cbfbf;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: block;
    font-size: 25px;
}


p {
    color: #22e83a
}
.fondo{
  background-color: #14181C;
}
.fuente{
    font-family: fuenteGorda !important;
}
</style>
<template>
    <div class="loginBox">
         <!--Logo  -->
        <!-- <img class="user" src="" height="100px" width="100px">  -->
        <h3 class="fuente">Iniciar sesión</h3>
        <form v-on:submit.prevent="login">
            <div class="inputBox"> 
                <input id="name" type="text" v-model="usuario_apodo" placeholder="Usuario"> 
                <input id="pass" type="password" v-model="usuario_contrasena" placeholder="Contraseña"> 
            </div> 
            <input  type="submit" name="" value="Entrar">
        </form>
        <router-link to="/register"> 
            <a href="#">¿No tienes cuenta? Registrate<br></a>
        </router-link>
    </div>
     
</template>
<script>

    import axios from 'axios';

export default {
    name: 'login-firts',
    components: {

        },
        data(){
            return{
                error: false,
                usuario_apodo: null,
                usuario_contrasena: null,
            }
        },
        methods:{
            login(){
                axios.get(`http://localhost:3000/usuario/login/${this.usuario_apodo}/${this.usuario_contrasena}`)
                .then( response => {
                    console.log(response.data);
                        if(!response.data.Error){
                            console.log("Entra");
                            sessionStorage.setItem('info', JSON.stringify(response.data))
                            var v= this
                            setTimeout(function () {
                                v.$router.push('/')
                            },1000)
                            // this.$router.push('/');
                        }
                        else{
                            console.log("Falla")
                            alert('oye muchacho')
                            this.error = true;
                        }
                })
            }
        },
  beforeCreate () {
    document.querySelector('body').classList.remove('fondo2');
  }  
}

</script>
