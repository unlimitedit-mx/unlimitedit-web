<script setup lang="ts">
  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target?.classList.toggle('is-active');
        });
      });
    }
  });
</script>

<template>
  <nav class="navbar is-transparent mt-5" role="navigation" aria-label="main navigation">
    <div class="navbar-brand pl-6">
      <router-link to="/" class="navbar-item">
        <p class="is-size-3">UI</p>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNavbar" class="navbar-menu">
      <div class="navbar-start">

      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/" class="navbar-item"><span><i class="fas fa-home"></i><strong> Home</strong></span></router-link>
          <router-link to="/about" class="navbar-item pr-6"><span><i class="fas fa-address-card"></i><strong> About</strong></span></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
