<script setup lang="ts">
import NavbarComponent from "../elements/NavbarComponent.vue";
import FooterComponent from "../elements/FooterComponent.vue";
import {onMounted} from "vue";
import {ref} from "vue";

let isModalOpen = ref(false);

function setupRoadmap() {
  // define variables
  const items = document.querySelectorAll(".main-timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el: Element) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}

onMounted(setupRoadmap);
</script>

<template>
  <div class="roadmap-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-medium">
      <div class="hero-head">
        <navbar-component></navbar-component>

        <div class="hero-body has-text-centered">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="roadmap-image">
                <img class="rotating" src="../../assets/img/logo/krypton-gradient.svg">
              </div>
              <h1 class="title is-2 is-light is-semibold is-spaced main-title">Quienes Somos</h1>
              <h2 class="subtitle is-5 is-light is-thin">
                En Unlimited It creemos firmemente que los limites son para las matemáticas, no para los proyectos.
              </h2>
              <!-- CTA -->
              <p>
                <a href="#roadmap" class="button k-button k-primary raised has-gradient is-fat is-bold">
                  <span class="text">Conócenos</span>
                  <span class="front-gradient"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="roadmap" class="main-timeline">
      <ul>
        <li>
          <div>
            <span class="item-title">Esto es Unlimited It</span>
            <p class="is-italic">– Eso no se puede – Lo validamos con el programador – Es muy caro.</p>
            <p class="mt-2">¿No estas harto de que cada que propones una idea, te respondan una de esas frases? Nosotros sí.</p>
          </div>
        </li>
        <li>
          <div>
            <span class="item-title">Historia</span>
            <p>Unlimited It nace de la necesidad de crear soluciones de TI de calidad y adaptables a cualquier negocio. No pretendemos ofrecer el mismo servicio para ti y el resto de los clientes, procuramos ser el aliado que tu negocio necesita, ofreciendo servicios completamente personalizados y adaptables a cualquier sector.</p>
            <p class="mt-2">Estamos conformados por un grupo de profesionales expertos en tecnología, que entienden la importancia de tu operación y se preocupan por ella tanto como tú.</p>
          </div>
        </li>
        <li>
          <div>
            <span class="item-title">Misión</span>
            <p>Acelerar la transición tecnológica de nuestros clientes otorgando servicios que contribuyen al crecimiento empresarial, tomando como objetivo principal maximizar la operación de cada negocio.</p>
          </div>
        </li>
        <li>
          <div>
            <span class="item-title">Visión</span>
            <p>Ser la empresa que llega a la mente de las personas cuando piensan en soluciones de TI de calidad.</p>
          </div>
        </li>
        <li>
          <div>
            <span class="item-title">Valores</span>
            <p>Libertad, Calidad, Trabajo en Equipo, Perseverancia, Resiliencia, Adaptabilidad y Pensar Fuera de la Caja.</p>
          </div>
        </li>
        <li>
          <div>
            <span class="item-title">Tecnologías</span>
            <p>Podríamos enlistar todas las tecnologías que manejamos y hacer una lista de nombres enorme, pero ¿eso realmente importa?</p>
            <p class="mt-2">Una vez te comuniques con nosotros y nos comentes cuál es tu idea / proyecto y requisitos, comenzaremos a trabajar en diferentes propuestas y presupuestos para que tu tomes la decisión que prefieras.</p>
            <button class="button k-button k-secondary raised has-gradient is-fullwidth mt-2" v-on:click="isModalOpen = true">¡Quiero verla de cualquier manera!</button>
          </div>
        </li>
      </ul>
    </section>

    <footer-component></footer-component>

    <div id="modal" class="modal" :class="{'is-active': isModalOpen}">
      <div class="modal-background" v-on:click="isModalOpen = false"></div>
      <div id="modal-content" class="modal-content has-text-white">
        <div class="container p-4">
          <div class="columns is-multiline">
            <div class="column is-12 is-flex is-justify-content-space-between">
              <p class="is-size-5">Tecnologías</p>
              <button class="delete is-right" aria-label="close" v-on:click="isModalOpen = false"></button>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>AWS</li>
                <li>GCP</li>
                <li>Azure</li>
              </ul>            </div>
            <div class="column is-size-6">
              <ul>
                <li>C#</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>PHP</li>
                <li>Python</li>
                <li>Swift</li>
                <li>Rust</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Go</li>
              </ul>            </div>
            <div class="column is-size-6">
              <ul>
                <li>.NET Core</li>
                <li>Spring</li>
                <li>Laravel</li>
                <li>django</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>Node</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>django</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>SQL Server</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>DynamoDB</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>Serverless</li>
                <li>CloudFormation</li>
                <li>Jenkins</li>
                <li>CodePipeline</li>
                <li>Cloud Build</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>SNS</li>
                <li>SQS</li>
                <li>Kafka</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>Git</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>Lambda</li>
                <li>Cloud Functions</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>ECS</li>
                <li>Cloud Run</li>
                <li>App Service</li>
              </ul>
            </div>
            <div class="column is-size-6">
              <ul>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Sass</li>
                <li>Vue</li>
                <li>Vite</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#modal {
  z-index: 999;
}

#modal-content {
  background: rgba(0, 83, 251, 0.3);
  border: 1px solid rgba(0, 83, 251, 1);
  width: 90%;
}
</style>
