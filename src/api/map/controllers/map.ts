/**
 * map controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::map.map',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async findOne(ctx) {
      const { id } = ctx.params;
  
      const entity = await strapi.db.query('api::map.map').findOne({where: { slug: id }, populate: ['markers']});
  
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    }
}));
