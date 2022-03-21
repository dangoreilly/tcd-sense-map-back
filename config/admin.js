module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2fb3ae08011574fa6576f26024dbefe6'),
  },
});
