/**
 * The Shape class represents a basic shape with a color attribute.
 * @class
 */
class Shape {
    /**
     * Creates an instance of the Shape class.
     * Initializes the color attribute to an empty string.
     * @constructor
     */
    constructor() {
      this.color = "";
    }
  
    /**
     * Sets the color attribute of the shape.
     * @param {string} color - The color to be set for the shape.
     */
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  
  