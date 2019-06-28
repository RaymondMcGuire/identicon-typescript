module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: [
                // ts -> babel
                { loader: "babel-loader" },
                { loader: "ts-loader" }
            ],
            exclude: /node_modules/
        }]
    },
};