const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    entry: path.join(__dirname, "./src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.[contenthash].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts"],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@mocks": path.resolve(__dirname, "mocks"),
            "@pages": path.resolve(__dirname, "src/pages"),
        },
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new ModuleFederationPlugin({
            name: "Host",
            remotes: {
                Catalog: "Catalog@https://simple-microservice-catalog.netlify.app/catalog.js",
            },
        }),
    ],
    devServer: {
        watchFiles: path.join(__dirname, "src"),
        port: 3051,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
    },
};
