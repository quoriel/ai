const { NativeFunction, ArgType } = require("@tryforge/forgescript");
const { translateText } = require("../ai");

exports.default = new NativeFunction({
    name: "$translateText",
    version: "1.0.0",
    description: "Translate text using AI model",
    output: ArgType.Json,
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "model",
            description: "Translation model name",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "message",
            description: "Text to translate",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "from",
            description: "Source language code",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "to",
            description: "Target language code",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    async execute(ctx, [model, message, from, to]) {
        const result = await translateText(model, message, from, to);
        return this.successJSON(result);
    }
});