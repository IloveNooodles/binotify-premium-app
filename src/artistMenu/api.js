import wretch from 'wretch'
import { storage } from '../common/storage'

export const callGetSongs = (data) => {
	return wretch()
		.url(import.meta.env.VITE_REST_API_URL + '/premium-song?limit=' + data.limit + '&page=' + data.page)
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

export const callDeleteSong = (data) => {
    return wretch()
        .url(import.meta.env.VITE_REST_API_URL + '/premium-song/' + data)
        .headers({'x-api-key': storage.getToken()})
        .delete()
        .error(401, (error) => {
            return (JSON.parse(error.message))
        })
        .json((response) => {
            return response
        }
    )
}