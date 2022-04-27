<template>
<div>
  <navbar_first/>
  <List/>
</div>

</template>

<script>
import navbar_first from '@/components/navbar.vue'
import List from '@/components/list.vue'

export default {
  name: 'catalog-final',

  components: {
    List,
    navbar_first
  }
}
</script>