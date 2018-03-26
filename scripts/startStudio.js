'use strict';

// Start Rekit Studio
const path = require('path');
const http = require('http');
const express = require('express');
const rekitStudioMiddleWare = require('rekit-studio/middleware');
const fallback = require('express-history-api-fallback');
const pkgJson = require('../package.json');

function startStudioServer() {
  console.log('Starting Rekit Studio...');
  const app = express();
  const server = http.createServer(app);
  const root = path.join(__dirname, '../node_modules/rekit-studio/dist');
  app.use(rekitStudioMiddleWare()(server, app));
  app.use(express.static(root));
  app.use(fallback('index.html', { root }));

  // Other files should not happen, respond 404
  app.get('*', (req, res) => {
    console.log('Warning: unknown req: ', req.path);
    res.sendStatus(404);
  });

  const port = pkgJson.rekit.studioPort;
  server.listen(port, (err) => {
    if (err) {
      console.error(err);
    }

    console.log(`Rekit Studio is running at http://localhost:${port}/`);
  });
}
startStudioServer();
