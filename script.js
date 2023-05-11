function agregarComentario(evento) {
    //Evito que recargue la página
    evento.preventDefault();

    //Obtengo los valores ingresados
    let textoComentario = document.getElementById('texto-comentario').value;
    let puntaje = document.getElementById('puntaje-feedback').value;

    //Agrego el feedback a la página
    let texto = document.createTextNode(textoComentario + ' - ' + puntaje + '/5');
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);

    document.getElementById('listado-comentarios').appendChild(parrafo);

    //Reinicio los valores de los input
    document.getElementById('texto-comentario').value = '';
    document.getElementById('puntaje-feedback').value = '1';
}

document.getElementById('boton-enviar-comentario')
    .addEventListener('click', agregarComentario)

async function cargarDatosProducto() {
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1');
    let producto = await response.json();

    let titulo = document.createTextNode(producto.title);
    document.getElementById('titulo-producto').appendChild(titulo);

    let descripcion = document.createTextNode(producto.description);
    document.getElementById('texto-descripcion').appendChild(descripcion);

    document.getElementById('imagen').src = producto.image_url;

    document.getElementById('link-fabricante').href = producto.factory_url;

    for (let tipoNotebook of producto.notebooksTypes) {
        let subtituloTipoComputadora = document.createElement('h3');
        subtituloTipoComputadora.appendChild(document.createTextNode('Tipo computadora:'));

        let listaDesordenada = document.createElement('ul');
        let precio = document.createElement('li');
        let ram = document.createElement('li');

        let precioTextNode = document.createTextNode('Precio: ' + tipoNotebook.price);
        let ramTextoNode = document.createTextNode('RAM: ' + tipoNotebook.ramAmount);

        precio.appendChild(precioTextNode);
        ram.appendChild(ramTextoNode);

        listaDesordenada.appendChild(precio);
        listaDesordenada.appendChild(ram);

        document.getElementById('descripcion').appendChild(subtituloTipoComputadora);
        document.getElementById('descripcion').appendChild(listaDesordenada);
    }
}

cargarDatosProducto();
