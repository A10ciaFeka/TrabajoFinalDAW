<template>
  <navbar_first/>
  <lateral_menu/>
</template>

<script>
import navbar_first from './components/navbar.vue'
import lateral_menu from './components/sidemenu.vue'

export default {
  name: 'App',
  components: {
    navbar_first,
    lateral_menu
  }
}
</script>

