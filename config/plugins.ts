
module.exports = ({ env }) => {
  return {
    email: {
      config: {
        provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'sodakolor@gmail.com',
          defaultReplyTo: 'sodakolor@gmail.com',
        },
      },
    },
  }
};
