<style scoped>
.margen{
  margin-bottom: 8em;
}
</style>
<template>
<div>
  <navbar_first />
  <div class="contenedor margen">
    <div class="izquierda">
      <first_menu/>
      <seccion />
    </div>
    <div class="derecha">
      <right_menu/>
      <news_menu/>
    </div>
  </div>
  <footer_down/>
</div> 
</template>

<script>
import right_menu from '@/components/rightmenu.vue'
import seccion from '@/components/seccion.vue'
import first_menu from '@/components/firstmenu.vue'
import navbar_first from '@/components/navbar.vue'
import news_menu from '@/components/newsmenu.vue'
import footer_down from '@/components/footer.vue'

export default {
  name: 'Home-logged',
  components: {
    seccion,
    first_menu,
    right_menu,
    navbar_first,
    news_menu,
    footer_down
  }
}
</script>