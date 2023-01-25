module.exports = {
  // Outras configurações do Nextjs
  webpack: (config, options) => {
    // Configura o @svgr como um loader para imagens SVG usando o hook para o Webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // O objeto config modificado precisa ser retornado
    return config;
  },
};