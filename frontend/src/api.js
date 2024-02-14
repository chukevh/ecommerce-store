export async function getShirtData() {
    const res = await fetch("/api/t-shirts")
    const data = await res.json()
    return data
}