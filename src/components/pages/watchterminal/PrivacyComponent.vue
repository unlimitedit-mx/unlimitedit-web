<script setup lang="ts">

import NavbarComponent from "../../elements/NavbarComponent.vue"
import FooterComponent from "../../elements/FooterComponent.vue";
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
        <div class="content-wrapper is-large has-text-white">
          <h1>Privacy Policy for WatchTerminal Watch Face</h1>
          <p>This privacy policy applies to the app named WatchTerminal Watch Face, developed by Michel Olvera. This privacy policy informs you about our data practices and how we respect your privacy.</p>
          <h2>Data Collection</h2>
          <p>This app does not collect any personal information from you. We do not need any personal information to provide you with our service. This app only displays the date and hour on your watch face.</p>
          <h2>Data Sharing</h2>
          <p>This app does not share any data with any third parties. We do not use any third-party services or tools that may collect or process your data.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this privacy policy, you can contact us at <a href="mailto:m.olvera@unlimitedit.com.mx">m.olvera@unlimitedit.com.mx</a>.</p>
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time to reflect any changes in our app or the law. We will notify you of any changes by posting the new privacy policy on this page.</p>
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
h1 {
  font-size: 18pt;
  margin: 1rem 0;
}
h2 {
  font-size: 14pt;
  margin: 1rem 0;
}
</style>
