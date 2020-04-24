<template>
  <section
    id="contact"
    class="hero is-dark is-fullheight"
  >

    <div class="intro column is-8 is-offset-2 ">
      <div class="intro  is-8 has-text-centered ">
        <h2 class="is-size-1-fullhd subtitle has-text-white">Contact Me</h2>

        <br>
      </div>
      <div class="has-text-left ">
        <div class="field">
          <label class="label has-text-white">Name</label>
          <div class="control">
            <input
              class="input "
              type="text"
              placeholder="Enter Name"
            >
          </div>
        </div>
        <div class="field">
          <label class="label has-text-white">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="email"
              placeholder="Enter your email address"
              value=""
            >
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label has-text-white">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Type your message here!"
              rows="15"
            ></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button yellow">Submit</button>
          </div>
          <div class="control">
            <button class="button yellow is-light">Cancel</button>
          </div>
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
.is-dark {
  background-color: #00000000;
  color: white;
  padding: 5rem;
}

.yellow {
  background-color: #ff9900;
}
</style>