module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4e2bf0607e2175e462b153e8f7eb6b5e'),
    },
  },
});
