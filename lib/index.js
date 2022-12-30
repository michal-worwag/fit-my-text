"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fitMyText = void 0;
const fitMyText = (elementId) => {
    const htmlElement = document.getElementById(elementId);
    const getTextWidth = (txt, font) => {
        let element;
        let context;
        element = document.createElement('canvas');
        context = element.getContext('2d');
        if (context) {
            context.font = font;
            return context.measureText(txt).width;
        }
    };
    const text = htmlElement.textContent;
    const fontSize = window.getComputedStyle(htmlElement).fontSize;
    const fontFamily = window.getComputedStyle(htmlElement).fontFamily;
    const elementWidth = window.getComputedStyle(htmlElement).width;
    const textWidth = Math.ceil(getTextWidth(text, `${fontSize} ${fontFamily}`));
    const elementWidthInt = parseInt(elementWidth.substring(0, elementWidth.length - 2));
    const fontSizeInt = parseInt(fontSize.substring(0, fontSize.length - 2));
    const calcFontSize = Math.floor(fontSizeInt / (textWidth / elementWidthInt));
    if (textWidth > elementWidthInt) {
        htmlElement.style.fontSize = `${calcFontSize}px`;
    }
    else if (textWidth < elementWidthInt) {
        htmlElement.style.fontSize = `${calcFontSize}px`;
    }
    else
        htmlElement.style.fontSize = fontSize;
};
exports.fitMyText = fitMyText;
