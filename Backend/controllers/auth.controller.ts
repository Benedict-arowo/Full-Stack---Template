import { Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {
	public test = async (req: Request, res: Response) => {
		const randomNumber = authService.test();
		res.send(`Test successful - ${randomNumber}`);
	};
}

export default new AuthController();
