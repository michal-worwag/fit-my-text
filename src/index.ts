import { Options } from './types/types';

const fitMyText = (
  elementSelector: string,
  { selectorType = 'single', min = 16, max = 512 }: Options
) => {
  if (elementSelector) {
    const getTextWidth = (txt: string, font: string) => {
      let element: HTMLCanvasElement;
      let context: CanvasRenderingContext2D;
      element = document.createElement('canvas');
      context = element.getContext('2d');
      if (context) {
        context.font = font;
        return context.measureText(txt).width;
      }
    };
    const calculateFont = (htmlElement: HTMLElement) => {
      const text = htmlElement.textContent;
      const fontSize = window.getComputedStyle(htmlElement).fontSize;
      const fontFamily = window.getComputedStyle(htmlElement).fontFamily;
      const elementWidth = window.getComputedStyle(htmlElement).width;

      const textWidth = Math.ceil(
        getTextWidth(text, `${fontSize} ${fontFamily}`)
      );

      const elementWidthInt = parseInt(
        elementWidth.substring(0, elementWidth.length - 2)
      );
      const fontSizeInt = parseInt(fontSize.substring(0, fontSize.length - 2));

      const calcFontSize = Math.floor(
        fontSizeInt / (textWidth / elementWidthInt)
      );

      let resizedFontSize: number;

      if (calcFontSize <= min) {
        resizedFontSize = min;
      } else if (calcFontSize >= max) {
        resizedFontSize = max;
      } else {
        resizedFontSize = calcFontSize;
      }

      if (textWidth > elementWidthInt) {
        htmlElement.style.fontSize = `${resizedFontSize}px`;
      } else if (textWidth < elementWidthInt) {
        htmlElement.style.fontSize = `${resizedFontSize}px`;
      } else htmlElement.style.fontSize = fontSize;
    };
    if (selectorType === 'multiple') {
      const htmlElements: NodeList = document.querySelectorAll(elementSelector);
      htmlElements.forEach((htmlElement: HTMLElement) => {
        calculateFont(htmlElement);
      });
    } else {
      const htmlElement: HTMLElement = document.querySelector(elementSelector);
      calculateFont(htmlElement);
    }
  }
};

export default fitMyText;
