import users from '../data/users.json'

const authLogin = credentials => {

    const user = users.find(dataUser => dataUser.username == credentials.username)

    if (user) {
        if (credentials.username === user.username && credentials.password === user.password) {
            return {
                id: user.id,
                name: user.username,
                username: user.username
            };
        }

        throw new Error('Username ou senha está invalido')
    }

    throw new Error('Username não encontrado')
}

export { authLogin }