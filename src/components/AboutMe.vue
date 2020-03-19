<template>
  <section class="hero is-dark is-fullheight">
    <div class="box cta ">
        <p class="has-text-centered">
            <span class="tag is-primary">New</span> The Elders of the Internet know who I am. Do you?
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
          <p class="container has-text-white is-size-5-desktop ">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maiores fuga asperiores voluptatem explicabo?
            Incidunt, illum unde! Magni assumenda ipsum libero
            fugiat excepturi. Quisquam vitae earum explicabo vel
            alias nemo harum!
          </p>
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
  background-color: #00000060;
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
</style>