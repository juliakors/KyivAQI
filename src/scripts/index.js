console.log('It works');

// import * as ee from '@google/earthengine';
// import * as privateKey from '../../privatekey.json';
// // import * as googleapis from 'googleapis';

// console.log(ee);
// console.log(privateKey);

// ee.data.authenticateViaOauth('e1454a7d084ae8e70c7fe075b6f810fcde5711e9');
// ee.data.authenticateViaPrivateKey(privateKey);

// ee.initialize();

// // Run an Earth Engine script.
// var image = new ee.Image('srtm90_v4');
// image.getMap({min: 0, max: 1000}, function(map) {
//   //console.log(map);
// });

$('input[name="dates"]').daterangepicker();