import wretch from 'wretch'

export const loginAPI = (user) => {
	return wretch()
		.url('/accounts')
        .headers({'Content-Type': 'application/json'})
		.post(JSON.stringify(data))
		.json((response) => {
			if (response.status) {
				storage.setUser(JSON.stringify(response))
				storage.setToken(JSON.stringify(token))
			}
			return response
		})
}
