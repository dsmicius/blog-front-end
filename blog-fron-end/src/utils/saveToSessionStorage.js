export const saveToSessionStorage = (key, value) => {
    try {
        const serializedValue = JSON.stringify(value)
        sessionStorage.setItem(key, serializedValue)
    } catch {
        // ignore
    }
}

export const loadFromSessionStorage = (key) => {
    const serializedValue = sessionStorage.getItem(key)
    return JSON.parse(serializedValue)
}


export const clearSessionStorage = () => sessionStorage.clear()


export const StorageKey  = {
    jwt: 'jwt'
}
