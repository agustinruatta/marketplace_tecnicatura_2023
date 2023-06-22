import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export default {
    getProducto(id) {
        return apiClient
            .get('/products/' + id)
    },
    getProductos() {
        return apiClient
            .get('/products')
    }
}
