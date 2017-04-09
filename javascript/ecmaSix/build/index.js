"use strict";

var _logger = require("./logger");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var x = 10; /* index.js */

console.log("x: " + x);

_logger2.default.debug("Check out the cool colors!");
_logger2.default.warn("We have a couple of different types of log methods");
_logger2.default.error("Try updating our logger.js so each type has different colors");