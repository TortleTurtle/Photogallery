const env_variables = {
  strapi_url: process.env.STRAPI_URL,
  public_strapi_url: process.env.NEXT_PUBLIC_STRAPI_URL,
  next_url: `${process.env.NEXT_PUBLIC_URL}`,
  image_domain: process.env.APP_URL,
  base_path: process.env.BASE_PATH
}

const domains = (process.env.APP_URL) ? [process.env.APP_URL] : ['localhost'];
console.log("Next JS env variables:");
console.log(env_variables);

module.exports = {
  reactStrictMode: false,
  images: {
    domains: domains,
  },
}