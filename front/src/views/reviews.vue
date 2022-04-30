<style>
</style>
<template>
  <div>

    <navbar />
    <div class="container rows">
      <info />
      <comments />

    </div>
    <futer /> 
  </div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import futer from '@/components/footer.vue';
import info from '@/components/info.vue'
import comments from '@/components/comments.vue'

export default {
  name: 'review_page',
  components: {

    info,
    comments,
    futer,
    navbar
  }
}
 </script>