import { createGlobalStyle } from 'styled-components';

export const Colors = {
  mainBlue: '#003152',
  white: "#EEF9FF",
  darkGreenColor: "#067532",
  lightGreenColor: "#1DFC72",
  semiDarkGreenColor: "#00C045",
  midBlueColor: "#008BDF",
  openedMenuColor: "#005E95",
  newColor1: "#1C8394",
  newColor2: "#154B52",
  newColor3: "#000B0D",
  newColor4: "#390D02",
  newColor5: "#A52502",
  textColor: "#EFEFEF",
  backsideCard: "#E6E6E6"
};

export const Spacing = {
  xsmall: '0.5rem',
  small: '1.5rem',
  medium: '2.5rem',
  large: '3.5rem',
  xlarge: '4.5rem'
};

export const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
html{
  scroll-behavior: smooth;
  font-size: 62.5%;
}

*, *::before, *::after {
  box-sizing: border-box;
  font-family: "Lato",sans-serif;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: ${Colors.newColor1};
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}`;