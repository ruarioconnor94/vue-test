<template>
  <div>
  <div class="container">

    <h1 class="title is-1">Do You Have a Valid Ximbus Account?</h1>

    <transition name="fade">
    
    
      <div v-if="activateSpinner" class="loaderContainer" style="position: absolute;">
        <section class="hero is-fullheight">
          <div class="hero-body">
            <div class="container has-text-centered">
              <img src="../assets/Ellipsis.gif" />
            </div>
          </div>
        </section>
      </div>

      </transition>

      <div v-if="activateSpinner === false">
      <div class="notification is-success" v-if="isEmailValid === true">
      Yes You are Validated
      </div>
      <div class="notification is-danger" v-if="isEmailValid === false">
      No You are Not a Verified Ximbus User
      </div>
      </div>

  </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
name: 'oneDriveLogin',

data: () => ({  
  currentUrl: '',
  currentAccessCode: '',
  access_token: '',
  activateSpinner: true,
  isEmailValid: false,
  userEmail: '',
  userEmailType: ''
  }),

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
      // /common/oauth2/v2.0/token
      instance.post('/common/oauth2/v2.0/token', qs.stringify({client_id: '50d44fb5-025b-4bf4-9b87-77237bd8ab90', scope:'user.read', code: accessCode,redirect_url: 'http://localhost:8080/oneDriveLogin',grant_type:'authorization_code', client_secret: '9xh5VQqG5DsRHcMq9srRY0g'}))
      .then(response => {
        this.access_token = response.data.access_token;
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
created: function(){
    this.currentUrl = this.getCurrentUrl();
    this.currentAccessCode = this.parseUrl(this.currentUrl);
    this.getToken(this.currentAccessCode);
  },
watch:{
    access_token: function (){
      console.log(this.access_token);

      axios({
        method: 'get',
        url: 'https://graph.microsoft.com/v1.0/me',
        headers: {
          'Authorization': this.access_token
        }

      })
      .then(response => {
        console.log(response.data.userPrincipalName);
        this.userEmail = response.data.userPrincipalName;
      })
      .catch(error => {
        console.log(error);
      })
      //Search Ximbus Api Usuing

    },
    userEmail: function (){
      axios({
        method: 'post',
        url: 'https://ximbus-api.herokuapp.com/licenses/check',
        data: {
          email: this.userEmail
        }
      })
      .then(response => {
        this.userEmailType = response.data.role;
        }
      )
      .catch(error => {
        console.log(error);
      })


    },
    userEmailType: function(){
      if(this.userEmailType == 'student'){
        this.isEmailValid = true;
        this.activateSpinner = false;
        console.log('Congradulations you have a valid Ximbus Account');
      }
      else if(this.userEmailType == 'teacher')
      {
        this.isEmailValid = true;
        this.activateSpinner = false;
        console.log('Congradulations you have a valid Ximbus Account');
      }
      else{
        this.isEmailValid = false;
        this.activateSpinner = false;
        console.log("Invalid Email Address, You do not have a Ximbus Account");
      }

    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.fade-enter-active
  transition: opacity .5s
.fade-leave-active
  transition: opacity .5s

.fade-enter
  opacity: 0

.fade-leave-to
  opacity: 0

</style>
