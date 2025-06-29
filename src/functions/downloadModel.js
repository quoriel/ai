const { NativeFunction, ArgType } = require("@tryforge/forgescript");
const { downloadModel } = require("../ai");

exports.default = new NativeFunction({
    name: "$downloadModel",
    version: "1.0.0",
    description: "Download and cache AI model from Hugging Face",
    output: ArgType.Boolean,
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "model",
            description: "Model name",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "task",
            description: "Model task type",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    async execute(ctx, [model, task]) {
        const result = await downloadModel(model, task);
        return this.success(result);
    }
});