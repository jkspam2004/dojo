"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* dom.js */

/* var insertedNode = parentNode.insertBefore(newNode, referenceNode); */
var Dom = function () {
    function Dom(defaultColor, secondaryColor) {
        _classCallCheck(this, Dom);

        this.element = document.createElement("div");
        this.defaultColor = defaultColor;
        this.secondaryColor = secondaryColor;

        this.addStyle();
        this.addClickEvent();
        this.addHoverInEvent();
        this.addHoverOutEvent();
        this.addToHtmlBody();
    }
    /* set box background color to default */


    _createClass(Dom, [{
        key: "addStyle",
        value: function addStyle() {
            this.element.style.border = "1px solid black";
            this.element.style.height = "200px";
            this.element.style.width = "200px";
            this.element.style.backgroundColor = this.defaultColor;
            this.element.style.margin = "0px auto";
            this.element.style.textAlign = "center";
            this.element.style.lineHeight = "180px";
        }
        /* clicking on box alerts the box has been clicked */

    }, {
        key: "addClickEvent",
        value: function addClickEvent() {
            this.element.addEventListener("click", function () {
                alert("Div has been clicked");
            });
        }
        /* on hover in, box background color is blue */

    }, {
        key: "addHoverInEvent",
        value: function addHoverInEvent() {
            var _this = this;

            this.element.addEventListener("mouseenter", function () {
                _this.element.style.backgroundColor = _this.secondaryColor;
            });
        }
        /* on hover out, box background color is pink */

    }, {
        key: "addHoverOutEvent",
        value: function addHoverOutEvent() {
            var _this2 = this;

            this.element.addEventListener("mouseleave", function () {
                _this2.element.style.backgroundColor = _this2.defaultColor;
            });
        }
        /* add div to body */

    }, {
        key: "addToHtmlBody",
        value: function addToHtmlBody() {
            this.element.appendChild(document.createTextNode("Div"));
            document.body.insertBefore(this.element, document.body.firstChild);
        }
    }]);

    return Dom;
}();

var x = new Dom("pink", "blue");