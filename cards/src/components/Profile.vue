<template>
    <h1> {{profile}}Profile page</h1>

</template>


<script>
import { useRoute } from 'vue-router'
export default {
    name:`Profile`,
    data()
    {
      return{
        profile:''
      }
    },

    mounted()
    {
        const route=useRoute();
        console.log("route",route);
        this.profile=route.params.name;

    }



}



</script>
<style scoped>
h1{
    color:orange
}

</style>