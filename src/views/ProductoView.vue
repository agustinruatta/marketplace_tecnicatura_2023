<template>
  <div v-if="this.id === null">
    <h1>Cargando...</h1>
  </div>
  <div v-else>
    <div id="grid-layout">
      <div id="cabecera">
        <h1 id="titulo-producto">{{ title }}</h1>
      </div>

      <div id="imagen-producto">
        <img :src="image_url" id="imagen">
      </div>

      <div id="descripcion">
        <img v-for="(imagen, indice) in imagenes" class="imagen-miniatura" :src="imagen"
             @mouseover="cambiarImagen(imagen)" :key="indice">

        <div v-if="notebooksTypes.length > 0">
          <h2>Precio: $ {{ notebooksTypes[notebookSeleccionada].price }}</h2>
        </div>

        <p>Carro de compras</p>
        <ul>
          <li v-for="(notebookComprada, indice) in notebooksCompradas" :key="indice">
            {{ notebookComprada.ramAmount }}: $ {{ notebookComprada.price }}
            <button @click="eliminarCompra(indice)">Eliminar</button>
          </li>
        </ul>
        <p>Total: {{ total }}</p>

        <informacion-notebook
            :notebooks-types="notebooksTypes"
            @computadora-comprada="computadoraComprada"
            @notebook-seleccionada="manejarNotebookSeleccionada"
        >
        </informacion-notebook>
        <a :href="factory_url" id="link-fabricante" target="_blank"
           rel="noopener noreferrer">Link sitio web fabricante</a>
      </div>


      <formulario-evaluacion></formulario-evaluacion>
    </div>
  </div>
</template>
<script>
import FormularioEvaluacion from '@/components/FormularioEvaluacion'
import InformacionNotebook from '@/components/InformacionNotebook';
import productoService from '@/services/ProductoService';

export default {
  name: 'ProductoView',
  components: {
    FormularioEvaluacion,
    InformacionNotebook,
  },
  data() {
    return {
      id: null,
      title: '',
      notebooksTypes: [],
      image_url: null,
      factory_url: null,
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
      for (let notebookComprada of this.notebooksCompradas) {
        total += notebookComprada.price;
      }

      return total;
    },
  },
  created() {
    productoService.getProducto().then((respuesta) => {
      this.id = respuesta.data.id;
      this.title = respuesta.data.title;
      this.description = respuesta.data.description;
      this.image_url = respuesta.data.image_url;
      this.factory_url = respuesta.data.factory_url;
      this.notebooksTypes = respuesta.data.notebooksTypes;
    })

    /*
    let respuesta = await productoService.getProducto();
    this.id = respuesta.data.id;
    this.title = respuesta.data.title;
    this.description = respuesta.data.description;
    this.image_url = respuesta.data.image_url;
    this.factory_url = respuesta.data.factory_url;
    this.notebooksTypes = respuesta.data.notebooksTypes;
    */
  }
}
</script>

<style scoped>
#grid-layout {
  display: grid;
  grid-template-areas: 'cabecera cabecera'
                        'imagen descripcion'
                        'comentarios comentarios';
  grid-template-columns: 20% auto;
  grid-template-rows: 10% auto auto;
  height: 1000px;
}

.imagen-miniatura {
  max-width: 50px;
  max-height: 50px;
}

img {
  max-width: 100%;
}

#cabecera {
  grid-area: cabecera;
}

#imagen-producto {
  grid-area: imagen;
  border: 2px solid black;
  margin: 10px;
}

#descripcion {
  grid-area: descripcion;
}

#comentarios {
  grid-area: comentarios;
}
</style>
