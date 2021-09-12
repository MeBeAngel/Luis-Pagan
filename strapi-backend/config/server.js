module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd08fd43a44b44f61bf208ab2ceb1f4ef'),
    },
  },
});
