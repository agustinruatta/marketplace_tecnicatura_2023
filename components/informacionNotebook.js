app.component('informacion-notebook', {
    template: `
    <div>
        <p id="texto-descripcion">{{ description }}</p>
    
        <h2>Características</h2>
        <ul>
            <li v-for="(notebookType, indice) in notebooksTypes" :key="indice">
                <button @click="seleccionarTipoComputadora(indice)">RAM: {{ notebookType.ramAmount }}</button>
                <button @click="clickBotonCompra(indice)">Comprar</button>
            </li>
        </ul>
    </div>
    `,
    props: {
        notebooksTypes: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            description: "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
        }
    },
    methods: {
        clickBotonCompra(indice) {
            this.$emit('computadora-comprada', this.notebooksTypes[indice])
        },
        seleccionarTipoComputadora(indice) {
            this.$emit('notebook-seleccionada', indice);
        },
    }
})
