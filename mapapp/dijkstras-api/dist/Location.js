"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const locationSchema = new mongoose_1.default.Schema({
    name: String,
    isTunnelEntry: Boolean,
    floorLevel: Number,
    neighbors: [{ name: String, distance: Number }]
});
const Location = mongoose_1.default.model('Location', locationSchema);
exports.default = Location;
//# sourceMappingURL=Location.js.map