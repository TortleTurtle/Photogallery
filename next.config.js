const env_variables = {
  strapi_url: process.env.STRAPI_URL,
  base_img_url: process.env.NEXT_PUBLIC_BASE_IMG_URL,
  next_url: `${process.env.NEXT_PUBLIC_URL}`
}

console.log("Next JS env variables:");
console.log(env_variables);

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['cheftags.nl', 'localhost', 'strapi-3o8lh.ondigitalocean.app', 'cheftags-space.ams3.digitaloceanspaces.com'],
  },
}