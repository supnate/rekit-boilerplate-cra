'use strict';

/* eslint "no-use-before-define": 0 */

// This script is executed after a project is created with this boilerplate.
// After execution, the script will be deleted.

const path = require('path');
const fs = require('fs');

const prjPath = __dirname;
const pkgJsonPath = path.join(prjPath, 'package.json');

function postCreate(args) {
  handleSassArgument(args);

  // Empty readme
  fs.writeFileSync(path.join(prjPath, 'README.md'), '# README\n');

  // Remove unnecessary files
  [
    '.travis.yml',
    'yarn.lock',
    'rekit.md',
    'LICENSE',
  ].forEach(file => fs.unlinkSync(path.join(prjPath, file)));

  // Clean package.json
  const pkgJson = require(pkgJsonPath); // eslint-disable-line
  delete pkgJson.dependencies['codecov']; // eslint-disable-line
  delete pkgJson.scripts['codecov']; // eslint-disable-line
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, '  '));
}

function handleSassArgument(args) {
  const pkgJson = require(pkgJsonPath); // eslint-disable-line
  // Handle --sass argument
  if (args.sass) {
    // Update package.json dependencies
    delete pkgJson.dependencies['less']; // eslint-disable-line
    delete pkgJson.dependencies['less-loader'];

    pkgJson.rekit.css = 'sass';

    // Use webpack sass-loader
    ['config/webpack.config.dev.js', 'config/webpack.config.prod.js'].forEach(configFile => {
      const configPath = path.join(prjPath, configFile);
      let text = fs.readFileSync(configPath).toString();
      text = text.replace(/\.less/g, '.scss').replace(/less-loader/g, 'sass-loader');
      fs.writeFileSync(configPath, text);
    });

    // Rename appStyleIndex in config/paths.js
    const pathsPath = path.join(prjPath, 'config/paths.js');    
    let text = fs.readFileSync(pathsPath).toString();
    text = text.replace("'src/styles/index.less'", "'src/styles/index.scss'");
    fs.writeFileSync(pathsPath, text);

    // Rename files extension to 'scss'
    ['src/features/home', 'src/features/examples', 'src/features/common', 'src/styles'].forEach((folder) => {
      const fullFolderPath = path.join(prjPath, folder);
      fs.readdirSync(fullFolderPath).forEach((file) => {
        if (/\.less$/.test(file)) {
          const fullFilePath = path.join(fullFolderPath, file);
          fs.renameSync(fullFilePath, fullFilePath.replace(/less$/, 'scss'));
        }
      });
    });
  } else {
    delete pkgJson.dependencies['node-sass-chokidar'];
    delete pkgJson.dependencies['sass-loader'];
  }
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, '  '));
}

module.exports = postCreate;
