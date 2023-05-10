import axios from 'axios'

async function login(email, password) {
    try {
        const { data } = await axios.post("http://localhost:9000/auth/adminSignIn", { email, password })

        if (!data) throw new Error()

        return {
            access_token: data.access_token,
            refresh_token: data.refresh_token
        }
    } catch (error) {
        return {
            access_token: null
        }
    }
}

async function getUser() {
    try {
        const { data } = await axios.get("http://localhost:9000/admin/profile")
        if (!data) throw new Error()

        return data
    } catch (error) {
        return null
    }
}

export {
    login,
    getUser
}