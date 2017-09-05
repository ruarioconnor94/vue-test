<template>
    <div class="features">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Features of the Software
                    </h1>
                    <h2 class="subtitle">
                        High Speed, Multithreading, and Advanced UI
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns pd is-desktop">
                    <div class="column is-one-third-desktop">
                        <p class="title">
                            <strong>Advanced Features</strong>
                        </p>
                    </div>
                    <div class="column">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input" v-model="userData.name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control has-icons-left">
                                <input class="input is-success" type="text" placeholder="Create a Username" v-model="userData.username">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input is-primary" type="email" placeholder="Email input" v-model="userData.email">
                                <!--ICONS-->
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fa fa-warning"></i>
                                </span>
                                <!--ICONS-->
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label">Level</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="userData.level">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea" v-model="userData.message"></textarea>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" v-on:click="submit">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="columns is-mobile is-centered">
                    <div class="is-half is-narrow">
                        <div>
                            <h1 class="subtitle is-1">Extra Stuff</h1>
                            <h6 class="subtitle is-6">Heres Some Extra Vue Features</h6>
                        </div>
                    </div>
                </div>

                <table class="table is-bordered is-striped is-narrow is-fullwidth">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>      
                            <th>Level</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                <tbody>
                <tr v-for="(item, index) of updatedUsers" :key="item">
                  <th>{{index}}</th>
                  <td>{{item.name}}</td>
                  <td>{{item.username}}</td>
                  <td>{{item.email}}</td>
                  <td>{{item.level}}</td>
                  <td>{{item.message}}</td>
                </tr>
              </tbody>
                </table>

                <div class="field">
                    <div class="control">
                        <button class="button is-secondary" v-on:click="update">Update</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'features',
    data() {
        return {
            userData: {
                name: "",
                username: "",
                email: "",
                level: "",
                message: ""
            },
            updatedUsers: [],
            errors: []

        }
    },
    methods: {

        submit: function() {

            axios.post('http://localhost:3000/users', {
                name: this.userData.name,
                username: this.userData.username,
                email: this.userData.email,
                level: this.userData.level,
                message: this.userData.message
            })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                })

        },

        update: function() {
            axios.get('http://localhost:3000/users')
                .then(response => {
                    this.updatedUsers = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    this.errors.push(e)
                })
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


</style>
