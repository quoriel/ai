const { NativeFunction, ArgType } = require("@tryforge/forgescript");
const { textGeneration } = require("../ai");

exports.default = new NativeFunction({
    name: "$textGeneration",
    version: "1.0.0",
    description: "Generate text using AI model",
    output: ArgType.Json,
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "model",
            description: "Text generation model name",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "messages",
            description: "Input text or chat messages array",
            type: ArgType.Json,
            required: true,
            rest: false
        },
        {
            name: "options",
            description: "Generation options",
            type: ArgType.Json,
            rest: false
        }
    ],
    async execute(ctx, [model, messages, options]) {
        const result = await textGeneration(model, messages, options);
        return this.successJSON(result);
    }
});