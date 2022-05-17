<style scoped>
.centrar{
    display: flex;
    vertical-align: middle;

}
@media (max-width: 1400px){
.centrar {
   flex-direction: column; 
}
.centrar div h5{
    margin: 0 !important;
}
}

.alinear{
    display: flex;
    justify-content: center;
}
/*
.card-text{
    max-height: 45px !important;
    text-overflow: ellipsis !important;
    white-space: nowrap;
    overflow: hidden;
} */
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
  /* background-color: #000000F2 !important; */
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
</style>
<template>
    <div class="container bcontent pt-3 ">
    <h4>REVIEWS DE AMIGOS</h4>
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
                        <div class=""><h5 class="card-title">{{review.user}}</h5></div>
                        <div class="mx-2"><star-rating :rating=review.rating :show-rating="false" :star-size="10" :read-only="true" :increment="0.01" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating></div>
                    </div>
                    
                    <span class="card-text overflow-ellipsis">{{review.txt}}</span>

                </div>
            </div>
        </div>
    </div>
        <div class="caca2 pt-3">
        <h5></h5>
    </div>
</div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
    name: 'right_menu',
    components: {
        StarRating
    },
    data(){
        return{
            reviews: [
        {
          name: 'Elden Ring',
          rating: 4,
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png',
          txt: '"Un juego maravilloso"',
          user: 'Selcus'
        },
        {
          name: 'Lol',
          rating: 0.5,
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg',
          txt: '"Me arruio la vida y ahora ni mi perro me quiere"',
          user: 'AAAAAAAAA'
        },
        {
          name: 'Sekiro',
          rating: 4.5,
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS',
          txt: '"Me dieron por el culo muy fuertemente"',
          user:'A10cia'
        },
        {
          name: 'Half-Life 2',
          rating: 5,
          Url: 'https://i0.wp.com/adxgames.net/wp-content/uploads/2020/02/half-life-2-pc-1.jpg?fit=330%2C410&ssl=1',
          txt: '"El mejor juego existente"',
          user: 'TheTroya'
        }
      ]
        }
    }
}
</script>