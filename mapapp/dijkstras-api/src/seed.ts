import Location from './Location';
import db from './db';

db.once('open', async () => {
 await Location.deleteMany();

 //Record distance in feet!
 const locations = [
   {
     name: 'East Village',
     floorLevel:1,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Hurtig Hall', distance: 256 },
       { name: 'Mugar Life Sciences Building', distance: 315 },
       { name: 'Cullinane Hall', distance: 30},
     ],
   },
   {
     name: 'Hurtig Hall',
     floorLevel:1,
     isTunnelEntry: false,
     neighbors: [
       { name: 'East Village', distance: 256 },
       { name: 'Mugar Life Sciences Building', distance: 108 },
       { name: 'Cullinane Hall', distance: 20},
     ],
   },
   {
     name: 'Mugar Life Sciences Building',
     floorLevel:1,
     isTunnelEntry: true,
     neighbors: [
       { name: 'Mugar Hall Tunnel', distance: 0},
       { name: 'East Village', distance: 315 },
       { name: 'Hurtig Hall', distance: 108 },
       { name: 'Dodge Hall', distance: 280 },
       { name: 'Ell Hall', distance: 75 },
       { name: 'Cullinane Hall', distance: 50},
     ],
   },
   {
     name: 'Dodge Hall',
     floorLevel:1,
     isTunnelEntry: true,
     neighbors: [
       { name: 'Dodge Hall Tunnel', distance: 0},
       { name: 'Mugar Life Sciences Building', distance: 280},
       { name: 'Ell Hall', distance: 50}
     ],
   },
   {
     name: 'Ell Hall',
     floorLevel:1,
     isTunnelEntry: true,
     neighbors: [
       { name: 'Ell Hall Tunnel', distance: 0},
       { name: 'Mugar Life Sciences Building', distance: 75},
       { name: 'Dodge Hall', distance: 50},
       { name: 'Curry Student Center', distance: 350},
       { name: 'Hayden Hall', distance: 253}
     ],
   },
   {
     name: 'Curry Student Center',
     floorLevel:1,
     isTunnelEntry: true,
     neighbors: [
       { name: 'Curry Student Center Tunnel', distance: 0},
       { name: 'Ell Hall', distance: 350},
       { name: 'Hayden Hall', distance: 110},
       { name: 'Snell Library', distance: 130},
       { name: 'Churchill Hall', distance: 120},
     ],
   },
   {
     name: 'Hayden Hall',
     floorLevel:1,
     isTunnelEntry: true,
     neighbors: [
       { name: 'Hayden Hall Tunnel', distance: 0},
       { name: 'Curry Student Center', distance: 110},
       { name: 'Ell Hall', distance: 253},
       { name: 'Snell Library', distance: 270}
     ],
   },
   {
     name: 'Snell Library',
     floorLevel:1,
     isTunnelEntry: true,
     neighbors: [
       { name: 'Snell Library Tunnel', distance: 0},
       { name: 'Curry Student Center', distance: 130},
       { name: 'Hayden Hall', distance: 270},
       { name: 'Snell Engineering', distance: 30}
     ],
   },
   {
     name: 'Mugar Hall Tunnel',//done
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Mugar Life Sciences Building', distance: 0},
       { name: 'Dodge Hall Tunnel', distance: 80},
       { name: 'Ell Hall Tunnel', distance: 60}
     ],
   },
   {
     name: 'Dodge Hall Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Dodge Hall', distance: 0},
       { name: 'Mugar Hall Tunnel', distance: 50},
       { name: 'Ell Hall Tunnel', distance: 60}
     ],
   },
   {
     name: 'Ell Hall Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Ell Hall', distance: 0},
       { name: 'Richards Hall Tunnel', distance: 150},
       { name: 'Cabot Gym Tunnel', distance: 225},
       { name: 'Hayden Hall Tunnel', distance: 70},
       { name: 'Dodge Hall Tunnel', distance: 60},
       { name: 'Mugar Hall Tunnel', distance: 60},
       { name: 'Curry Student Center Hall Tunnel', distance: 180}
     ],
   },
   {
     name: 'Curry Student Center Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Curry Student Center', distance: 0},
       { name: 'Ell Hall Tunnel', distance: 180}
     ],
   },
   {
     name: 'Richards Hall Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Richards Hall', distance: 0},
       { name: 'Ell Hall Tunnel', distance: 150},
       { name: 'Cabot Gym Tunnel', distance: 220},
       { name: 'Hayden Hall Tunnel', distance: 110},
     ],
   },
   {
     name: 'Hayden Hall Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Hayden Hall', distance: 0},
       { name: 'Cabot Gym Tunnel', distance: 200},
       { name: 'Ell Hall Tunnel', distance: 70},
       { name: 'Churchill Hall Tunnel', distance: 40},
       { name: 'Snell Library Tunnel', distance: 125},
     ],
   },
   {
     name: 'Churchill Hall Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Churchill Hall', distance:0},
       { name: 'Hayden Hall Tunnel', distance: 40},
       { name: 'Snell Library Tunnel', distance: 100},
       { name: 'Forsyth Hall Tunnel', distance: 50},
     ],
   },
   {
     name: 'Cabot Gym Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Cabot Gym', distance: 0},
       { name: 'Hayden Hall Tunnel', distance: 200},
       { name: 'Richards Hall Tunnel', distance: 220},
       { name: 'Ell Hall Tunnel', distance: 225},
     ],
   },
   {
     name: 'Forsyth Hall Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Forsyth Hall', distance: 130},
       { name: 'Churchill Hall Tunnel', distance: 50},
       { name: 'Snell Engineering Tunnel', distance: 80},
     ],
   },
   {
     name: 'Snell Engineering Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Snell Engineering', distance:0},
       { name: 'Forsyth Hall', distance: 80},
     ],
   },
   {
     name: 'Snell Library Tunnel',
     floorLevel:0,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Snell Library', distance: 0},
       { name: 'Churchill Hall Tunnel', distance: 100},
       { name: 'Hayden Hall Tunnel', distance: 125},
     ],
   },
   {
     name: 'Cullinane Hall',
     floorLevel:1,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Mugar Life Sciences Building', distance: 50},
       { name: 'East Village', distance: 30},
       { name: 'Hurtig Hall', distance: 20},
     ],
   },
   {
     name: 'Churchill Hall',
     floorLevel:1,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Churchill Hall Tunnel', distance:0},
       { name: 'Cabot Gym', distance: 50},
       { name: 'Forsyth Hall', distance: 10},
       { name: 'Snell Engineering', distance: 20},
       { name: 'Snell Library', distance: 30},
       { name: 'Curry Student Center', distance: 120},
     ],
   },
   {
     name: 'Cabot Gym',
     floorLevel:1,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Cabot Gym Tunnel', distance:0},
       { name: 'Churchill Hall', distance: 50},
       { name: 'Forsyth Hall', distance: 10},
     ],
   },
   {
     name: 'Forsyth Hall',
     floorLevel:1,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Cabot Gym', distance: 10},
       { name: 'Churchill Hall', distance: 10},
       { name: 'Snell Engineering', distance: 20},
       { name: 'Snell Library', distance: 25},
     ],
   },
   {
     name: 'Snell Engineering',
     floorLevel:1,
     isTunnelEntry: false,
     neighbors: [
       { name: 'Cabot Gym', distance: 50},
       { name: 'Forsyth Hall', distance: 20},
       { name: 'Churchill Hall', distance: 20},
       { name: 'Snell Library', distance: 25},
     ],
   },
   
   
   

 ];

 await Location.insertMany(locations);

 console.log('Example data inserted.');
 process.exit();
});