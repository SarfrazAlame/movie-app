module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
         plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "@": "./", // maps '@' to the root directory
                    },
                    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
                },
            ],
        ],
    };
};