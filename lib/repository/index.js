import fs from 'fs/promises'

const getFileName = (entity) => {
    const dataPath = __dirname.replace(/.next\/.*$/, "")
    return `${dataPath}data/${entity}.json`
}

const writeData = async (entity, data) => {
    const fileName = getFileName(entity)
    await fs.writeFile(
        fileName,
        data == null ? "[]" : JSON.stringify(data),
        { encoding: 'utf8' }
    )
}

const getData = async (entity) => {
    const fileName = getFileName(entity)
    
    const fileData = await fs.readFile(
        fileName,
        { encoding: 'utf8' }
    )
    
    return JSON.parse(fileData)
}

const verifyData = async (entity, data) => {
    const fileName = getFileName(entity)

    try {
        const fileHandle = await fs.open(fileName)
        fileHandle.close() //close garbage colector
    }
    catch (e) {
        await writeData(entity, data)
        console.info(`Create ${entity}.json`)
    }
}

export { verifyData, writeData, getData }