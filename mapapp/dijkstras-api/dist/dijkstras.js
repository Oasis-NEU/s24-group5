"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dijkstra(graph, start, end, goUnderground) {
    const distances = {};
    const previous = {};
    const queue = [];
    if (!goUnderground) {
        for (const vertex in graph) {
            if (vertex === start) {
                distances[vertex] = 0;
                queue.unshift(vertex);
            }
            else {
                distances[vertex] = Infinity;
                queue.push(vertex);
            }
            previous[vertex] = null;
        }
        while (queue.length > 0) {
            const shortestVertex = queue.sort((a, b) => distances[a] - distances[b]).shift();
            for (const neighbor in graph[shortestVertex]) {
                const distance = graph[shortestVertex][neighbor];
                const alt = distances[shortestVertex] + distance;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = shortestVertex;
                }
            }
        }
        const path = [];
        let current = end;
        while (current) {
            path.unshift(current);
            current = previous[current];
        }
        return path;
    }
    else {
        return [];
    }
}
exports.default = dijkstra;
//# sourceMappingURL=dijkstras.js.map