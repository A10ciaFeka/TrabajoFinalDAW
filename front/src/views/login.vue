<style scoped>

.loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    min-height: 200px;
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
    margin-bottom: 20px
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
    border: none;
    border-bottom: 2px solid #262626;
    outline: none;
    height: 40px;
    color: #fff;
    background: transparent;
    font-size: 16px;
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
    font-size: 16px;
    background: #22e83a;
    color: black;
    border-radius: 20px;
    cursor: pointer
}

.loginBox a {
    color: #00ffff;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: block
}


p {
    color: #22e83a
}

</style>
<template>
    <div class="loginBox">
         <!--Logo  -->
        <!-- <img class="user" src="" height="100px" width="100px">  -->
        <h3>Iniciar sesión</h3>
        <form v-on:submit.prevent="login">
            <div class="inputBox"> 
                <input id="name" type="text" v-model="usuario_apodo" placeholder="Usuario"> 
                <input id="pass" type="password" v-model="usuario_contrasena" placeholder="Contraseña"> 
            </div> 
            <input type="submit" name="" value="Entrar">
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
                    
                    console.log(response);
                    
                        if(!response.data.Error){
                            console.log("Entra");
                            localStorage.info = response.data;
                            this.$router.push('/');
                        }
                        else{
                            console.log("Falla")
                            alert('oye muchacho')
                            this.error = true;
                        }
                })
            }
        }  
}
</script>
