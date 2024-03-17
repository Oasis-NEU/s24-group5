import express from 'express';
import bodyParser from 'body-parser';
import db from './db';
import Location, {ILocation} from './Location';
import dijkstra from './dijkstras';



const app = express();
const PORT = 3000;

app.use(bodyParser.json());

interface Neighbors {
  [name: string]: number;

}

app.get('/locations', async (req, res) => {
  try {
    const locations = await Location.find();
    console.log('success fetching locations');
    res.json(locations);
  } catch(error) {
    console.log('Error fetching locations', error);
    res.status(500).json({error: 'Error fetching locations'});
  }
});

app.post('/calculate-path', async (req, res) => {
  const { startLocation, endLocation } = req.body;

  const locations: ILocation[] = await Location.find();
  const graph: Record<string, Neighbors> = {};

  locations.forEach((location) => {
    graph[location.name] = {};
    location.neighbors.forEach((neighbor) => {
      graph[location.name][neighbor.name] = neighbor.distance;
    });
  });

  const shortestPath = dijkstra(graph, startLocation, endLocation);
  res.json({ shortestPath });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});