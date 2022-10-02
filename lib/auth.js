import { users } from '../data/users'

const authLogin = credentials => {

    const user = users.find(dataUser => dataUser.username == credentials.username)

    if (user) {
        if (credentials.username === user.username && credentials.password === user.password) {
            return {
                id: "1234",
                name: user.username,
                username: user.username,
                role: "admin",
            };
        }

        throw new Error('Username ou senha está invalido')
    }

    throw new Error('Username não encontrado')
}

export { authLogin }