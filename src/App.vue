<template>
  <HeaderDropDown/>
  <main class="main_layout">
    <RouterView/>
  </main>
</template>

<script setup lang="ts">
import HeaderDropDown from './components/HeaderDropDown.vue';

  
</script>

<style lang="scss">
  @import '/src/assets/variables';
  @import '/src/assets/mixins';
  
.main_layout{
  width: 100%;
  height: 100vh;
  background-color: $primary_2;
  background-image: url('/public/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
  @include centralizar_flex;
}
</style>
