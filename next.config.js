const withLess = require('@zeit/next-less');

module.exports = withLess({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]_[hash:base64:5]',
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		config.resolve.extensions = [
			...config.resolve.extensions,
			'.less',
		];

		// Important: return the modified config
		return config;
	},
});
