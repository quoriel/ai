# QuorielAI
...

## Installation
```
npm i github:quoriel/ai @huggingface/transformers
```

## Connection
```js
const { ForgeClient } = require("@tryforge/forgescript");
const { QuorielAI } = require("@quoriel/ai");

const client = new ForgeClient({
    extensions: [
        new QuorielAI()
    ]
});

client.login("...");
```

HF_TOKEN=hf_your_token_here