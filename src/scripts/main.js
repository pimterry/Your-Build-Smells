// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  state = require('bespoke-state'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  notes = require('./bespoke-notes');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  bullets('ul.bullet li'),
  state(),
  scale(),
  hash(),
  notes()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

