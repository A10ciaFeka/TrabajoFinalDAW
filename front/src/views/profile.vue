<style>
</style>
<template>
  <div>

    <navbar />
    
    <foter /> 
  </div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import foter from '@/components/footer.vue';


export default {
  name: 'profile_page',
  components: {
    foter,
    navbar
  },
  mounted(){

  },
  methods:{
  }
    
}
 </script>