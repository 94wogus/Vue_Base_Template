const path = require('path');

module.exports = {
  "outputDir": "./docs",
  "configureWebpack": {
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src/'),
            '@views':path.join(__dirname, 'src/views/'),
            '@components': path.join(__dirname, 'src/components/'),
            '@api':path.join(__dirname, 'src/api/'),
            '@assets':path.join(__dirname, 'src/assets/'),
        }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
