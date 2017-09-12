<template>
  <div>


<!--    <button id="SignIn" onclick="signIn()">Sign In</button>
    <h4 id="WelcomeMessage"></h4> -->
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'oneDriveLogin',
  currentUrl: '',
  currentAccessCode: '',
  token: '',

  methods: {
    getCurrentUrl :function(){
      var url = window.location.href;
      return url;

    },
    parseUrl: function(url){
      var code = url.split('=');
      return code[1];
    },
    getToken : function(accessCode){


      var instance = axios.create({
        baseURL: 'https://login.microsoftonline.com',
      });

      instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      var qs = require('qs');

      var params = ('client_id');
      // /common/oauth2/v2.0/token
      instance.post('/common/oauth2/v2.0/token', qs.stringify({client_id: '50d44fb5-025b-4bf4-9b87-77237bd8ab90', scope:'User.ReadBasic.All', code: accessCode,redirect_url: 'http://localhost:8080/oneDriveLogin',grant_type:'authorization_code', client_secret: '9xh5VQqG5DsRHcMq9srRY0g'}))
      .then(function(response){
        console.log(response.data.access_token);
        return response.data.access_token;
      })
      .catch(function(error){
        console.log(error);
      })

    }
  },
  created: function(){
    this.currentUrl = this.getCurrentUrl();
    this.currentAccessCode = this.parseUrl(this.currentUrl);
    this.access_token = this.getToken(this.currentAccessCode);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'


</style>
