const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './\src/main.js', //entrada del mian de js de nuestro código
    output: { //salida
        path: __dirname + '/dist', // Saldrá en una carpeta llamada dist 
        filename: 'bundle.js' // Saldrá en un archillo llamado bundle.js
    },
    module: {
        rules: [{
                test: /\.css$/i, // para que webpack entienda css
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i, // Regla para que webpack entienda sass
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // para que webpack entienda html
            template: './src/index.html'
        })
    ]
};