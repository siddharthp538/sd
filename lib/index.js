"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton';
//
// import { readFileSync } from 'fs'
//
// import {fs} from 'fs';
// import _         from 'lodash';
// or use better way
// import { map, uniq, tail } from 'lodash';
var file = _path.default.resolve(__dirname, './data/Allergy/allergies.json');

var output = (0, _fs.readFileSync)(file); // var output = fs.readFileSync('./someData.txt')

console.log(output);
console.log(JSON.parse(JSON.stringify(file)));