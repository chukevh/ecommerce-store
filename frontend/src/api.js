export async function getShirtData() {
    const res = await fetch("/api/shirt")
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
    const res = await fetch(`/api/shirt/${paramsId}`)
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
    const res = await fetch("/api/user/login", 
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
    const res = await fetch("/api/user", 
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

export async function checkoutUser(lineItems) {
    const res = await fetch("/api/user/checkout", { 
        method: "post", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(lineItems) 
    })
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