module.exports = {
  target: "serverless",
  webpack5: true,

  eslint: {
    dirs: ["src"]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
