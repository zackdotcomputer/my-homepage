module.exports = {
  target: "serverless",

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack"
        }
      ]
    });

    // Important: return the modified config
    return config;
  }
};
