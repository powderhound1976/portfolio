<template>
  <section class="hero is-dark is-fullheight">
    <div class="box cta yellow">
        <p class="has-text-centered has-text-weight-bold has-text-black is-size-4-desktop ">
          <i class="fas fa-ethernet has-text-black "></i>
             The Elders of the Internet know who Chris is...   Do you?
        </p>
    </div>
    <div class="padFix">
      <div class="intro column is-8 is-offset-2 ">
        <div class="intro  is-8 has-text-centered ">
          <h2 class="is-size-1-fullhd subtitle has-text-white">About Me</h2>
          <br>
        </div>
      </div>
    </div>
    <div class="container section">
      <div class="columns  ">
        <div class=" column is-three-fifths is-offset-1">
          <p class="container has-text-white is-size-4-desktop ">
            Hi, I'm Chris! I am a freelance full-stack web developer, designer, and photographer from Salt Lake City, Utah. I am currently attending Weber State University, and am working towards a BS degree in WEB UX. 
          </p>
          <br>
          <p class="container has-text-white is-size-4-desktop ">I love web development and the entire process of designing and implementing beautiful sites. If you are interested in improving your online presence, you can contact me using the form below. I would love to work with you!</p>
        </div>
        <div class="column ">
          <figure class="image ">
            <img
              style="height: 200px; width: 200px;"
              class="is-rounded"
              src="../assets/profile2x.jpg"
            />
          </figure>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns section">
        
        
          <div class="columns ">
            <div class="column"><i class="fab fa-vuejs fa-8x"></i></div>
            <div class="column"><i class="fab fa-js fa-8x"></i></div>
            <div class="column"><i class="fab fa-html5 fa-8x"></i></div>
            <div class="column"><i class="fab fa-css3 fa-8x"></i></div>
            <div class="column"><i class="fab fa-adobe fa-8x"></i></div>
          </div>
        
        
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
i {
  color: #ff9900;
}

.padFix {
  padding-top: 5rem;
}

.is-dark {
  background-color: #000000a4;
  color: white;

}

.align-vert {
  display: flex;
  height: 100%;
  align-items: center;
}

figure {
  display: flex;
  justify-content: center;
}

.yellow {
    background-color: #ff9900;}
</style>