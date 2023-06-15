<template>
  <div id="app">
    <div id="buscador">
      <label>Buscar:</label>
      <input type="text">
      <button>Buscar</button>
    </div>

    <p>Cantidad de artículos: <strong id="cantidad-articulos"></strong></p>

    <div id="listado-productos">
      <div class="preview-producto" v-for="(producto, index) in products" :key="index">
        <router-link to="/producto">
          <img :src="producto.image_url">
          <strong>{{ producto.title }}</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexView',
  data() {
    return {
      products: [
        {
          "title": "Notebook HP 14-dq2024la",
          "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
        },
        {
          "title": "Notebook Max L5 i7 Microsoft 365 Personal ",
          "image_url": "https://bangho.vtexassets.com/arquivos/ids/160155/Notebook-Max-L5-i5-cuotas-sin-interes.jpg?v=637697603076200000",
        },
        {
          "title": "Notebook N14WCE128 14\" IntelCeleron N3350 128GB Noblex",
          "image_url": "https://noblex.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/1/_/1_5_1.jpg",
        },
        {
          "title": "Notebook Dell 3190 Intel Celeron 4Gb SSD 128Gb 11,6\" HD Windows 10",
          "image_url": "https://www.bidcom.com.ar/publicacionesML/productos/NOT00260/1000x1000-NOT00260.jpg",
        }
      ]
    }
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
