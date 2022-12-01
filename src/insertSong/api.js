import { storage } from '../common/storage'

export const callInsertSong = (songData) => {
    return fetch(import.meta.env.VITE_REST_API_URL + '/premium-song', {
        method: "POST",
        headers: {'x-api-key': storage.getToken()},
        body: songData
    }).then(async r => 
        {return r.json()}
        )
}