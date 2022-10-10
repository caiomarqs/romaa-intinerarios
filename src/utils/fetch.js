const api = (url, data, method) => fetch(url, {
    body: JSON.stringify(data),
    method,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export { api }