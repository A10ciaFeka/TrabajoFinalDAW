<style>
</style>
<template>
  
  <div class="container rows">
    
    <info />
    <comments />
  </div>

</template>

<script>

import info from '@/components/info.vue'
import comments from '@/components/comments.vue'

export default {
  name: 'review_page',
  components: {

    info,
    comments
  }
}
</script>