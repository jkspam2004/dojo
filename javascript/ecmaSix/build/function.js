"use strict";

var _logger = require("./logger");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* default parameter. set default parameter in the input */
function hello() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "oscar";

    _logger2.default.debug(name);
} /* function.js */

hello(); // oscar
hello("goose"); // goose

/*  spread parameters: pass in optional parameters, becomes an array  */
function spreadExample() {
    for (var _len = arguments.length, spread = Array(_len), _key = 0; _key < _len; _key++) {
        spread[_key] = arguments[_key];
    }

    _logger2.default.debug(spread);
    spread.forEach(function (value) {
        //logger.warn(value);
    });
}
spreadExample(1, 2, 3, 4);
spreadExample(31, 1);

/* arrow function: anonymous function: (e) => { statements }. e is an input parameter to the function. don't need paren if one input */
function parentFunction(name, language) {
    var _this = this;

    this.name = name;
    //this.language = language;
    //var childFunction = e => { console.log(this.name); console.log(this.language); }
    var childFunction = function childFunction(lang) {
        console.log(_this.name);console.log(lang);
    };
    return childFunction(language);
}
var x = new parentFunction("oscar", "javascript"); //Output: oscar, javascript

var arr = [1, 3, 4, 6, 7];
arr = arr.map(function (v) {
    return v * 2;
});
console.log(arr);