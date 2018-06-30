module.exports = {
  apps: [
    {
      name: "siteshots",
      script: "./app.js",
      node_args: ["--inspect"],
      instances: "max",
      autorestart: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
