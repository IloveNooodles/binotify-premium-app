import wretch from 'wretch'

export const callLogin = (user) => {
	return wretch()
		.url(import.meta.env.VITE_REST_API_URL + '/login')
        .headers({'Content-Type': 'application/json'})
		.post(JSON.stringify(user))
		.error(400, (error) => {
            return (JSON.parse(error.message))
        })
		.json((response) => {
			return response
		}
	)
}
