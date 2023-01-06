"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fitMyText = (elementSelector, { selectorType = 'single', min = 16, max = 512 }) => {
    if (elementSelector) {
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
        const calculateFont = (htmlElement) => {
            const text = htmlElement.textContent;
            const fontSize = window.getComputedStyle(htmlElement).fontSize;
            const fontFamily = window.getComputedStyle(htmlElement).fontFamily;
            const elementWidth = window.getComputedStyle(htmlElement).width;
            const textWidth = Math.ceil(getTextWidth(text, `${fontSize} ${fontFamily}`));
            const elementWidthInt = parseInt(elementWidth.substring(0, elementWidth.length - 2));
            const fontSizeInt = parseInt(fontSize.substring(0, fontSize.length - 2));
            const calcFontSize = Math.floor(fontSizeInt / (textWidth / elementWidthInt));
            let resizedFontSize;
            if (calcFontSize <= min) {
                resizedFontSize = min;
            }
            else if (calcFontSize >= max) {
                resizedFontSize = max;
            }
            else {
                resizedFontSize = calcFontSize;
            }
            if (textWidth > elementWidthInt) {
                htmlElement.style.fontSize = `${resizedFontSize}px`;
            }
            else if (textWidth < elementWidthInt) {
                htmlElement.style.fontSize = `${resizedFontSize}px`;
            }
            else
                htmlElement.style.fontSize = fontSize;
        };
        if (selectorType === 'multiple') {
            const htmlElements = document.querySelectorAll(elementSelector);
            htmlElements.forEach((htmlElement) => {
                calculateFont(htmlElement);
            });
        }
        else {
            const htmlElement = document.querySelector(elementSelector);
            calculateFont(htmlElement);
        }
    }
};
exports.default = fitMyText;
