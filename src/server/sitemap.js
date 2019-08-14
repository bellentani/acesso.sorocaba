
import VueRouterSitemap  from 'vue-router-sitemap';
import path from 'path';
import { router } from '../routes/router';

export const sitemapMiddleware = () => {
    return (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.set('Access-Control-Allow-Origin', '*');

    const staticSitemap = path.resolve('dist/static', 'sitemap.xml');

    const filterConfig = {
      rules: [
        /\/healthz/,
        /\/readyness/,
        /\/error/,
        /\/not-found/,
        /\*/,
      ],
    };

    new VueRouterSitemap(router).filterPaths(filterConfig).build('http://0.0.0.0:3000').save(staticSitemap);

    return res.sendFile(staticSitemap);
  };
};
