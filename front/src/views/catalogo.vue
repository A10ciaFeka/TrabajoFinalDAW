<template>
<div>
  <navbar_first/>
  <catalogo_productos/>
  <div>
    <footer_down/>
  </div>
  
</div>

</template>

<script>
import navbar_first from '@/components/navbar.vue'
import catalogo_productos from '@/components/catalogo_productos.vue'
import footer_down from '@/components/footer.vue'
export default {
  name: 'catalog-final',

  components: {
    catalogo_productos,
    navbar_first,
    footer_down
  }
}
</script>