import mongoose, {Document, Schema } from 'mongoose';

export interface ICity extends Document {
  name: string;
  floorLevel: number;
  isTunnelEntry: boolean;
  neighbors: {
    name: string;
    distance: number;
  }[];
}

const citySchema = new mongoose.Schema<ICity>
({
  name: String,
  floorLevel: Number,
  isTunnelEntry: Boolean,
  neighbors: [{ name: String, distance: Number}]
});

const City = mongoose.model<ICity>('City', citySchema);

export default City;


/*import mongoose, {Document, Schema } from 'mongoose';

export interface ILocation extends Document {
  name: string;
  floorLevel: number;
  isTunnelEntry: boolean;
  neighbors: {
    name: string;
    distance: number;
  }[];
}

// Schema for the location
const locationSchema = new mongoose.Schema<ILocation>
({
  name: String,
  isTunnelEntry: Boolean,
  floorLevel: Number,
  neighbors: [{ name: String, distance: Number}]
});

const Location = mongoose.model<ILocation>('Location', locationSchema);

export default Location;
*/