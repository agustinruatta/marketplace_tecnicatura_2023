<template>
  <div id="comentarios">
    <h2>Comentarios</h2>
    <div id="listado-comentarios">
      <p v-for="(evaluacion, indice) in evaluaciones" :key="indice">
        {{ evaluacion.comentario }} - {{ evaluacion.puntaje }}/5
      </p>
    </div>

    <h2>¡Deja tu comentario!</h2>
    <form @submit.prevent="agregarComentario">
      <label>Comentario:
        <textarea id="texto-comentario" name="comentario" v-model="comentario"></textarea>
      </label>

      <label>
        Calificación:
        <select id="puntaje-feedback" v-model.number="puntaje">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <input id="boton-enviar-comentario" type="submit" value="Enviar">
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioEvaluacion',
  data() {
    return {
      puntaje: null,
      comentario: '',
      evaluaciones: [],
    }
  },
  methods: {
    agregarComentario() {
      if (this.comentario.trim() === '' || this.puntaje === null) {
        alert('Datos faltantes');
        return;
      }

      this.evaluaciones.push({
        comentario: this.comentario,
        puntaje: this.puntaje,
      })

      this.comentario = '';
      this.puntaje = null;
    }
  }
}
</script>
