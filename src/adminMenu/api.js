import wretch from 'wretch'
import { storage } from '../common/storage'

export const callGetRequests = (data) => {
	return wretch()
		.url(import.meta.env.VITE_REST_API_URL + '/subscription?limit=' + data.limit + '&page=' + data.page)
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

export const callAcceptRequest = (data) => {
    return wretch()
        .url(import.meta.env.VITE_REST_API_URL + '/subcription/decision')
        .headers({'x-api-key': storage.getToken()})
        .post(JSON.stringify(data))
        .error(401, (error) => {
            return (JSON.parse(error.message))
        })
        .json((response) => {
            return response
        }
    )
}