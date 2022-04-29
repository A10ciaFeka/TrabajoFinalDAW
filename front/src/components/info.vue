<style scoped>

    .card-img-top{
        width: 450px;
        height: 550px;
    }
</style>
<template>
    <!-- nombre sinopsis fsalida disp pu plat img etiq -->
    <div class="container">
        <div class="row align-items-center">
            <div class="card m-4 bg-dark d-flex flex-row">
                <div class="">
                    <img class="card-img-top m-3" v-bind:src="reviews[0].Url" alt="..." />
                </div>
                
                <div class="card-body ">
                    <h2 class="card-title mt-4">{{reviews[0].name}}</h2>
                    <div class="small text-muted mb-3">Fecha salida: {{reviews[0].date}}</div>
                    <p>Platatormas: {{reviews[0].platform}}</p>
                    <p>Disponible: {{reviews[0].disponible==true ? 'Si' : 'No'}}</p>

                    <p class="mb-0">Etiqueta(s):</p>
                    <div class="row">
                        <span class="bg-secondary me-4 mt-2 rounded-pill" v-for="tag in reviews[0].tags" :key="tag">{{tag}}</span>
                    </div>
                    
                    <h5 class="mt-4">Sinopsis</h5>
                    <p class="card-text">{{reviews[0].text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'game_info',
  components: {

  },
    data(){
        return{
            reviews: [
        {
          name: 'Elden Ring',
          rating: 4,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png',
          date: '4/3/2',
          platform: 'PS5',
          disponible:true,
          tags:['Sexy','Difisi','Pegarse','Comer abuelas','ع ظ ط ض','ejemplo','relleno','AAAAAA','Placeholder'],
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!'
        }
      ]
        }
    }
}
</script>