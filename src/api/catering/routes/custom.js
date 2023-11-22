module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/caterings/send",
      handler: "catering.send",
      config: {
        auth: false,
      },
    },
  ],
};
