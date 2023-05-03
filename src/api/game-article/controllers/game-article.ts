/**
 * game-article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::game-article.game-article',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async findOne(ctx) {
      const { id } = ctx.params;
  
      const entity = await strapi.db.query('api::game-article.game-article').findOne({where: { slug: id }, populate: ['image']});
  
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    }
}));
