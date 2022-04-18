<script>
export default {
  name:"seccion_general",
  data(){
    return{
      tamMax: 6,
      imagens: ['https://source.unsplash.com/random/150x200?sig=1',
               'https://source.unsplash.com/random/150x200?sig=2',
               'https://source.unsplash.com/random/150x200?sig=3',
               'https://source.unsplash.com/random/150x200?sig=4',
               'https://source.unsplash.com/random/150x200?sig=5',
               'https://source.unsplash.com/random/150x200?sig=6',
               'https://source.unsplash.com/random/150x200?sig=7']
    }
  }
}
</script>

<template>

  <div class="container">    
  <h3>Los panas</h3><br>
  
  <div class="row" v-if="imagens.length>tamMax">
    <div class="col-sm-2 d-sm-3" v-for="i in (3)" :key="i">
      <a href="">
        <img :src="imagens[i-1]">
      </a>
    </div>
    <div class="col-sm-2 d-none d-lg-block" v-for="i in (tamMax-3)" :key="i">
      <a href="">
        <img :src="imagens[i+2]">
      </a>
    </div>
  </div>

  <div class="row" v-else-if="imagens.length===0">
    <div class="col-sm-2">
      <p>Nada :(</p>
    </div>
  </div>

  <div class="row" v-else >
    <div class="col-sm-2">
      <a href="">
        <img :src="imagens[0]">
      </a>
    </div>
    <div class="col-sm-2" v-for="i in (imagens.length||tamMax)" :key="i">
      <a href="">
        <img :src="imagens[i]">
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