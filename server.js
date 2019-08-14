const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');

//generate sitemap
const VueRouterSitemap = require('vue-router-sitemap');
const routes = require('./src/routes/routes');

app = express();
//app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;

app.listen(port, function() {
    console.log(routes);
});