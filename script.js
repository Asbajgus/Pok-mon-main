// Import the MVC components
import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

// Initialize the MVC components
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

// Start the application
controller.init();
