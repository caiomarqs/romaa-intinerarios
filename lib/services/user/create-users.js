import { verifyData } from '../../repository'

const setupUsers = async () => {
    await verifyData('users', [
        {
            "id": "fdd908b2-bbc1-425e-a728-489890ee218e",
            "username": "caio",
            "password": "caio"
        },
        {
            "id": "0cc9e590-a607-48cd-8752-fe7928784da0'",
            "username": "gustavo",
            "password": "gustavo"
        }
    ])
}

export { setupUsers }