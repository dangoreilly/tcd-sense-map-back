module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '59fb6613c992daffcee6c1df9408fb59'),
  },
});
