<template>
  <div class="navbar-end">
    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <router-link to="/" class="is-centered-responsive">Inicio</router-link>
    </div>
    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <router-link to="/about" class="is-centered-responsive">Quiénes somos</router-link>
    </div>
    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <a class="is-centered-responsive" href="https://t.me/MichelOlvera" target="_blank">
        <img class="telegram" src="../../assets/img/logo/telegram.svg" alt="">
        Telegram
      </a>
    </div>
    <!-- Sign up -->
    <div class="navbar-item is-nav-link">
      <a href="tel:+524434128717" class="button k-button k-primary raised has-gradient slanted">
        <span class="text"><img class="telegram" src="../../assets/img/icons/phone.svg" alt=""> Llámanos</span>
        <span class="front-gradient"></span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>