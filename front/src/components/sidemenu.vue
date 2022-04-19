
<style>
:root {
            --color-inactivo: #5f5050;
            --color-hover: #ffa400;
        }
        .valoracion {
            display: flex;
            flex-direction: row-reverse;
        }
        .valoracion button {
            background-color: initial;
            border: 0;
            color: var(--color-inactivo);
            transition: 1s all;
        }
        .valoracion button:hover {
            cursor: pointer;
            color: var(--color-hover);
            transform: rotate(360deg);
        }
        button:nth-child(1):hover ~ button {
            color: var(--color-hover);
            transform: rotate(360deg);
        }
        button:nth-child(2):hover ~ button {
            color: var(--color-hover);
            transform: rotate(360deg);
        }
        button:nth-child(3):hover ~ button {
            color: var(--color-hover);
            transform: rotate(360deg);
        }
        button:nth-child(4):hover ~ button {
            color: var(--color-hover);
            transform: rotate(360deg);
        }
        button:nth-child(5):hover ~ button {
            color: var(--color-hover);
            transform: rotate(360deg);
        }

</style>
<template>
    <div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="card">
              <img
                src="https://source.unsplash.com/random/150x200?sig=2"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div class="valoracion">
                  <!-- Estrella 1 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 2 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 3 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 4 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 5 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
              </div>
              </div>
            </div>
          </div>

          <div class="col-lg-2">
            <div class="card">
              <img
                src="https://source.unsplash.com/random/150x200?sig=3"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div class="valoracion">
                  <!-- Estrella 1 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 2 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 3 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 4 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 5 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
              </div>
              </div>
            </div>
          </div>

          <div class="col-lg-2">
            <div class="card">
              <img
                src="https://source.unsplash.com/random/150x200?sig=1"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div class="valoracion">
                  <!-- Estrella 1 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 2 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 3 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 4 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
                  <!-- Estrella 5 -->
                  <button>
                      <i class="fas fa-star"></i>
                  </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>

export default {
  name: 'lateral_menu',
  props: {
    msg: String
  },
  data(){
    return{
      
    }
  },
  mounted(){
  const ratings = {
    hotel_a : 2.8,
    hotel_b : 3.3,
    hotel_c : 1.9,
    hotel_d : 4.3,
    hotel_e : 4.74
  };
    const starTotal = 5;

  for(const rating in ratings) {  
    const starPercentage = (ratings[rating] / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
  }
    }
  }

</script>