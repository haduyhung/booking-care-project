import requestClient from "./requestClient"

const UserApi = {
	getAll(token) {
		const urlParam = "users"

		return requestClient.get(urlParam)
	},
	getOne(id, token) {
		const urlParam = `users/${id}`

		return requestClient.get(urlParam)
	},

	deleteUser(id, user) {
		const urlParam = `users/${id}`

		return requestClient.delete(urlParam)
	},

	update(id, data, user) {
		const urlParam = `users/${id}`

		return requestClient.put(urlParam, data)
	},
	registerOut(data) {
		const urlParam = "users/register/out"
		return requestClient.post(urlParam, data)
	},
}

export default UserApi