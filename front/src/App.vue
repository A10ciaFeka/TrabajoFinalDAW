<template>
  <navbar_first/>

  <seccion/>

  <lateral_menu/>
</template>

<script>
import navbar_first from './components/navbar.vue'
import seccion from './components/seccion.vue'
import lateral_menu from './components/sidemenu.vue'

export default {
  name: 'App',
  components: {
    navbar_first,
    seccion,
    lateral_menu
  }
}
</script>

