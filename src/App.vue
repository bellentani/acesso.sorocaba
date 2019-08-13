<template>
  <div id="app">
      <!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark">
        <div class="container">
        <router-link to="/" class="navbar-brand">Acesso.Sorocaba</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  margin-top: 60px;
}
body {
  background: url('./assets/papyrus-dark.png') #000000;
  color: #ffffff;
}
.navbar-dark {
  background: rgba(0,0,0,.85);
}
a {
  color: #42b983;
}
.jumbotron {
  padding: 2rem;
  border-radius: .5rem;
  background: rgba(0,0,0,.85);
  color: #ffffff;
}
.title {
  color: #ffffff;
}
.card {
  color: #333333;
}
</style>
