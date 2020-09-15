module.exports = {
   port: process.env.PORT,
   jwtSecret: process.env.JWT_SECRET,
   mongoUri: process.env.MONGODB_URI,
   baseUrl: process.env.BASE_URL,
};
