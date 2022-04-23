<template>
  <div class="contenedor">
    <div class="izquierda">
      <first_menu/>
      <seccion />
    </div>
    <div class="derecha">
      <right_menu/>
    </div>
  </div>
  
</template>

<script>
import right_menu from '@/components/rightmenu.vue'
import seccion from '@/components/seccion.vue'
import first_menu from '@/components/firstmenu.vue'

export default {
  name: 'Home-logged',
    beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#14181C')
  },
  components: {
    seccion,
    first_menu,
    right_menu
  }
}
</script>