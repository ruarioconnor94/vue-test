<template>
  <div class="oneDriveLogin">
    <div class="container is-widescreen">
      <div class="notification">
          <a class="button" v-on:click="launchModel">Sign in with Microsoft</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oneDriveLogin',
  
  methods: {
    launchModel: function (){
      
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'


</style>
