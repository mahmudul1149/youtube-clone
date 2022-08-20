<template>
 <div class="adddd">
     <input type="text" v-model="message" />
  <button :disabled="message === ''">Click Me</button>
 </div>
</template>


<script>
  export default {
       data() {
    return {
        message: 'Hello Vue!',
    };
},

  }

</script>
<style>
  .adddd {
    margin-top: 7rem;
  }
</style>