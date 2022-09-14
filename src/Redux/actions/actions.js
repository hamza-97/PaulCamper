import { REGISTER_USER } from "./types";

export const RegisterUser = (data) => ({
	type: REGISTER_USER,
	data,
});
