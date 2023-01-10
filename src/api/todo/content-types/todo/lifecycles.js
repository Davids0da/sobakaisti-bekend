module.exports = {
  async afterCreate(event) {
    console.log('debil')
    const { result } = event;
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'sodakolor@gmail.com',
        from: 'sodakolor@gmail.com',
        subject: 'You have a new TODO',
        text: 'Your todo is: ${result.name}'
      })
    } catch(err) {
      console.log(err);
    }
  }
}
