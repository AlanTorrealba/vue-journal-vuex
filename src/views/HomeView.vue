<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">


    <h1>HOla</h1>

    <button @click="goToDaybook" class="btn btn-primary">primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">secondary</button>
    <button @click="goToDaybook" class="btn btn-success">success</button>


  </div>
</template>

<script>

  export default{
    methods:{
      goToDaybook(){
        this.$router.push({name: 'no-entry'})
      }
    }
  }
</script>