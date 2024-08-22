const dotenv = require("dotenv");
dotenv.config({
	path: "./.env",
});

const Config: Config = {
	PORT: parseInt(process.env.PORT as string) || 5001,
	ROUTE_PREFIX: "api",
	NODE_ENV: process.env.NODE_ENV as "development" | "production",
};

export default Config;

interface Config {
	PORT: number;
	ROUTE_PREFIX: string;
	NODE_ENV: "development" | "production";
}
