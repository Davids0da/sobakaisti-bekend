/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async findOne(ctx) {
      const { id } = ctx.params;
  
      const entity = await strapi.db.query('api::product.product').findOne({where: { slug: id }, populate: ['image']});
  
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    }
}));
