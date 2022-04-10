module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2c85ab3a81374956a2eb8621649bcbe6'),
  },
});
