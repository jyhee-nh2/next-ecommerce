const path = require('path')

const nextConfig = {
  basePath: "/next-ecommerce",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;

/*
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
*/