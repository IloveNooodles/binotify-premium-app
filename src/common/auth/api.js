import wretch from 'wretch'
import { storage } from '../storage'

export const callGetUser = () => {
	return wretch()
		.url(import.meta.env.VITE_REST_API_URL + '/user')
        .headers({'x-api-key': storage.getToken()})
		.get()
		.error(401, (error) => {
            return (JSON.parse(error.message))
        })
		.json((response) => {
			return response
		}
	)
}

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