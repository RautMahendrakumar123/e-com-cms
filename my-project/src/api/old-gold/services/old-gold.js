'use strict';

/**
 * old-gold service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::old-gold.old-gold');
