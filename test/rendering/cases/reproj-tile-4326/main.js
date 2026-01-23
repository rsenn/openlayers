import TileLayer from '../../../../src/ol/layer/Tile.js';
import Map from '../../../../src/ol/Map.js';
import { get } from '../../../../src/ol/proj.js';
import { toLonLat } from '../../../../src/ol/proj.js';
import XYZ from '../../../../src/ol/source/XYZ.js';
import { createForProjection } from '../../../../src/ol/tilegrid.js';
import { createXYZ } from '../../../../src/ol/tilegrid.js';
import View from '../../../../src/ol/View.js';

const tileGrid = createXYZ();
const extent = tileGrid.getTileCoordExtent([5, 5, 12]);
const center = [(extent[0] + extent[2]) / 2, extent[1]];

const source = new XYZ({
  transition: 0,
  minZoom: 5,
  maxZoom: 5,
  url: '/data/tiles/osm/{z}/{x}/{y}.png',
});

source.setTileGridForProjection(
  get('EPSG:4326'),
  createForProjection(get('EPSG:4326'), 7, [64, 64]),
);

new Map({
  pixelRatio: 1,
  target: 'map',
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
  view: new View({
    projection: 'EPSG:4326',
    center: toLonLat(center),
    zoom: 5,
  }),
});

render();