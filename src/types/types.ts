enum SelectorType {
  Single = 'single',
  Multiple = 'multiple',
}

export interface Options {
  slectorType: SelectorType;
  min: number;
  max: number;
}
