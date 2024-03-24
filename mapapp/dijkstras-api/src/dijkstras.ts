interface Neighbors {
  [name: string]: number;
}

/*
Note: The dijkstra function is a modified version of the algorithm found at https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

We need to now modify the algorithm depending whether a user wants to take the tunnel or wants the fastest route. 

Additionally, whenever we want to update the data points, we need to use the commands "npm run build"
and then "npm run seed" to send the data to the database.

I also want to see if we can hide my MongoDB password from the public.

-Aniket
*/

export default function dijkstra(
  graph: Record<string, Neighbors>,
  start: string,
  end: string
): string[] {
  const distances: Record<string, number> = {};
  const levels: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const queue: string[] = [];

  for (const vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      queue.unshift(vertex);
    } else {
      distances[vertex] = Infinity;
      queue.push(vertex);
    }
    previous[vertex] = null;
  }

  while (queue.length > 0) {
    const shortestVertex = queue
      .sort((a, b) => distances[a] - distances[b])
      .shift()!;
    for (const neighbor in graph[shortestVertex]) {
      const distance = graph[shortestVertex][neighbor];
      const alt = distances[shortestVertex] + distance;
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = shortestVertex;
      }
    }
  }

  const path: string[] = [];
  let current: string | null = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }
  return path;
}
