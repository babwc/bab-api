"use strict";

/**
 * catering-category controller
 */
console.log("test");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::catering-category.catering-category"
);
