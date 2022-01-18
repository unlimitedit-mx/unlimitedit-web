<script setup lang="ts">
import NabvarComponent from "../elements/NabvarComponent.vue";

</script>

<template>
  <!-- Landing page Hero -->
  <section class="hero is-fullheight is-transparent">
    <div class="hero-head">
      <!-- Navbar -->
      <nabvar-component></nabvar-component>
    </div>
    <!-- Hero Image and Title -->
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <!-- Landing page Title -->
          <div class="column is-5 landing-caption">
            <h1 class="title is-1 is-light is-semibold is-spaced main-title">Consultoría de TI</h1>
            <h2 class="subtitle is-5 is-light is-thin">
              Soluciones de software e infraestructura a la medida para cualquier tipo de empresa.
            </h2>
            <!-- CTA -->
            <p class="buttons">
              <a href="#start" class="button k-button k-primary raised has-gradient is-fat is-bold">
                <span class="text">Button</span>
                <span class="front-gradient"></span>
              </a>
              <a href="#" class="button k-button k-primary raised has-gradient is-fat is-bold">
                <span class="text">Button</span>
                <span class="front-gradient"></span>
              </a>
            </p>

          </div>
          <!-- Hero image -->
          <div class="column is-7">
            <figure class="image">
              <img src="../../assets/img/illustrations/software.svg" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero footer -->
    <div class="hero-foot">
      <div class="container">
        <div class="tabs is-centered">
          <!-- Client / partner list -->
          <ul>
            <li><a><img class="hero-logo" src="../../assets/img/clients/alsea.svg" alt=""></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
