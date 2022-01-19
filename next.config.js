const env_variables = {
  strapi_url: process.env.STRAPI_URL,
  public_strapi_url: process.env.NEXT_PUBLIC_STRAPI_URL,
  next_domain: process.env.NEXT_PUBLIC_DOMAIN,
  image_domain: process.env.IMG_DOMAIN,
  base_path: process.env.BASE_PATH
}

const domains = (process.env.IMG_DOMAIN) ? [process.env.IMG_DOMAIN] : ['localhost'];
console.log("Next JS env variables:");
console.log(env_variables);

module.exports = {
  reactStrictMode: true,
  images: {
    domains: domains,
  },
  basePath: process.env.BASE_PATH,
}