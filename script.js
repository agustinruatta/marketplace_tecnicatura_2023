const app = Vue.createApp({
    data() {
        return {
            "id": 1,
            cantidadComprados: 0,
            "title": "Notebook HP 14-dq2024la",
            "description": "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
            "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
            "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
            "notebooksTypes": [
                {
                    "ramAmount": "8 GB",
                    "price": 100000
                },
                {
                    "ramAmount": "16 GB",
                    "price": 122547
                }
            ],
            imagenes: [
                'https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png',
                'https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg',
                'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IVLX7YP6TJBOJDVBRX5ZOUPBTY.jpg',
                'https://www.muycomputer.com/wp-content/uploads/2021/01/Samsung_Notebook_Plus2_portada.jpg',
            ],
        }
    },
    methods: {
        clickBotonCompra() {
            this.cantidadComprados += 1;
        },
        cambiarImagen(imagenUrl) {
            this.image_url = imagenUrl;
        }
    }
})

app.mount('#grid-layout')
