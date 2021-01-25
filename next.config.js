const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			...defaultPathMap,
		}
	},

	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.(png|jpe?g|gif|svg)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						publicPath: `/_next/static/images/`,
						outputPath: `${isServer ? "../" : ""}static/images/`,
						name: "[name]-[hash].[ext]",
						esModule: false,
					}
				},
			],
		}, {
			test: /\.(png|jpe?g)$/i,
			use: [
				{
					loader: 'webpack-image-resize-loader',
				},
			],
		});
		config.plugins.push(new ImageminWebpWebpackPlugin());
		return config;
	},
}