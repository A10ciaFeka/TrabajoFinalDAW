<style scoped>
.centrar{
    display: flex;
    vertical-align: middle;

}
.alinear{
    display: flex;
    justify-content: center;
}
.dr{
    width: 70%;
}
.iz{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;  
}
.bg-dark{
  background-color: #000000F2 !important;
}
span{
    width: 200px !important;

    padding: 2px 5px;
    /* white-space: nowrap; */
    overflow: hidden;
}
.overflow-ellipsis {
  text-overflow: ellipsis;
}
hr{
    /* color: #22e83a; */
    background-color: #22e83a; height: 1.5px; border: 0;
}
img{
    width: 100px;
    height: 150px;
}
</style>
<template>
    <div class="container bcontent pt-3">
    <h5>PROXIMOS LANZAMIENTOS</h5>
    <hr />
    <div class="card mb-3 bg-dark" v-for="review in reviews" :key="review" >
        <div class="alinear ">
            <div class="iz">
                <img class=" m-3 " v-bind:src="review.Url" width="60" height="85">
                <!-- <span class="mx-3 pb-1">{{review.name}}</span> -->
            </div>
            <div class="dr">
                <div class="card-body">
                    <div class="centrar">
                        <div class="mb-3 mt-2"><h4 class="card-title">{{review.name}}</h4></div>
                    </div>
                    <p class="card-text overflow-ellipsis">Fecha de lanzamiento: {{review.date}}</p>
                    <p class="card-text overflow-ellipsis">Plataforma: {{review.platform}}</p>

                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'news_menu',
    components: {
    },
    data(){
        return{
            reviews: [
        {
          name: 'Elden Ring',
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png',
          date: '1 23 /5',
          platform: 'Xbox'
        },
        {
          name: 'Lol',
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg',
          date: '4/3/2',
          platform: 'PS5'
        },
        {
          name: 'Sekiro',
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          date: '1/2/3',
          platform: 'Switch'
        },
        {
          name: 'Half-Life 2',
          Url: 'https://i0.wp.com/adxgames.net/wp-content/uploads/2020/02/half-life-2-pc-1.jpg?fit=330%2C410&ssl=1',
          date: 'E/r/w',
          platform: 'PC'
        }
      ]
        }
    }
}
</script>