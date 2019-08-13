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
const pageDescription = 'Um site prova de conceito sobre acessibilidade para aplicações ricas em Javascript e um local de teste prático de Aria. O objetivo futuro é se tornar uma referência para desenvolvedores que desejem saber um pouco mais sobre acessibilidade.'
export default {
  name: 'home',
  data () {
    return {
      title: 'Acessibilidade Sorocaba'
    }
  },
  metaInfo: {
    title: 'Home',
    // override the parent template and just use the above title only
    titleTemplate: null,
    link: [
      {
        rel: 'canonical', 
        href: 'http://acesso.sorocaba.br'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { 
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'description', 
        content: pageDescription
      },
      {
        name: 'author', 
        content: 'Poe Bellentani'
      },
      {
        property: 'og:title',
        content: 'Test title',
        // following template options are identical
        // template: '%s - My page',
        template: chunk => `${chunk} - Acesso Sorocaba`,
        vmid: 'og:title'
      },
      {
        property: 'og:description', 
        content: pageDescription
      }
    ]
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
