<template>
  <section class="">
    <div class="padFix">
      <div class="intro column is-8 is-offset-2 ">
        <div class="intro  is-8 has-text-centered ">
          <h2 class="is-size-1-fullhd subtitle has-text-white">My Work</h2>
        </div>
      </div>
    </div>
    <div class="padFixBtm">
      <div class="container">
        <section
          class="container"
          id="work"
        >
          <div class="">
            <div class="sandbox ">
              <div class="tile is-ancestor ">
                <div class="tile is-parent ">
                  <article class="tile is-child box is-paddingless">
                    <figure class="image is-4by3">
                      <img @click="myFunction()" src="../assets/site1.png">
                    </figure>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box is-paddingless">
                    <figure class="image is-4by3">
                      <img   src="../assets/site2.png">
                    </figure>
                  </article>
                </div>
                <div class="tile is-parent ">
                  <article class="tile is-child box is-paddingless">
                    <figure class="image is-4by3">
                      <img src="../assets/site3.png">
                    </figure>
                  </article>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>

    <div id="myDIV" class="modal ">
      <div class="modal-background "></div>
      <div class="modal-card ">
        <header class="modal-card-head ">
          <p class="modal-card-title">Excellent Eats Food Blog</p>
        </header>
        <section class="modal-card-body mBkgd">
          <div class="section">
            <p>Excellent Eats was an assignment site at the end of an Advanced CSS course at Weber State.
            </p>
            <br>
            <p>
              I used the Bulma framework to quickly build this site.
            </p>
          </div>
          <figure class="image is-4by3">
            <img src="../assets/site1.png">
          </figure>
        </section>
        <footer class="modal-card-foot">
          <button @click="myFunction()" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  methods: {
    myFunction () {
      var element = document.getElementById("myDIV");
      element.classList.toggle("is-active");
    }
  }}
</script>


<style scoped>
.padFix {
  padding: 5rem;
}

.padFixBtm {
  padding-bottom: 5rem;
}

.mBkgd {
  background-color: #00518f;
  color: white;
}
</style>