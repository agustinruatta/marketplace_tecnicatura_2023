import axios from "axios";

export default {
    getProducto() {
        return axios
            .get('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1')
    },
    getProductos() {
        return axios
            .get('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/')
    }
}
