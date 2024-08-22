import express, { Request, Response } from "express";
import authController from "../controllers/auth.controller";
import Wrapper from "../middlewear/Wrapper";

const Router = express.Router();

Router.route("/test").get(Wrapper(authController.test));

export default {
	Router,
	routeUrl: "auth",
};
