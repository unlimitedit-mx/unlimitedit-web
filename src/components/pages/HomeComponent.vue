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
  <!-- Start Section -->
  <section id="start" class="section is-transparent is-relative">
    <!-- Content wrapper -->
    <div class="content-wrapper is-medium">
      <div class="columns is-vcentered">
        <!-- Feature -->
        <div class="column is-4">
          <div class="feature">
            <img src="../../assets/img/icons/compact.svg" alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
            <h4 class="title is-6 is-tight is-light">Desarrollo de Software</h4>
            <p>Desarrollamos el software que necesitas con las tecnologías y estándares más novedosos, desde tu página web hasta integración de sistemas. Aseguramos un balance justo entre rendimiento, escalabilidad y costos.</p>
          </div>
        </div>
        <!-- Feature -->
        <div class="column is-4">
          <div class="feature">
            <img src="../../assets/img/icons/chained.svg" alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
            <h4 class="title is-6 is-tight is-light">Infraestructura de Nube</h4>
            <p>Te ayudamos a migrar, administrar y mantener tus sistemas e infraestructura de nube, utilizando IaC (Infrastructure as Code), nubes hibridas y multinube, asegurando la mayor disponibilidad y confianza.</p>
          </div>
        </div>
        <!-- Feature -->
        <div class="column is-4">
          <div class="feature">
            <img src="../../assets/img/icons/cubes2.svg" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
            <h4 class="title is-6 is-tight is-light">Help Desk</h4>
            <p>¿Necesitas solucionar problemas con los equipos de tus colaboradores o administrar tu servidor on-premises? Contamos con soporte remoto y presencial especializado que te ayudara, establecemos un SLA alineado a tu negocio.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Content wrapper -->
  </section>

  <!-- Contact section -->
  <section class="section is-medium is-darkest">
    <!-- Container -->
    <div class="container">
      <!-- Divider -->
      <div class="divider is-centered"></div>
      <!-- Title & subtitle -->
      <h2 class="title is-light is-semibold has-text-centered is-spaced">Contáctanos</h2>
      <h4 class="subtitle is-6 is-light has-text-centered is-compact">Uno de nuestros Unlimiters estará feliz de ayudarte a encontrar la mejor solución a tus necesidades específicas.</h4>

      <!-- Content wrapper -->
      <div class="content-wrapper is-large">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <!-- Contact icons -->
            <div class="contact-icons">
              <!-- Phone -->
              <a href="tel:+524434128717" class="contact-icon" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
                <img class="is-phone" src="../../assets/img/icons/phone.svg" alt="">
              </a>
              <!-- Mail -->
              <a href="mailto:m.olvera@unlimitedit.com.mx" class="contact-icon" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
                <img class="is-phone" src="../../assets/img/icons/mail.svg" alt="">
              </a>
              <!-- Telegram -->
              <a href="https://t.me/MichelOlvera" class="contact-icon" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
                <img class="is-telegram" src="../../assets/img/logo/telegram.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Content wrapper -->
    </div>
    <!-- Container -->
  </section>
  <!-- Contact section -->
</template>

<style scoped>

</style>
