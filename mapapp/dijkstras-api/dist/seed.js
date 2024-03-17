"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = __importDefault(require("./City"));
const db_1 = __importDefault(require("./db"));
db_1.default.once('open', async () => {
    await City_1.default.deleteMany();
    const cities = [
        {
            name: 'East Village',
            floorLevel: 1,
            isTunnelEntry: false,
            neighbors: [
                { name: 'Hurtig Hall', distance: 256 },
                { name: 'Mugar Life Sciences Building', distance: 315 }
            ],
        },
        {
            name: 'Hurtig Hall',
            floorLevel: 1,
            isTunnelEntry: false,
            neighbors: [
                { name: 'East Village', distance: 256 },
                { name: 'Mugar Life Sciences Building', distance: 108 }
            ],
        },
        {
            name: 'Mugar Life Sciences Building',
            floorLevel: 1,
            isTunnelEntry: true,
            neighbors: [
                { name: 'East Village', distance: 315 },
                { name: 'Hurtig Hall', distance: 108 },
                { name: 'Dodge Hall', distance: 280 },
                { name: 'Ell Hall', distance: 75 }
            ],
        },
        {
            name: 'Dodge Hall',
            floorLevel: 1,
            isTunnelEntry: true,
            neighbors: [
                { name: 'Mugar Life Sciences Building', distance: 280 },
                { name: 'Ell Hall', distance: 50 }
            ],
        },
        {
            name: 'Ell Hall',
            floorLevel: 1,
            isTunnelEntry: true,
            neighbors: [
                { name: 'Mugar Life Sciences Building', distance: 75 },
                { name: 'Dodge Hall', distance: 50 },
                { name: 'Curry Student Center', distance: 350 },
                { name: 'Hayden Hall', distance: 253 }
            ],
        },
        {
            name: 'Curry Student Center',
            floorLevel: 1,
            isTunnelEntry: true,
            neighbors: [
                { name: 'Ell Hall', distance: 350 },
                { name: 'Hayden Hall', distance: 110 },
                { name: 'Snell Library', distance: 130 }
            ],
        },
        {
            name: 'Hayden Hall',
            floorLevel: 1,
            isTunnelEntry: true,
            neighbors: [
                { name: 'Curry Student Center', distance: 110 },
                { name: 'Ell Hall', distance: 253 },
                { name: 'Snell Library', distance: 270 }
            ],
        },
        {
            name: 'Snell Library',
            floorLevel: 1,
            isTunnelEntry: true,
            neighbors: [
                { name: 'Curry Student Center', distance: 130 },
                { name: 'Hayden Hall', distance: 270 }
            ],
        },
    ];
    await City_1.default.insertMany(cities);
    console.log('Example data inserted.');
    process.exit();
});
//# sourceMappingURL=seed.js.map