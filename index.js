const cron = require("node-cron");
const express = require("express");

const emailer = require("./mailer");
const weather = require ("./weather");

app = express();

/**
 * Schedule task to be run on the server.
 */
cron.schedule("0 15 * * *", async () => {
  console.log("---------------------");
  console.log("Running Cron Job");

  /**
   * Get the weather data and calculate the figures you need.
   */
  const targetWeather = weather.getTargetWeather();
  const compareWeather = weather.getCompareWeather();

  /**
   * When both Promises resolve, log the data for now.
   */
  Promise.all([targetWeather, compareWeather])
    .then((targetWeatherData, compareWeatherData) => {
      console.log(targetWeatherData);
      console.log(compareWeatherData);

      /**
       * Process the weather data
       */
      const emailWeatherData = await weather.getDailyWeatherEmailData(targetWeatherData, compareWeatherData);

      /**
       * Prepare the email with the weather data, then send it.
       */
      const emailData = emailer.prepareEmail(emailWeatherData);
      const res = await emailer.sendEmail(emailData);

      /**
       * Log the response from the mailer
       */
      logger.info(`Successfully sent email: ${res}`);
    })
    .catch((e) => {
      /**
       * Console and log the error for now.
       */
      logger.error(JSON.stringify(e));
      console.log(e);
    });
});

app.listen("3128");


