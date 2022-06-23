'use strict';

/**
 *  welcome-text controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::welcome-text.welcome-text');
