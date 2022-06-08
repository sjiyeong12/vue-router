<template>
  <h1>{{title}}</h1>
</template>

<script>
import{ ref } from '@vue/reactivity';
export default {
  name : 'ToHome',
  setup(){
    const title = ref('Home')
     return {title}
  }
}
</script>

<style>
body {
    height: 100vh;
    background: url(../assets/img/bg-masthead.jpg) no-repeat center;
    background-size: cover;
}

</style>