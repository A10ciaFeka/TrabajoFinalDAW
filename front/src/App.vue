<template>
  <navbar_first/>

  <seccion :title="'Reseñas de amigos'" :imagens="['https://source.unsplash.com/random/150x200?sig=1',
               'https://source.unsplash.com/random/150x200?sig=2',
               'https://source.unsplash.com/random/150x200?sig=3',
               'https://source.unsplash.com/random/150x200?sig=4',
               'https://source.unsplash.com/random/150x200?sig=5']"/>

  <seccion :title="'Sexy UwU'" :imagens="[]"/>
</template>

<script>
import navbar_first from './components/navbar.vue'
import seccion from './components/seccion.vue'

export default {
  name: 'App',
  components: {
    navbar_first,
    seccion
  }
}
</script>

