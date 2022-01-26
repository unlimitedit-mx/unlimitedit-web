<script setup lang="ts">
import {ref} from 'vue'
import NavbarButtonsComponent from "./NavbarButtonsComponent.vue";

let scrolled = ref(false);
let height = 60;
let mobileOpen = ref(false);

function scroll() {
  let scrollValue = window.scrollY;
  scrolled.value = scrollValue >= height;
  //this.searchExpanded = false;
}

function openMobileMenu() {
  mobileOpen.value = !mobileOpen.value;
}

function openSidebar() {
  //this.$store.app.isSiderbarOpen = true;
  console.log('clicked');
}

window.addEventListener("scroll", scroll)
</script>

<template>
  <nav class="navbar is-light" :class="{'is-dark-mobile': mobileOpen}">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img class="rotating" src="src/assets/img/logo/krypton.svg" alt="">
          <span class="brand-name">Unlimited IT</span>
        </router-link>
        <!-- Responsive toggle -->
        <a role="button" class="navbar-burger has-text-white" v-on:click="openMobileMenu()" :class="{'is-active': mobileOpen }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!-- Menu -->
      <div id="navbarMenu" class="navbar-menu light-menu" :class="{'is-active': mobileOpen}">
        <navbar-buttons-component></navbar-buttons-component>
      </div>
    </div>
  </nav>
  <nav id="navbar-clone" class="navbar is-fixed is-dark" :class="{'is-active': scrolled}">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img class="rotating" src="src/assets/img/logo/krypton-gradient.svg" alt="">
          <span class="brand-name">Unlimited IT</span>
        </router-link>
        <!-- Responsive toggle -->
        <a role="button" class="navbar-burger" v-on:click="openMobileMenu()" :class="{'is-active': mobileOpen }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!-- Menu -->
      <div id="cloneNavbarMenu" class="navbar-menu" :class="{'is-active': mobileOpen && scrolled}">
        <navbar-buttons-component></navbar-buttons-component>
      </div>
    </div>
  </nav>
</template>
<style scoped>

</style>
