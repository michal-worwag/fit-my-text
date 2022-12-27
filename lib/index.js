"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fitMyText = void 0;
var fitMyText = function (elementId) {
    var htmlElement = document.getElementById(elementId);
    var getTextWidth = function (txt, font) {
        var element;
        var context;
        element = document.createElement('canvas');
        context = element.getContext('2d');
        if (context) {
            context.font = font;
            return context.measureText(txt).width;
        }
    };
    var text = htmlElement.textContent;
    var fontSize = window.getComputedStyle(htmlElement).fontSize;
    var fontFamily = window.getComputedStyle(htmlElement).fontFamily;
    var elementWidth = window.getComputedStyle(htmlElement).width;
    var textWidth = Math.ceil(getTextWidth(text, "".concat(fontSize, " ").concat(fontFamily)));
    var elementWidthInt = parseInt(elementWidth.substring(0, elementWidth.length - 2));
    var fontSizeInt = parseInt(fontSize.substring(0, fontSize.length - 2));
    var calcFontSize = Math.floor(fontSizeInt / (textWidth / elementWidthInt));
    if (textWidth > elementWidthInt) {
        htmlElement.style.fontSize = "".concat(calcFontSize, "px");
    }
    else if (textWidth < elementWidthInt) {
        htmlElement.style.fontSize = "".concat(calcFontSize, "px");
    }
    else
        htmlElement.style.fontSize = fontSize;
};
exports.fitMyText = fitMyText;
