enum SelectorType {
  Single = 'single',
  Multiple = 'multiple',
}

export interface Options {
  selectorType: SelectorType;
  min: number;
  max: number;
}
