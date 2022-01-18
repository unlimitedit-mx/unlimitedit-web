<script setup lang="ts">
  import {ref} from 'vue'

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
          <img class="rotating" src="../../assets/img/logo/krypton.svg" alt="">
          <span class="brand-name">Unlimited IT</span>
        </router-link>
        <!-- Responsive toggle -->
        <div class="navbar-burger" @click="openMobileMenu()">
          <div class="menu-toggle">
        <span class="icon-box-toggle" :class="{'is-dark-mobile': mobileOpen}">
          <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
          </span>
        </span>
          </div>
        </div>
      </div>
      <!-- Menu -->
      <div id="navbarMenu" class="navbar-menu light-menu" :class="{'is-dark-mobile': mobileOpen}" v-on:click="scroll()">
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
            <a class="is-centered-responsive" href="#">Section</a>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="#">Section</a>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="#" target="_blank">
              <img class="telegram" src="../../assets/img/logo/telegram.svg" alt="">
              Telegram
            </a>
          </div>
          <!-- Sign up -->
          <div class="navbar-item">
            <a href="#" class="button k-button k-primary raised has-gradient slanted">
              <span class="text">Button</span>
              <span class="front-gradient"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav id="navbar-clone" class="navbar is-fixed is-dark" :class="{'is-active': scrolled}">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <a href="../../../index.html" class="navbar-item">
          <img class="rotating" src="../../assets/img/logo/krypton-gradient.svg" alt="">
          <span class="brand-name">Unlimited IT</span>
        </a>
        <!-- Responsive toggle -->
        <div class="navbar-burger" @click="openMobileMenu()">
          <div class="menu-toggle">
                    <span class="icon-box-toggle" :class="{mobileOpen: 'active'}">
                        <span class="rotate">
                            <i class="icon-line-top"></i>
                            <i class="icon-line-center"></i>
                            <i class="icon-line-bottom"></i>
                        </span>
                    </span>
          </div>
        </div>
      </div>
      <!-- Menu -->
      <div id="cloneNavbarMenu" class="navbar-menu" :class="{mobileOpen: 'active'}">
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
            <a class="is-centered-responsive" href="#">Section</a>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="#">Section</a>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="#" target="_blank">
              <img class="telegram" src="../../assets/img/logo/telegram.svg" alt="">
              Telegram
            </a>
          </div>
          <!-- Sign up -->
          <div class="navbar-item is-nav-link">
            <a href="#" class="button k-button k-primary raised has-gradient slanted">
              <span class="text">Button</span>
              <span class="front-gradient"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>

</style>
