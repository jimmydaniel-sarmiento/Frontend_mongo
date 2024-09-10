function mostrarDatos () {
    let request = sendRequest ("proveedor", "GET", ""); // revisar proveedores ? proveedor?
    let table = document.getElementById ("proveedores-table");
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element.nombre}</td>
            <td>${element.nit}</td>
            <td>${element.correo}</td>
            <td>${element.telefono}</td>
            <td>${element.direccion}</td>
            <td>
            <button type = "button" class = "btneditarproveedor" onclick = 'window.location = "/form_proveedor.html?id=${element._id}"'>Editar</button>
            <button type = "button" class = "btneliminarproveedor" onclick = 'deleteProveedores ("${element._id}")'>Eliminar</button>
            </td>
            
            </tr>
            `
        });                  
    }

    request.onerror = function () {
        table.innerHTML = `
        <tr>
        <td colspan = "">ERROR al traer los datos del Proveedor</td>
        </tr>
        `
    }
}

function deleteProveedores (_id) {
    let request = sendRequest ("proveedor/" +_id, "DELETE", ""); // revisar proveedores ? proveedor?
    request.onload = function () {
        mostrarDatos();
    }
}

function guardarProveedores() {
    
    let nom = document.getElementById('nombres-p').value    
    let nit = document.getElementById('nit-p').value
    let cor = document.getElementById('correo-p').value
    let tel = document.getElementById('telefono-p').value
    let dir = document.getElementById('direccion-p').value
    let data = {'nombre':nom, 'nit':nit, 'correo':cor, 'telefono': tel, 'direccion': dir,}
    
    let request = sendRequest ('proveedor/', 'POST', data); // revisar proveedores ? proveedor?
    request.onload = function () {
        window.location = 'proveedor.html'
    }

    request.onerror = function () {
        alert("Hubo un error al GUARDAR los datos")
    }

}

// Clase 30/AGO/2024

function cargarDatos(id) {
    let request = sendRequest('proveedor/' +id, 'GET', '');
    let nom = document.getElementById('nombres-p')  
    let nit = document.getElementById('nit-p')
    let cor = document.getElementById('correo-p')
    let tel = document.getElementById('telefono-p')
    let dir = document.getElementById('direccion-p')

    request.onload = function () {

        let data = request.response;
        nom.value = data.nombre
        nit.value = data.nit
        cor.value = data.correo
        tel.value = data.telefono
        dir.value = data.direccion
    }

    request.onerror = function () {
        alert("Hubo un error al GUARDAR los datos")
    }

}

function modificarProveedores(id) {
    
    let nom = document.getElementById('nombres-p').value
    let nit = document.getElementById('nit-p').value
    let cor = document.getElementById('correo-p').value
    let tel = document.getElementById('telefono-p').value
    let dir = document.getElementById('direccion-p').value
    let data = {'nombre':nom, 'nit':nit, 'correo':cor, 'telefono': tel, 'direccion': dir,}
    let request = sendRequest("proveedor/" +id, "PUT", data);
console.log(request)
  request.onload = function () {
        
    window.location = "proveedor.html"
    }

    request.onerror = function () {
        alert("Hubo un error al MODIFICAR los datos")
    }

}