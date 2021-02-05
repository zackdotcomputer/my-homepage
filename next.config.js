module.exports = {
  webpack: (config) => {
    config.target = "serverless";

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
