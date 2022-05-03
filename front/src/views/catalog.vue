<template>
<div>
  <navbar_first/>
  <List/>
  <div>
    <footer_down/>
  </div>
  
</div>

</template>

<script>
import navbar_first from '@/components/navbar.vue'
import List from '@/components/list.vue'
import footer_down from '@/components/footer.vue'
export default {
  name: 'catalog-final',

  components: {
    List,
    navbar_first,
    footer_down
  }
}
</script>