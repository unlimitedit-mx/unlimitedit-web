<template>
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
          <div class="column is-6 is-offset-3">
            <!-- Form -->
            <form class="contact-form" v-on:submit.prevent="sendMail">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <!-- Field -->
                  <div class="control-material is-secondary">
                    <input v-model="name" name="name" class="material-input" type="text" placeholder="Nombre completo" required>
                    <span class="material-highlight"></span>
                    <span class="bar"></span>
                  </div>
                </div>
                <div class="column is-6">
                  <!-- Field -->
                  <div class="control-material is-secondary">
                    <input v-model="mail" name="mail" class="material-input" type="email" placeholder="Correo" required>
                    <span class="material-highlight"></span>
                    <span class="bar"></span>
                  </div>
                </div>
                <div class="column is-6">
                  <!-- Field -->
                  <div class="control-material is-secondary">
                    <input v-model="phone" name="phone" class="material-input" type="tel" minlength="10" maxlength="13" placeholder="Teléfono a 10 dígitos" required>
                    <span class="material-highlight"></span>
                    <span class="bar"></span>
                  </div>
                </div>
                <div class="column is-6">
                  <!-- Field -->
                  <div class="control-material is-secondary">
                    <input v-model="subject" name="subject" class="material-input" type="text" placeholder="Asunto" required>
                    <span class="material-highlight"></span>
                    <span class="bar"></span>
                  </div>
                </div>
                <div class="column is-12">
                  <!-- Field -->
                  <div class="control-material is-secondary">
                    <textarea v-model="message" name="message" rows="3" placeholder="Mensaje" required></textarea>
                    <span class="material-highlight"></span>
                    <span class="bar"></span>
                  </div>
                </div>
                <div class="column is-12" :class="{'is-hidden': alertsHidden || !sendedMail}">
                  <article class="message is-success secondary-gradient">
                    <div class="message-body has-text-white">
                      <strong>Correo enviado correctamente</strong>, te responderemos en cuanto nos sea posible.
                    </div>
                  </article>
                </div>
                <div class="column is-12" :class="{'is-hidden': alertsHidden || sendedMail}">
                  <article class="message is-danger">
                    <div class="message-body">
                      <strong>Tuvimos problemas al enviar el mensaje</strong>, reintenta nuevamente.
                    </div>
                  </article>
                </div>
              </div>
              <!-- Submit -->
              <div class="has-text-centered">
                <button class="button is-button k-button k-primary raised has-gradient is-fat is-bold is-submit" :disabled="contactButtonDisabled">
                  <span class="text">Enviar</span>
                  <span class="front-gradient"></span>
                </button>
              </div>
            </form>
            <!-- /Form -->
          </div>
        </div>
      </div>
      <!-- Content wrapper -->
    </div>
    <!-- Container -->
  </section>
  <!-- Contact section -->
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from 'vue';

type MailInfo = {
  name: string,
  mail: string,
  phone: string,
  subject: string,
  message: string
}

let sendedMail = ref(false);
let alertsHidden = ref(true);
let contactButtonDisabled = ref(false);

let name = ref(""), mail = ref(""), phone = ref(""), subject = ref(""), message = ref("");

async function sendMail(){
  contactButtonDisabled.value = true;
  const url = "https://www.unlimitedit.com.mx/.netlify/functions/mailsender";
  const mailInfo: MailInfo = {
    name: name.value,
    mail: mail.value,
    phone: phone.value,
    subject: subject.value,
    message: message.value
  }

  console.log("Mail to send: %s", mailInfo);
  try {
    let response = await axios.post(url, mailInfo);
    if (response.status === 200) {
      sendedMail.value = true;
      console.log("Sended mail");
    } else {
      sendedMail.value = false;
      console.log("Error mail");
    }
  }catch (e){
    if (e instanceof Error){
      console.log(e.message)
    }
  }
  alertsHidden.value = false;
  contactButtonDisabled.value = false;
}
</script>

<style scoped>
</style>