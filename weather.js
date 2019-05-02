import axios from 'axios';

const Weather = () => {
  /**
   * Want to use async/await? Add the `async` keyword to your outer function/method.
   *
   * @param {*} location - Place where
   */

	const api = {};

	// Private Methods
  const getHumidityDiff = () => {
		let humidityDiff;

		return humidityDiff;
  }

	const getTempDiff = () => {
		let tempDiff;

		return tempDiff;
	}


	// Public API Methods
	/**
	 * Gets weather from a weather API for a location
	 *
	 * @param {object} locationId - Location id to use to get daily weather forecast data for.
	 */
  api.getWeather = async function getWeather(locationId) {
    try {
      const weatherAPIURL = `${config.application.weatherAPIURL}${locationId}`

      const response = await axios.get(weatherAPIURL);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

	/**
	 * Gets weather for LA by returning a call to api.getWeather();
	 */
	api.getTargetWeather = async function getTargetWeather() {
    return getWeather(config.application.targetLocationId);
  }

	/**
	 * Gets weather for the comparison location by returning a call to api.getWeather();
	 */
  api.getCompareWeather = async function getCompareWeather() {
    return getWeather(config.application.compareLocationId);
  }

	/**
	 * Gets some numbers about the difference in weather between two cities for a daily email
	 * @param {*} targetWeatherData - for this example will be Los Angeles, CA
	 * @param {*} compareWeatherData - for this example will be New York, NY
	 */
  api.getDailyWeatherEmailData = async function getDailyWeatherEmailData(
		targetWeatherData,
		compareWeatherData
	) {
		const weatherEmailData = {};

		weatherEmailData.diffInHumidity = getHumidityDiff(targetWeatherData.humidity, compareWeatherData.humidity);
		weatherEmailData.diffInTemp = getTempDiff(targetWeatherData.temperature, compareWeatherData.temperature);

		return weatherEmailData;
  }

	return api;
};

export default Weather;
