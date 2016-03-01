'use strict';

require('babel-core/register'); // This starts up the babel runtime parser
require('babel-polyfill'); // This provides the extra es6 items like Promises and Array methods
require('./app'); // Starts up the app be requiring our `index.js.
