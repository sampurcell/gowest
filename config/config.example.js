const config = {
	application: {
		targetLocationId: 1,
		compareLocationId: 2,
		weatherAPIKey: process.env.WEATHER_API_KEY || '',
		weatherAPIURL: process.env.WEATHER_API || 'https://api.openweathermap.org',
		name: process.env.APP_NAME || 'gowest',
    env: process.env.APP_ENV || 'development',
    port: parseInt(process.env.APP_PORT || 4010, 10),
	}
};

export default config;
