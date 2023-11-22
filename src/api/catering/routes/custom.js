module.exports = {
  routes: [
    {
      method: "POST",
      path: "/catering/:message",
      handler: "catering.sendMessage",
      config: {
        auth: false,
      },
    },
  ],
};
