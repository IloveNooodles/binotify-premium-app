const _storage = window.localStorage

export const storage = {
    getToken: () => {
        const token = _storage.getItem('token')
        return token ? token.replace(/^"(.+(?="$))"$/, '$1') : null
    },
    // getUser: () => JSON.parse(_storage.getItem('user')),
    setToken: (token) => _storage.setItem('token', token),
    // setUser: (user) => _storage.setItem('user', user),
    removeCreds: () => {
        _storage.removeItem('token')
        // _storage.removeItem('user')
    },
}
