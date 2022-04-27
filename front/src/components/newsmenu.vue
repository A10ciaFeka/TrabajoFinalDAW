<style scoped>
.izq{
    width: 30%;
    display: flex;
    
}
.card{
    display:flex;
}
</style>

<template>
    <div class="container pt-3 ">
    <h5>PROXIMOS LANZAMIENTOS</h5>
    <hr />
    <div class="card mb-3 bg-dark" >
        <div class="alin"  v-for="review in reviews" :key="review">
            <div class="izq">
                <img class=" m-3 mb-1 w-50 h-75" v-bind:src="review.Url" >
                <div class="d-flex flex-column ">
                    <span class="mx-3 pb-1">{{review.name}}</span>
                    <span>6/9/2069</span>
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
          Url: 'https://uvejuegos.com/img/caratulas/62849/Elden-Ring-portada-uvejuegos.png'
        },
        {
          name: 'Lol',
          Url: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg'
        },
        {
          name: 'Sekiro',
          Url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/hobby-consolas-334-venta-posters-sekiro-mortal-kombat-11_7.jpg?itok=8HyJ7OBS'
        },
        {
          name: 'Half-Life 2',
          Url: 'https://i0.wp.com/adxgames.net/wp-content/uploads/2020/02/half-life-2-pc-1.jpg?fit=330%2C410&ssl=1'
        }
      ]
        }
    }
}
</script>