const endpoint = {
	register: `https://reqres.in/api/users`,
};
export const registerAPI = async (userData) => {
	const response = await fetch(endpoint.register, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: userData.name,
			surName: userData.surName,
			email: userData.email,
			password: userData.password,
		}),
	});
	if (!response.ok) throw new Error("Something Went Wrong!!");
	const responseData = await response.json();
	return responseData;
};
