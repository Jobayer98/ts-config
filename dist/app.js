"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
async function createServer() {
    const app = (0, express_1.default)();
    const PORT = 3000;
    app.use((0, cors_1.default)(), express_1.default.json());
    await graphql_1.default.start();
    app.use("/graphql", (0, express4_1.expressMiddleware)(graphql_1.default));
    app.listen(PORT, () => {
        console.log(`Graphql is running on http://localhost:${PORT}`);
    });
}
createServer();
