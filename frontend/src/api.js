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

export async function loginUser(creds) {
    const res = await fetch("/api/login", 
        {   method: "post", 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(creds) 
        }
    )
    const data = await res.json()
    
    if(!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    return data
}

export async function signupUser(userDetails) {
    const res = await fetch("/api/signup", 
        {   method: "post", 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(userDetails) 
        }
    )
    const data = await res.json()
    
    if(!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    return data
}