module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '091bd9e9d33b2801d42688fbf4db95a8'),
    },
  },
});
