const PresetEnv = require("postcss-preset-env");
const PostcssApply = require("postcss-apply");


module.exports = {
    plugins: [
        PresetEnv({
            stage: 0,
            preserve: false,
            insertBefore: {
                "postcss-apply": PostcssApply({
                    preserve: false,
                })
            },
        })
    ]
}