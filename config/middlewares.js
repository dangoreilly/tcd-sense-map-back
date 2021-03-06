module.exports = [
  'strapi::errors',
  { //replacing strapi::security
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'tcd-sense-map-assets.fra1.digitaloceanspaces.com/'],
          // 'media-src': ["'self'", 'data:', 'blob:', 'yourBucketName.s3.yourRegion.amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
