import axios from 'axios'

export async function getUserList() {
    try {
        const { data: users } = await axios.get('http://localhost:9000/user/getList')
        return users
    } catch (error) {
        return []
    }
}

export async function getDriverList() {
    try {
        const { data: drivers } = await axios.get('http://localhost:9000/driver/getList')
        return drivers
    } catch (error) {
        return []
    }
}

export async function createNewUser(user) {
    try {
        const { email, password, role, ...profileData } = user
        const { data: newUser } = await axios.post('http://localhost:9000/auth/signUp', {
            email,
            password,
            role
        })
        if(!newUser) throw new Error()

        const { data: profile } = await axios.post(`http://localhost:9000/user/createProfile/user/${newUser._id}`, {
            role,
            ...profileData
        })
        if(!profile) throw new Error()

        return profile
    } catch (error) {
        return null
    }
}

export async function updateUserProfile(id, user) {
    try {
        const { email, password, role, ...profileData } = user

        const { data: profile } = await axios.put(`http://localhost:9000/user/updateProfile/user/${id}`, {
            role,
            ...profileData
        })
        if(!profile) throw new Error()

        return profile
    } catch (error) {
        return null
    }
}

export async function deleteUser(id) {
    try {
        const { data: profile } = await axios.delete(`http://localhost:9000/user/deleteUser/${id}`)
        if(!profile) throw new Error()

        return profile
    } catch (error) {
        return null
    }
}