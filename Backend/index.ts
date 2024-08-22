import Config from "./config";
import Routes from "./routes";
import Express from "express";

const app = Express();
// Importing the routes
Routes(app);

app.listen(Config.PORT, () => {
	console.log(`Server is running on port ${Config.PORT}`);
});
