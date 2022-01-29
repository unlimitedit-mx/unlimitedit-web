<script setup lang="ts">
import NavbarComponent from "../elements/NavbarComponent.vue";
import FooterComponent from "../elements/FooterComponent.vue";
import ContactComponent from "../elements/ContactComponent.vue";
</script>

<template>
  <div>
    <!-- Landing page Hero -->
    <section class="hero is-fullheight is-transparent">
      <div class="hero-head">
        <!-- Navbar -->
        <navbar-component></navbar-component>
      </div>
      <!-- Hero Image and Title -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <!-- Landing page Title -->
            <div class="column is-5 landing-caption">
              <h1 class="title is-1 is-light is-semibold is-spaced main-title">Consultoría de TI</h1>
              <h2 class="subtitle is-5 is-light is-thin">
                Soluciones TI de alto rendimiento y escalabilidad, adaptables a cualquier tamaño de empresa y sector.
              </h2>
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
              <li><a href="https://www.alsea.net/"><img class="hero-logo" src="../../assets/img/clients/alsea.svg" alt=""></a></li>
              <li><a href="https://www.ubereats.com/"><img class="hero-logo" src="../../assets/img/clients/ubereats.svg" alt=""></a></li>
              <li><a href="https://www.rappi.com.mx/"><img class="hero-logo" src="../../assets/img/clients/rappi.svg" alt=""></a></li>
              <li><a href="https://www.pedidosya.com/"><img class="hero-logo" src="../../assets/img/clients/pedidosya.svg" alt=""></a></li>
              <li><a href="https://www.getjusto.com/"><img class="hero-logo" src="../../assets/img/clients/getjusto.svg" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Landing page Hero -->

    <!-- Start Section -->
    <section id="start" class="section is-transparent is-relative pb-0">
      <!-- Content wrapper -->
      <div class="content-wrapper is-medium">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h2 class="title is-light is-semibold has-text-centered is-spaced">Nuestros servicios</h2>
        <h4 class="subtitle is-6 is-light has-text-centered is-compact"></h4>
        <!-- Divider -->
        <div class="divider is-centered"></div>

        <div class="columns is-vcentered mt-6">
          <!-- Feature -->
          <div class="column is-4">
            <div class="feature">
              <img src="../../assets/img/icons/compact.svg" alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
              <h4 class="title is-6 is-tight is-light">Desarrollo de Software</h4>
              <div class="cta-wrapper">
                <a href="services#software" class="button k-button k-secondary raised has-gradient is-bold">
                  <span class="text">Saber más</span>
                  <span class="front-gradient"></span>
                </a>
              </div>
            </div>
          </div>
          <!-- Feature -->
          <div class="column is-4">
            <div class="feature">
              <img src="../../assets/img/icons/chained.svg" alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
              <h4 class="title is-6 is-tight is-light">Infraestructura de Nube</h4>
              <a href="services#infra" class="button k-button k-secondary raised has-gradient is-bold">
                <span class="text">Saber más</span>
                <span class="front-gradient"></span>
              </a>
            </div>
          </div>
          <!-- Feature -->
          <div class="column is-4">
            <div class="feature">
              <img src="../../assets/img/icons/cubes2.svg" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
              <h4 class="title is-6 is-tight is-light">Help Desk</h4>
              <a href="services#helpdesk" class="button k-button k-secondary raised has-gradient is-bold">
                <span class="text">Saber más</span>
                <span class="front-gradient"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Content wrapper -->
    </section>
    <!-- Start Section -->

    <contact-component></contact-component>

    <footer-component></footer-component>
  </div>
</template>

<style scoped>

</style>
