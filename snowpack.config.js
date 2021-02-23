/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-dotenv'],
  optimize: {
    minify: true,
  },
  buildOptions: {
    metaUrlPath: 'modules',
  },
  exclude: ['**/src/**/*.stories.js'],
};
