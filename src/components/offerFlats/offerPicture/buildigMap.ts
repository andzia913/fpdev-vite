import groundFloor from './groundFloor';
import firstFloor from './firstFloor';
import secondFloor from './secondFloor';
import thirdFloor from './thirdFloor';

const buildingMap = {
  name: 'buildingMap',
  key: 'buildingMap',
  src: 'visualization.jpg',
  width:1400,
  height: 742,
  areas: [
    {
      id: "groundFloor",
      map: groundFloor,
      title: 'Parter',
      shape: 'poly',
      name: '1',
      href: '',
      fillColor: 'rgba(255,255,255,0.3)',
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [
        0, 621, 126, 444, 124, 432, 860, 387, 860, 395, 1239, 483, 1379, 456, 1383, 416, 1241, 434, 862, 363, 122, 387, -2, 503,
      ],
    },
    {
      id: "firstFloor",
      map: firstFloor,
      title: 'Pierwsze-piętro',
      shape: 'poly',
      name: '2',
      href: '',
      fillColor: 'rgba(255,255,255,0.3)',
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [
        1391, 365, 1383, 416, 1237, 434, 864, 363, 864, 363, 124, 387, -2, 501, 2, 385, 116, 330, 866, 328, 1249, 373],
      polygon: [
        [
          126.5323383084577,
          345.273631840796,
        ],
        [
          465.3383084577114,
          349.25373134328356,
        ],
        [
          520.0646766169153,
          393.0348258706467,
        ],
        [
          85.23880597014923,
          378.6069651741293,
        ],
      ],
    },
    {
      id: "secondFloor",
      map: secondFloor,
      title: 'Drugie-piętro',
      shape: 'poly',
      name: '3',
      href: '',
      fillColor: 'rgba(255,255,255,0.3)',
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [
        -2, 387, 0, 285, 114, 269, 866, 287, 1261, 312, 1398, 314, 1391, 367, 1249, 373, 869, 328, 120, 330],
      polygon: [
        [
          126.5323383084577,
          345.273631840796,
        ],
        [
          465.3383084577114,
          349.25373134328356,
        ],
        [
          520.0646766169153,
          393.0348258706467,
        ],
        [
          85.23880597014923,
          378.6069651741293,
        ]],
    },
    {
      id: "thirdFloor",
      map: thirdFloor,
      title: 'Trzecie-piętro',
      shape: 'poly',
      name: '4',
      href: '',
      fillColor: 'rgba(255,255,255,0.3)',
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [
        1398, 265, 1358, 185, 1245, 191, 1185, 196, 947, 211, 920, 230, 911, 221, 2, 149, -2, 285, 116, 269, 871, 287, 1261, 312, 1394, 312, 1398, 290],
      polygon: [
        [
          126.5323383084577,
          345.273631840796,
        ],
        [
          465.3383084577114,
          349.25373134328356,
        ],
        [
          520.0646766169153,
          393.0348258706467,
        ],
        [
          85.23880597014923,
          378.6069651741293,
        ]],
    },
  ],
};

export default buildingMap;

