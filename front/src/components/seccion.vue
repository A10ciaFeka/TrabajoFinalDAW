<script>
export default {
  name:"seccion_general",
  props:{
    title: String,
    imagens: Array
  },
  data(){
    return{
      tamMax: 5
    }
  }
}
</script>

<template>
  
  <div class="container">    
  <h3>{{ title || 'Placeholder' }}</h3><br>
  
  <div class="row" v-if="imagens.length>tamMax">
    <div class="col-sm-2 " v-for="i in (tamMax)" :key="i">
      <a href="">
        <img :src="imagens[i-1]">
      </a>
    </div>
  </div>

  <div class="row" v-else-if="imagens.length===0">
    <div class="col-sm-2">
      <p>Nada :(</p>
    </div>
  </div>

  <div class="row" v-else >
    <div class="col-sm-2" v-for="i in (imagens.length||tamMax)" :key="i">
      <a href="">
        <img :src="imagens[i-1]">
      </a>
    </div>
  </div>
</div><br>
  
</template>

<style>
  .container {
    margin: 2rem;
  }
</style>