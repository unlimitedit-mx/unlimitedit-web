<script setup lang="ts">

import NavbarComponent from "../elements/NavbarComponent.vue"
import FooterComponent from "../elements/FooterComponent.vue";
</script>

<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-head">
        <navbar-component></navbar-component>
      </div>
    </section>

    <!-- Side Features section -->
    <section id="big-gradient" class="section is-transparent pt-0">
      <!-- Container -->
      <div class="container">
        <!-- Content wrapper -->
        <div class="content-wrapper is-large">
          <div id="software" class="columns is-vcentered">

            <!-- Feature content -->
            <div class="column is-6">
              <div class="side-feature-content">
                <h3 class="title is-4 is-light has-text-centered">Desarrollo de Software</h3>
                <div class="divider is-long mx-auto"></div>
                <p class="is-light">Desarrollamos el software que necesitas con las tecnologías y estándares más novedosos, desde tu página web o tu propia App, hasta integración de sistemas. Aseguramos un balance justo entre rendimiento, escalabilidad y costos.</p>
              </div>
            </div>

            <!-- Feature image -->
            <div class="column is-6">
              <img class="side-feature mx-auto is-block" src="../../assets/img/illustrations/softwaredev.svg" alt="">
            </div>
          </div>

          <div id="infra" class="columns is-vcentered">
            <!-- Feature image desktop -->
            <div class="column is-6 is-hidden-mobile">
              <img class="side-feature mx-auto is-block" src="../../assets/img/illustrations/cloud.svg" alt="">
            </div>

            <!-- Feature content -->
            <div class="column is-6">
              <div class="side-feature-content">
                <h3 class="title is-4 is-light has-text-centered">Infraestructura de Nube</h3>
                <div class="divider is-long mx-auto"></div>
                <p class="is-light">Te ayudamos a migrar, administrar y mantener tus sistemas e infraestructura de nube, utilizando IaC (Infrastructure as Code), nubes hibridas y multinube, asegurando la mayor disponibilidad y confianza.</p>
              </div>
            </div>

            <!-- Feature image only for mobile -->
            <div class="column is-6 is-hidden-desktop is-hidden-tablet">
              <img class="side-feature mx-auto is-block" src="../../assets/img/illustrations/cloud.svg" alt="">
            </div>
          </div>

          <div id="helpdesk" class="columns is-vcentered">
            <!-- Feature content -->
            <div class="column is-6">
              <div class="side-feature-content">
                <h3 class="title is-4 is-light has-text-centered">Help Desk</h3>
                <div class="divider is-long mx-auto"></div>
                <p class="is-light">¿Necesitas solucionar problemas con los equipos de tus colaboradores o administrar tu servidor on-premises? Contamos con soporte remoto y presencial especializado que te ayudara, establecemos un SLA alineado a tu negocio.</p>
              </div>
            </div>

            <!-- Feature image -->
            <div class="column is-6">
              <img class="side-feature mx-auto is-block" src="../../assets/img/illustrations/helpdesk.svg" alt="">
            </div>
          </div>
        </div>
        <!-- /Content wrapper -->
      </div>
      <!-- /Container -->
    </section>
    <!-- /Side Features section -->
    <footer-component></footer-component>
  </div>
</template>

<style scoped>

</style>
