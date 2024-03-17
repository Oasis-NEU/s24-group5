import mongoose, {Document, Schema } from 'mongoose';

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
