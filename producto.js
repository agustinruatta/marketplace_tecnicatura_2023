const app = Vue.createApp({
    data() {
        return {
            "id": 1,
            "title": "Notebook HP 14-dq2024la",
            notebooksTypes: [
                {
                    ramAmount: "8 GB",
                    price: 100000
                },
                {
                    ramAmount: "16 GB",
                    price: 122547
                }
            ],
            "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
            "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
            notebookSeleccionada: 0,
            notebooksCompradas: [],
            imagenes: [
                'https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png',
                'https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg',
                'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IVLX7YP6TJBOJDVBRX5ZOUPBTY.jpg',
                'https://www.muycomputer.com/wp-content/uploads/2021/01/Samsung_Notebook_Plus2_portada.jpg',
            ],
        }
    },
    methods: {
        cambiarImagen(imagenUrl) {
            this.image_url = imagenUrl;
        },

        eliminarCompra(indice) {
            this.notebooksCompradas = this.notebooksCompradas.filter((value, index) => index !== indice);
        },
        computadoraComprada(notebook) {
            this.notebooksCompradas.push(notebook);
        },
        manejarNotebookSeleccionada(indice) {
            this.notebookSeleccionada = indice;
        }
    },
    computed: {
        total() {
            let total = 0;
            for(let notebookComprada of this.notebooksCompradas) {
                total += notebookComprada.price;
            }

            return total;
        },
    }
})
