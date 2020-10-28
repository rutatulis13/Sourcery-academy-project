module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  webpackFinal: async (config) => {
    // do mutation to the config
    config.resolve.extensions.push(".js", ".jsx");

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            prependData: `
              @import 'src/styles/styles.scss';
            `,
          },
        },
      ],
    });

    return config;
  },
};
