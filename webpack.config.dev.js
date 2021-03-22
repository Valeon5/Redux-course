const webpack = require('webpack');
const path = require('path'); // path comes with node and will let us work with paths.
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development'; // we are declaring the node environment.
// This is so Babel plugin knows we are running in dev mode.

module.exports = {
	// we are declaring an object that configures webpack
	mode: 'development', // so webpack knows to run in dev mode, setting the NODE env to development and disables some production only features
	target: 'web', // we could set it to NODE if we were using webpack to build an app running in node, changing the way webpacks bundles the code so that NODE can work with it instead of the browser
	devtool: 'cheap-module-source-map', // there are a number of devTools to consider, but this one is recommended for development so we get a source map for debugging. Source maps let us see our original code when debugging in browser, because we'll be transpiling our code with Babel.
	entry: './src/index', // the app's entry point. This is the default for webpack, so we could leave it out.
	output: {
		// in dev mode, webpack doesn't output code, it serves the app from memory, but we still have to tell it where to serve from memory.
		path: path.resolve(__dirname, 'build'), // __dirname gives us our current directory name.
		publicPath: '/', // specifies the public URL of the output directory when it's referenced in the browser.
		filename: 'bundle.js', // filename of our bundle. A file is not generated for development, but webpack requires this value so that our HTML can reference that's been served from memory
	},
	devServer: {
		// we are using webpack to  serve our app in development too, so we configure the server here. We could use Express instead.
		stats: 'minimal', // this reduces the information that it writes to the command line so we don't get a lot of 'noise' when it's running.
		overlay: true, // this tells it to overlay any errors that occur in the browser.
		historyApiFallback: true, // so all requests will be sent to index.html. THis way we can load deep links and they'll all be handled by React Router.
		disableHostCheck: true,
		headers: { 'Access-Control-Allow-Origin': '*' },
		https: false, // this last 3 lines are due to an open issue with chrome. Once it's resolved we can remove them.
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.API_URL': JSON.stringify('http://localhost3001'),
		}),
		new HtmlWebpackPlugin({
			// the one imported at the beggining of the file. It accepts an object to configure the plugin.
			template: 'src/index.html', // telling the plugin where to find our HTML template.
			favicon: 'src/favicon.ico', // and where to find this icon. A favicon (/ˈfæv.ɪˌkɒn/; short for favorite icon), also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons, associated with a particular website or web page.
		}),
	],
	module: {
		// we tell webpack what files we want it to handle, and we do that by declaring an array of rules.
		rules: [
			{
				test: /\.(js|jsx)$/, // how it can find the JavaScript files (.js or .jsx).
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'], // tell webpack what to do with this JS files. We want it to run Babel, so it will run it on all our JS and webpack will bundle that for us.
			},
			{
				test: /(\.css)$/,
				use: ['style-loader', 'css-loader'], // this combination will allow us to import CSS just like we do JS, and webpack will bundle all of our CSS into a single file.
			},
		],
	},
};
