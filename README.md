# Summary

A package that allows you to adjust the text to the width of the container. Decreases or increases the font size to fit the text in the container.

### Install via NPM

```
  npm install fit-my-text
```

### Usage

```
  import fitMyText from 'fit-my-text';

  fitMyText(element, options);
```

### Options

| Option       | Default | Description                                            |
| ------------ | ------- | ------------------------------------------------------ |
| element      |         | querySelector for element (required)                   |
| min          | 16      | The minimum font size in pixels                        |
| max          | 512     | The maximum font size in pixels                        |
| selectorType | single  | Defines if you use single element or multiple elements |

#### Options object

```
{
  min: 16,
  max: 512,
  selectorType: 'single'
}
```
