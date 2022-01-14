const config = {
  strapi_url: process.env.STRAPI_URL,
  public_strapi_url: process.env.NEXT_PUBLIC_STRAPI_URL,
  domain: process.env.NEXT_PUBLIC_DOMAIN
}

console.log("Next JS env variables:");
console.log(config);

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}