module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/products/send",
      handler: "product.send",
      config: {
        auth: false,
      },
    },
  ],
};
