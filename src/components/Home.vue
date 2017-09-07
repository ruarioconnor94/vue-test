<template>
  <div class="home">
    <!-- Hero Section eg Banner -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <!-- heading variable bound from the data object -->
          <h1 class="title"> {{ heading }} </h1>
          <div class="is-two-thirds column is paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn" v-on:click="launchLogin">Login in With Microsoft</a>
        </div>
      </div>
    </section>
    <!-- Hero Section eg Banner -->
    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title">
              <strong>Ive Had it with all this FAKE NEWS</strong>
            </p>
          </div>
          <div class="column">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
          </div>
        </div>
      </div>

      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p class="subtitle">D Trump</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p class="subtitle">D Trump</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p class="subtitle">D Trump</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      heading: 'Vue.JS',
      subheading: 'Whats your Vue?'
    }
  },
  methods: {
    launchLogin: function(){
       window.location = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=50d44fb5-025b-4bf4-9b87-77237bd8ab90&scope=files.readwrite&response_type=code&redirect_uri=http://localhost:8080/oneDriveLogin';
    }
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/clouds.jpg')
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem
h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0

</style>
