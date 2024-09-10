const Encore = require('@symfony/webpack-encore');

if(!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .enableSingleRuntimeChunk()
  // .splitEntryChunks()

  .setOutputPath('dist')
  .setPublicPath('/')
  .addEntry('main', './src/js/index.js')
  // .setManifestKeyPrefix('')

  .cleanupOutputBeforeBuild()

  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
    // config.targets.esmodules = true;
    config.shippedProposals = true;
    config.debug = true;
  })
;

const config = Encore.getWebpackConfig();


module.exports = config;

