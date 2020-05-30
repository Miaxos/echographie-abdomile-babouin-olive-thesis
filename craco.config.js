const CracoLinariaPlugin = require('craco-linaria')

module.exports = function({ env }) {
  console.log(env);
  return {
    plugins: [
    {
      plugin: CracoLinariaPlugin,
      options: {
        // Linaria options
      },
    },
    ],
  };
}
