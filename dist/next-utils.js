"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextHandler = exports.nextApp = exports.dev = exports.PORT = void 0;
var next_1 = __importDefault(require("next"));
exports.PORT = Number(process.env.PORT) || 3000;
exports.dev = process.env.NODE_ENV !== "production";
exports.nextApp = (0, next_1.default)({
    dev: exports.dev,
    port: exports.PORT,
});
exports.nextHandler = exports.nextApp.getRequestHandler();
