const { pipeline, env } = require("@huggingface/transformers");
env.cacheDir = "./quoriel/ai/models";

async function textGeneration(model, messages, options) {
    try {
        env.allowRemoteModels = false;
        const generator = await pipeline("text-generation", model);
        const output = await generator(messages, options || {});
        return output || {};
    } catch {
        return {};
    }
}

async function translateText(model, message, from, to) {
    try {
        env.allowRemoteModels = false;
        const translator = await pipeline("translation", model);
        const output = await translator(message, {
            src_lang: from,
            tgt_lang: to
        });
        return output || {};
    } catch {
        return {};
    }
}

async function downloadModel(model, task) {
    try {
        env.allowRemoteModels = true;
        const _ = await pipeline(task, model);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    textGeneration,
    translateText,
    downloadModel
};