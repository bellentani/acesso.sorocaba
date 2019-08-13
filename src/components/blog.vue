<template>
	<div class="blog">
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1 class="display-4">{{ title }}</h1>
				<p class="lead">Alguns posts iniciais para entender o que é acessibilidade digital.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4 mb-4">
				<a href="https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA" target="_blank" class="card">
					<div class="card-header">
						<h3>Aplicações Ricas para tornar a Internet Acessível</h3>
					</div>
					<div class="card-body">
						Aplicações Ricas para tornar a Internet Acessível - Accessible Rich Internet Applications (ARIA) definem as formas de tornar o conteúdo e as aplicações da Rede Mundial - Web - (especialmente aqueles desenvolvidos com Ajax e JavaScript) mais acessíveis às pessoas com deficiência. Por exemplo, a ARIA permite a marcação de regiões importantes na página (como uma caixa de busca, um cabeçalho, chamadas "pontos de referência"), para facilitar a navegação (agilizam a utilização de leitores de tela, por exemplo), JavaScript para widgets, sugestões de preenchimento de formulário e mensagens de erro, atualizações de conteúdo em tempo real e muito mais.
					</div>
					<div class="card-footer">
						<button class="btn btn-primary btn-block">Leia o conteúdo</button>
					</div>
				</a>
			</div>
			<div class="col-md-4 mb-4">
				<a href="https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ" target="_blank" class="card">
					<div class="card-header">
						<h3>Aplicações web e ARIA - Perguntas Frequentes (FAQ)</h3>
					</div>
					<div class="card-body">
						WAI-ARIA, que quer dizer Accessible Rich Internet Applications (Aplicações Ricas para uma Internete Acessível), são as especificações da Web Accessibility Initiative (Iniciativa pela Acessibilidade na Web), da W3C (World Wide Web Consortium). O conjunto ARIA oferece a maneira de tornar as aplicações e widgets da rede mundial mais acessíveis a uma diversidade maior de pessoas, incluindo quem utiliza tecnologias assistivas, como leitores de telas, ou lentes de aumento.
					</div>
					<div class="card-footer">
						<button class="btn btn-primary btn-block">Leia o conteúdo</button>
					</div>
				</a>
			</div>
			<div class="col-md-4 mb-4">
				<a href="http://emag.governoeletronico.gov.br/" target="_blank" class="card">
					<div class="card-header">
						<h3>eMAG: Acessibilidade Digital no Brasil</h3>
					</div>
					<div class="card-body">
						As recomendações do eMAG permitem que a implementação da acessibilidade digital seja conduzida de forma padronizada, de fácil implementação, coerente com as necessidades brasileiras e em conformidade com os padrões internacionais. 
					</div>
					<div class="card-footer">
						<button class="btn btn-primary btn-block">Leia o conteúdo</button>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	const pageDescription = 'Links para posts sobre acessibilidade. O objetivo futuro é se tornar uma referência para desenvolvedores que desejem saber um pouco mais sobre acessibilidade.'
	export default{
		name:'blog',
		data (){
			return{
				title:'Blog'
			}
		},
		metaInfo: {
			title: 'Blog Acesso.Sorocaba',
			// override the parent template and just use the above title only
			titleTemplate: null,
			link: [
				{
					rel: 'canonical', 
					href: 'http://acesso.sorocaba.br/blog'
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

<style scoped>
	
</style>