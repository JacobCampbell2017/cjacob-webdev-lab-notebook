# CSS Exercises

- [CSS Exercises](#css-exercises)
  - [ Exercise 01 - Selectors](#-exercise-01---selectors)
  - [ Exercise 02 - Pseudo](#-exercise-02---pseudo)
  - [ Exercise 03 - Specificity](#-exercise-03---specificity)
  - [ Exercise 04 - Layout](#-exercise-04---layout)
  - [ Exercise 05 - Position](#-exercise-05---position)
  - [ Exercise 06 - Media Queries](#-exercise-06---media-queries)

## <a id="ex01"></a> Exercise 01 - Selectors

Recreate the snapshot below by using attribute, descendant, child, and sibling selectors.

<img src="../../_assets/css-exercises/css-ex01-selectors.png" height=200 alt="screenshot of an exercise">

## <a id="ex02"></a> Exercise 02 - Pseudo

Recreate the snapshot below using pseudo elements.

<img src="../../_assets/css-exercises/css-ex02-pseudo.png" height=200 alt="screenshot of an exercise">

## <a id="ex03"></a> Exercise 03 - Specificity

Calculate the specificity of the rules below.

```css
nav .list-item > a {
}
0,1,2

#main::first-letter {
}
1,0,1

input[type] {
}
0,1,1
section .main::first-line {
}
0,1,2
nav ul.menu li#first a:not([class='visited']) {
}
1,2,4
div ol li ul li ol li ul li a {
}
0,0,10
```

## <a id="ex04"></a> Exercise 04 - Layout

Update the layout in the starter files to match the screenshots below.

<img src="../../_assets/css-exercises/css-ex04-layout-01.png" height=200 alt="screenshot of a layout">
<img src="../../_assets/css-exercises/css-ex04-layout-02.png" height=200 alt="screenshot of a layout">

## <a id="ex05"></a> Exercise 05 - Position

Update the layout in the starter files to match the screenshots below.

<img src="../../_assets/css-exercises/css-ex05-position-01.png" height=300 alt="screenshot of a layout">
<img src="../../_assets/css-exercises/css-ex05-position-02.png" height=300 alt="screenshot of a layout">

## <a id="ex06"></a> Exercise 06 - Media Queries

Update the layout in the starter files to match the screenshots below.

<img src="../../_assets/css-exercises/css-ex06-media-queries-01.png" height=200 alt="screenshot of a layout">
<img src="../../_assets/css-exercises/css-ex06-media-queries-02.png" height=200 alt="screenshot of a layout">
<img src="../../_assets/css-exercises/css-ex06-media-queries-03.png" height=200 alt="screenshot of a layout">
