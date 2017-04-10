"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* dom.js */

var Dom = function () {
    function Dom(defaultColor, secondaryColor) {
        _classCallCheck(this, Dom);

        this.element = document.createElement("div");
        this.defaultColor = defaultColor;
        this.secondaryColor = secondaryColor;
    }

    _createClass(Dom, [{
        key: "addStyle",
        value: function addStyle() {}
    }, {
        key: "addClickEvent",
        value: function addClickEvent() {}
    }, {
        key: "addHoverInEvent",
        value: function addHoverInEvent() {}
    }, {
        key: "addHoverOutEvent",
        value: function addHoverOutEvent() {}
    }, {
        key: "addToHtmlBody",
        value: function addToHtmlBody() {}
    }]);

    return Dom;
}();

new Dom("pink", "blue");