export async function getShirtData() {
    const res = await fetch("/api/t-shirts")
    if (!res.ok) {
        throw {
            message: "Failed to fetch shirt data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export async function getSingleShirtData(paramsId) {
    const res = await fetch(`/api/t-shirts/${paramsId}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch shirt data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}