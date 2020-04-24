<template>
  <div id="app">
    <div class="">
      <nav
        class="navbar is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu container"
        >
          <div class="navbar-start">
            <a
              class="navbar-item"
              href="#home"
            >
              Home
            </a>

            <a
              class="navbar-item"
              href="#about"
            >
              About Me
            </a>
            <a
              class="navbar-item"
              href="#projects"
            >
              My Work
            </a>
            <a
              class="navbar-item"
              href="#contact"
            >
              Contact Me
            </a>

          </div>

        </div>
      </nav>
    </div>
    <app-hero id="home"></app-hero>

    <app-about id="about"></app-about>
    <app-projects id="projects"></app-projects>
    <app-contact id="contact"></app-contact>
    <app-foot></app-foot>
  </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
}
</script>

<style >
.box.cta {
  border-radius: 0;
  border-left: none;
  border-right: none;
}
@import url("https://fonts.googleapis.com/css?family=Bebas+Neue|Fira+Sans:900i&display=swap");
#app {
  background-image: linear-gradient(to bottom, #00518f, #001424);
  display: block;
  height: 100%;
}
h1 {
  font-family: "Fira Sans";
}
h2 {
  font-family: "Bebas Neue";
}
.shadowFix {
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.753));
}
</style>
