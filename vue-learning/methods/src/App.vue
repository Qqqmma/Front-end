<template>
  <div id="app">
    <div class="color_getter">
      <p class="color_title" :class="color">Color: {{ color }}</p>
      <input 
        :value="color" 
        type="text"  
        placeholder="Input color" 
        @input="color = $event.target.value">
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return{
      color: "blue",
    }
  }
}
</script>

<style>
.red{
  background-color: red;
}
.green{
  background-color: green;
}
.yellow{
  background-color: yellow;
}
.blue{
  background-color: blue;
}
</style>
