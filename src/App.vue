<template>
  <div id="app">
    <!-- HEADER NAV BAR -->
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">Vue Test</a>
        </div>
        <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">

          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="features" class="nav-item r-item">Features</router-link>
          <router-link to="faq" class="nav-item r-item">FAQ</router-link>

          <div class="nav-item">
            <p class="control">
              <a class="button is-primary is-outlined">

                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Join Now</span>

              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
      <!-- HEADER NAV BAR -->

       <!-- The APP View is Shown Here-->
    <router-view></router-view>
  
      <!-- Footer -->
    
      <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    // Method for Toggling Nav Bar Dropdown
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.nav
  background-color: #383838
  a:hover
    color: gray

.nav-left a 
  color: #fff
  font-weight: bold   

a.r-item
  color:#C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.nav-toggle span
  background-color: #C1C1C1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px
      


</style>
