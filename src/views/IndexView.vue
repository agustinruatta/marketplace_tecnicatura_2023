<template>
  <div id="app">
    <div id="buscador">
      <label>Buscar:</label>
      <input type="text" v-model="filtro">
    </div>

    <p>Cantidad de artículos: <strong id="cantidad-articulos"></strong></p>

    <div id="listado-productos">
      <div v-if="productosFiltrados.length === 0">
        <h1>Cargando</h1>
      </div>
      <div v-else class="preview-producto" v-for="(producto, index) in productosFiltrados" :key="index">
        <router-link :to="{name: 'Producto', params: {id: producto.id}}">
          <img :src="producto.image_url">
          <strong>{{ producto.title }}</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import productoService from '@/services/ProductoService';

export default {
  name: 'IndexView',
  data() {
    return {
      products: [],
      filtro: '',
    }
  },
  computed: {
    productosFiltrados() {
      if (this.filtro.trim() === '') {
        return this.products;
      } else {
        return this.products.filter((producto) => producto.title.includes(this.filtro))
      }
    }
  },
  async created() {
    /*
    productoService.getProductos()
        .then(respuesta => {
          this.products = respuesta.data;
        })
    */

    let respuesta = await productoService.getProductos();
    this.products = respuesta.data;
  }
}
</script>

<style scoped>
#listado-productos {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  height: 500px;
  margin: 100px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.preview-producto {
  height: 200px;
}
</style>
