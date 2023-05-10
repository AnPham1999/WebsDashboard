import axios from 'axios'

export async function getRouteList() {
    try {
        const { data: routes } = await axios.get('http://localhost:9000/route/getList')
        return routes
    } catch (error) {
        return []
    }
}

export async function createNewRoute(routeData) {
    try {
        const { data: route } = await axios.post(`http://localhost:9000/route/create`, routeData)
        if(!route) throw new Error()

        return route
    } catch (error) {
        return null
    }
}

export async function updateRoute(id, routeData) {
    try {
        const { data: route } = await axios.put(`http://localhost:9000/route/update/${id}`, routeData)
        if(!route) throw new Error()

        return route
    } catch (error) {
        return null
    }
}

export async function deleteRoute(id) {
    try {
        const { data: profile } = await axios.delete(`http://localhost:9000/route/delete/${id}`)
        if(!profile) throw new Error()

        return profile
    } catch (error) {
        return null
    }
}