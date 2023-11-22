module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/catering/:message",
      handler: "catering.sendMessage",
      config: {
        auth: false,
      },
    },
  ],
};
