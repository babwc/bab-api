module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/products/:message",
      handler: "product.send",
      config: {
        auth: false,
      },
    },
  ],
};
