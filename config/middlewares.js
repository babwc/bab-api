module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",

  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [`${env("CLIENT")}`],
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
