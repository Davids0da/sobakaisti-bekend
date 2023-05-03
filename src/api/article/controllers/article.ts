/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::article.article').findOne({where: { slug: id }, populate: ['article_image','user','comments','tags']});

    await strapi.query("api::article.article").update({
      where: { slug: id },
      data: {
        views: entity.views + 1
      }
    })


    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
