export async function httpGet(url: string) {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function httpPost(url: string) {
    const res = await fetch(url)
    const data = await res.json()
    return data
}
