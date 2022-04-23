<template>
  
  <List/>
  
</template>

<script>
import List from '@/components/list.vue'

export default {
  name: 'catalog-final',
    beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#14181C')
  },
  components: {
    List
  }
}
</script>