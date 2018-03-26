// Build dll to accerlarate webpack build performance for dev-time.
function buildDll() {
    const dllConfig = getConfig('dll');
  
    // Get snapshot hash for all dll entries versions.
    const nameVersions = dllConfig.entry['dev-vendors'].map((pkgName) => {
      const pkg = require(path.join(pkgName.split('/')[0], 'package.json'));
      return `${pkg.name}_${pkg.version}`;
    }).join('-');
  
    const dllHash = crypto
      .createHash('md5')
      .update(nameVersions)
      .digest('hex');
    const dllName = `devVendors_${dllHash}`;
  
    // If dll doesn't exist or version changed, then rebuild it
    if (
      !shell.test('-e', manifestPath)
      || require(manifestPath).name !== dllName
    ) {
      delete require.cache[manifestPath]; // force reload the new manifest
      console.log('Dev vendors have changed, rebuilding dll...');
      console.time('Dll build success');
  
      dllConfig.output.library = dllName;
      dllConfig.output.path = path.join(__dirname, '../.tmp');
      dllConfig.plugins.push(new webpack.DllPlugin({
        path: manifestPath,
        name: dllName,
        context: srcPath,
      }));
  
      return new Promise((resolve, reject) => {
        webpack(dllConfig, (err) => {
          if (err) {
            console.log('dll build failed:');
            console.log(err.stack || err);
            reject();
            return;
          }
          console.timeEnd('Dll build success');
          resolve();
        });
      });
    }
    console.log('The dev-vendors bundle is up to date, no need to rebuild.');
    return Promise.resolve();
  }

  module.exports = buildDll;
  