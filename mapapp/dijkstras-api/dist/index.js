"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const Location_1 = __importDefault(require("./Location"));
const dijkstras_1 = __importDefault(require("./dijkstras"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
app.get('/locations', async (req, res) => {
    try {
        const locations = await Location_1.default.find();
        console.log('success fetching locations');
        res.json(locations);
    }
    catch (error) {
        console.log('Error fetching locations', error);
        res.status(500).json({ error: 'Error fetching locations' });
    }
});
app.post('/calculate-path', async (req, res) => {
    const { startLocation, endLocation, goUnderground } = req.body;
    const locations = await Location_1.default.find();
    const graph = {};
    if (goUnderground) {
        locations.forEach((location) => {
            graph[location.name] = {};
            graph[location.floorLevel] = {};
            graph[location.isTunnelEntry.toString()] = {};
            location.neighbors.forEach((neighbor) => {
                if (neighbor.name.includes('Tunnel')) {
                    graph[location.name][neighbor.name] = 0;
                }
                else {
                    graph[location.name][neighbor.name] = neighbor.distance;
                }
            });
        });
    }
    else {
        locations.forEach((location) => {
            graph[location.name] = {};
            graph[location.floorLevel] = {};
            graph[location.isTunnelEntry.toString()] = {};
            location.neighbors.forEach((neighbor) => {
                graph[location.name][neighbor.name] = neighbor.distance;
            });
        });
    }
    const shortestPath = (0, dijkstras_1.default)(graph, startLocation, endLocation);
    res.json({ shortestPath });
});
db_1.default.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
//# sourceMappingURL=index.js.map