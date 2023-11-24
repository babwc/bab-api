"use strict";

/**
 * notifications service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::notifications.notifications");
