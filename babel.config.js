module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], //configuracion de js  a otro js 
    plugins: ['react-native-reanimated/plugin']

  };
};
