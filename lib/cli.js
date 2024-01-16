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
        .then(({ text, textColor, logoShape, shapeColor }) => {
            let shape;

            switch (logoShape) {
                case "circle":
                    shape = new Circle(shapeColor);
                    break;
                case "square":
                    shape = new Square(shapeColor);
                    break;
                case "triangle":
                    shape = new Triangle(shapeColor);
                    break;
            }
           
            shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());

        });
    }
}

module.exports = CLI; 