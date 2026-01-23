import VectorLayer from '../../../../src/ol/layer/Vector.js';
import Map from '../../../../src/ol/Map.js';
import VectorSource from '../../../../src/ol/source/Vector.js';
import View from '../../../../src/ol/View.js';
new Map({
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
  layers: [
    new VectorLayer({
      background: '#444',
      source: new VectorSource(),
    }),
  ],
});

render();