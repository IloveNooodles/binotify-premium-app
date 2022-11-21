import wretch from 'wretch'

export const callRegister = (data) => {
    return wretch()
        .url(import.meta.env.VITE_REST_API_URL + '/register')
        .headers({
            'Content-Type': 'application/json'
        })
        .post(JSON.stringify(data))
        .error(400, (error) => {
            console.log("ini langsung dari sumbernya", JSON.parse(error.message))
            return (JSON.parse(error.message))
        })
        .json((response) => {
            return response
        })
}
