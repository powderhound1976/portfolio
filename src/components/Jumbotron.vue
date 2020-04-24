<template>
<section class="dropshadow">
  <div class="hero  is-medium ">
    <div class="shadowFix">
      <div class="yellowHead"></div>
    </div>
    <div class="head">
      <div class="hero-body addTopMargin">
        <div class="container is-fluid">
          <h1 class="title is-fluid shadow is-size-1-desktop has-text-white has-text-weight-bold  has-text-centered">
            {{title}} <span id="yellow">{{name}}</span>
          </h1>
          <h2 class="subtitle shadow is-size-3-desktop is-fluid has-text-white has-text-centered">
            {{subtitle}}
          </h2>
        </div>
        <div class="buttons is-centered has-text-success addTopMargin">
          <button class="button  is-primary is-inverted is-outlined is-large"><a href="#projects">View My Work</a></button>
        </div>
      </div>
    </div>
  </div>
   
</section>
</template>

<script>
export default {
  data () {
    return {
      title: "Hi, I'm ",
      name: "Chris Reynolds",
      subtitle: "Full Stack Web Developer | Designer | Photographer"
    }
  }

}
</script>

<style scoped>


h1{
  font-family: "Fira Sans";
}

h2 {
  font-family: "Bebas Neue";
}

#yellow {
  color: #ff992d;
}

.button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #ff992d;
  color: #ff992d;
}

.button.is-primary.is-inverted:hover,
.button.is-primary.is-inverted.is-hovered {
  background-color: #156eb3;
  border-color: #156eb3;
  color: white;
}

.addTopMargin {
  margin-top: 5rem;
}

@media screen and (max-width: 1420px) {
  .button {
    margin-top: -3rem;
  }
}

@media screen and (max-width: 1225px) {
  .hero-body {
    margin-top: -3rem;
  }
}

@media screen and (max-width: 1022px) {
  .button {
    display: none;
  }
  .hero-body {
    margin-top: 5px;
  }
}

@media screen and (max-width: 769px) {
  .hero-body {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 450px) {
  .hero-body {
    margin-top: -20px;
  }
}

@media screen and (max-width: 360px) {
  .title {
    font-size: 25px;
  }
  .subtitle {
    font-size: 16px;
  }
}

/* from app.vue */

.yellowHead,
.head {
  background-position: center;
  background-size: cover;
  height: 50vw;

  /* position: fixed; */
}
.head {
  clip-path: polygon(100% 0, 100% 50%, 50% 80%, 0 50%, 0 0);

  left: 0;
  top: 0;
  width: 100%;
  background-image: url(../assets/head_background.jpg);
}

.shadowFix {
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.753));
}

.yellowHead {
  clip-path: polygon(50% 80%, 100% 50%, 100% 51%, 50% 82%, 0 51%, 0 50%);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  background-color: #ff9900;
}

.navBackground {
  background-color: #022C4D;
}
.yellow {
    background-color: #ff9900;}
a {
  color:#ff9900
}
</style>