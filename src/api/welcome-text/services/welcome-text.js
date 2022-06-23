'use strict';

/**
 * welcome-text service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-text.welcome-text');
