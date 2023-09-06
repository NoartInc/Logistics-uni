module.exports = {
    apps : [{
      name: "be-logistic-uni",
      script: "npm start",
      env: {
        PORT: 8001,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 8001,
        NODE_ENV: "production",
      }
    }]
}
