class AuthService {
	// Returns a random number
	public test = () => {
		return Math.floor(Math.random() * 100);
	};
}

export default new AuthService();
