import { UserRepository } from './repository';

const authLogin = async credentials => {

    const user = await UserRepository.readUserByName(credentials.username)

    if (user) {
        if (credentials.username === user.username && credentials.password === user.password) {
            return {
                id: user._id.valueOf(),
                name: user.username,
                username: user.username
            };
        }

        throw new Error('Username ou senha está invalido')
    }

    throw new Error('Username não encontrado')
}

export { authLogin }