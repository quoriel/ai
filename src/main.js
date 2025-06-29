const { ForgeExtension } = require("@tryforge/forgescript");
const pkg = require("../package.json");

class QuorielAI extends ForgeExtension {
    name = "QuorielAI";
    description = pkg.description;
    version = pkg.version;

    init() {
        this.load(__dirname + "/functions");
    }
}

exports.QuorielAI = QuorielAI;