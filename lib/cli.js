const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");


class CLI {
    run() {
        return inquirer 
        .prompt([
            {
                name: "text",
                type: "input",
                message: "Enter text for the logo. (Must not be more than 3 characters.)",
                validate: (text) => 
                text.length <=  3 || "The message must not contain more than 3 characters",
            }, 
            {
                name: "textColor",
                type: "input",
                message: "Enter a text color",
            },
            {
                name: "logoShape",
                type: "list",
                message: "Select a shape for the logo",
                choices: ["circle", "square", "triangle"]
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color"
            }
        ])
        /**
 * Handles the callback function executed after obtaining user input.
 * It creates a shape based on user-selected parameters.
 * @param {Object} params - Destructured parameters from user input, including text, textColor, logoShape, and shapeColor.
 */
.then(({ text, textColor, logoShape, shapeColor }) => {
    // Initialize a variable to store the created shape.
    let shape;

    // Determine the shape type based on user-selected logoShape.
    switch (logoShape) {
        case "circle":
            // Create a new Circle instance with the specified shapeColor.
            shape = new Circle(shapeColor);
            break;
        case "square":
            // Create a new Square instance with the specified shapeColor.
            shape = new Square(shapeColor);
            break;
        case "triangle":
            // Create a new Triangle instance with the specified shapeColor.
            shape = new Triangle(shapeColor);
            break;
    }
    // At this point, 'shape' holds the created shape based on user input.
            shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());

        });
    }
}

module.exports = CLI; 