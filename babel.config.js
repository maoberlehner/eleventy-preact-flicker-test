module.exports = {
  exclude: [/\/node_modules\//],
  presets: [
    [
      `@babel/preset-env`,
      {
        bugfixes: true,
        corejs: `3`,
        loose: true,
        modules: false,
        useBuiltIns: `usage`,
      },
    ],
  ],
  plugins: [
    // See https://github.com/developit/htm/tree/master/packages/babel-plugin-htm
    // for configuration options.
    [`babel-plugin-htm`, {
      import: `preact`,
    }],
  ],
};
