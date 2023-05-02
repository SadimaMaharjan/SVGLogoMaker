# SVGLogoMaker

## Description

A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

A walkthrough video demonstrating the functionality of the application is given below:

[Click here to watch walkthroughvideo]()

The application will be invoked by using the following command:

```bash
node index.js
```

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following images show the web application's appearance and functionality:

![SVGMaker Terminal](./images/terminal-screenshot.png)

![SVG File](./images/svg-logo-file.png)

![SVG logo created](./images/logo-mockup.png)

![Tests](./images/tests.png)
