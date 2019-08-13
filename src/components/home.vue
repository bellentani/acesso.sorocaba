<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">Um site prova de conceito sobre acessibilidade para aplicações ricas em Javascript e um local de teste prático de Aria. O objetivo futuro é se tornar uma referência para desenvolvedores que desejem saber um pouco mais sobre acessibilidade.</p>
      <p>Para isso vocês já podem ir até a lista de links nossas em <router-link to = "/blog">Blog</router-link> para ver algumas informações relevantes sobre o tema.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Acessibilidade Sorocaba'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
