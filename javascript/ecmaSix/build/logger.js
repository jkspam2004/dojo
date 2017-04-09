"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsLogger = require("js-logger");

var _jsLogger2 = _interopRequireDefault(_jsLogger);

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jsLogger2.default.useDefaults({
    formatter: function formatter(messages, context) {
        messages.map(function (value, index) {
            if (typeof value == 'string') {
                var color = '';
                switch (context.level.name) {
                    case "WARN":
                        color = value.yellow;
                        break;
                    case "DEBUG":
                        color = value.cyan;
                        break;
                    default:
                        color = value.red;
                }
                return messages[index] = color;
            }
            return;
        });
        messages.unshift(new Date().toLocaleTimeString().white);
    }
});
exports.default = _jsLogger2.default;