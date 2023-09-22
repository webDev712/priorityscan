module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = { "http": false };
            return webpackConfig;
        }
    }
};
