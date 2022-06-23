'use strict';

/**
 * welcome-text router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::welcome-text.welcome-text');
