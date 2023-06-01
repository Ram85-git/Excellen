<template>
  
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <br><br>
  <router-link to="/home1">Home1</router-link><br>
  <router-link to="/login">Login</router-link><br>
  <router-link to="/profile/anil">Anil's Profile Page</router-link><br>
  <router-link to="/profile/peter">Peter's Profile Page</router-link><br>
  <router-link to="/profile/bruce">Burce's Profile Page</router-link><br>
  <br>
  <router-link to="/xyz/bruce">404 page</router-link><br>
  <router-link to="/abc/bruce">xyz</router-link><br>

  <!-- <button v-on:click="$router.push('/login')">Login</button> -->
  <router-view> </router-view>



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
