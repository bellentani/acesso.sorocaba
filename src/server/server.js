const express = require('express');
const serveStatic = require("serve-static");
const sitemapMiddleware = require('./sitemap');
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
sitemapMiddleware(app);
app.listen(port);