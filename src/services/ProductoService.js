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
    getProducto() {
        return apiClient
            .get('/products/1')
    },
    getProductos() {
        return apiClient
            .get('/products')
    }
}
