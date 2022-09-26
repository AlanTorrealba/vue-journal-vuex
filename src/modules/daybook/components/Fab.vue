<template>
 <button class="btn btn-primary" >
    <i class="fa fa-2x
    "
    :class="icon"></i>
 </button>
</template>
<script>

export default {
   props: {
      icon:{ 
         type: String,
         default: 'fa-plus'
      }
   }
}

</script>
<style lang="scss" scoped>
 
button {
 position :fixed;
 bottom: 10px;
 right: 10px;
 width: 60px;
 height: 60px;
 border-radius: 100%;
}


</style>