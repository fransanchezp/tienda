/* global bootstrap fetch */
/* global view */
(() => {
    'use strict'
    let btnCrearCategoria = document.getElementById('btnCreaCategoria');
    
    const url = document.querySelector('meta[name="url-base"]')['content'];
    const csrf = document.querySelector('meta[name="csrf-token"]')['content'];
    let idCategoria = document.getElementById('idcategorias');
    document.addEventListener("DOMContentLoaded", function(event) {
        peticionCategorias();
        let nombreCreate = document.getElementById('nombreCrearCategoria');
        btnCrearCategoria.onclick = function() {
            let data = {
                nombre: nombreCreate.value,
            };
            creaCategoria(data);
        };
    });
    
    var creaCategoriaMod = document.getElementById('creaCategoriaMod');
	creaCategoriaMod.addEventListener('shown.bs.modal', function (event) {
	    console.log(document.getElementById('nombreCrearCategoria'));
		document.getElementById('nombreCrearCategoria').innerHTML = '';
		document.getElementById('nombreCrearCategoria').value = '';
	});
    
    function creaCategoria(data) {
        fetch(url + '/categoria',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.result) {
                let modal = document.getElementById('creaCategoriaMod');
                let instanceM = bootstrap.Modal.getInstance(modal);
                instanceM.hide();
                let correct = document.getElementById('correct');
                correct.className = 'alert alert-success';
                crudCategorias(data.categorias);
            } else {
                console.log('else');
            }
        })
        .catch(error => {
            console.log("Error", error);
        });
    }
    
    function peticionCategorias(){
        fetch(url + '/categoria')
        .then(response => response.json())
        .then(data => {
            crudCategorias(data.categorias);
        })
        .catch(error => console.error("Error:", error));
    }
    
    function recorrerCategorias(categorias){
        const contentDiv = document.getElementById("contenido");
    
        categorias.forEach(categoria =>{
            let divCol = document.createElement('div');
            divCol.className = 'col d-flex justify-content-center mt-3';
        
            let card = document.createElement('div');
            card.className = 'card shadow w-75';
            card.setAttribute('style', 'width: 18rem');
        
            divCol.appendChild(card);
            
            let img = document.createElement('img');
            img.className = 'card-img-top';
            img.setAttribute('alt', 'rubia siempre presente');
        
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body d-flex justify-content-between flex-column';
        
            card.appendChild(img);
            card.appendChild(cardBody);
        
            let h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.innerHTML = `${categoria.nombre}`;
            
            let a = document.createElement('a');
            a.className = 'btn btn-outline-success mt-2 ';
            a.innerHTML = 'Añadir';
        
            cardBody.appendChild(h5);
            cardBody.appendChild(a);
        
            contentDiv.appendChild(divCol);    
        });
    }
    
    function crudCategorias(categorias){
        const contentDiv = document.getElementById("contenido");
        contentDiv.innerHTML='';
        
        categorias.forEach(categoria =>{
            if (!categoria.id) {
            console.error('Producto sin ID:', categoria);
            return;
            }
            
            let divCol = document.createElement('div');
            divCol.className = 'col d-flex justify-content-center mt-3';
    
            let card = document.createElement('div');
            card.className = 'd-flex shadow w-75';
    
            divCol.appendChild(card);
    
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body d-flex align-self-center w-75  ';
    
            let  btnDiv = document.createElement('div');
            btnDiv.className = 'card-body d-flex justify-content-evenly align-self-center';
    
            card.appendChild(cardBody);
            card.appendChild(btnDiv);
    
            let h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.innerHTML = `${categoria.nombre}`;
    
            cardBody.appendChild(h5);
    
            let btnshow = document.createElement('a');
            btnshow.className = 'btn btn-outline-primary m-2';
            btnshow.setAttribute('data-bs-toggle', 'modal'); 
            btnshow.setAttribute( 'data-bs-target', '#showCategoriaModal');
            btnshow.setAttribute('data-id', categoria.id);
            btnshow.innerHTML = 'Mostrar';
            btnshow.addEventListener('click', function(){
                document.getElementById('nombreCategoria').innerHTML = 'Nombre de la categoría: '+ categoria.nombre;
            });
            
            let btnedit = document.createElement('a');
            btnedit.className = 'btn btn-outline-warning m-2';
            btnedit.setAttribute('data-bs-toggle', 'modal'); 
            btnedit.setAttribute( 'data-bs-target', '#editCategoriaModal');
            btnedit.setAttribute('data-id', categoria.id);
            btnedit.innerHTML = 'Editar';
            btnedit.addEventListener('click', function(){
                let idCategoria = this.getAttribute('data-id');
                document.getElementById('nombreEditCategoria').value = categoria.nombre;
                document.getElementById('nombreEditCategoria').placeholder = categoria.nombre;
            
                // Luego, cuando se hace clic en el botón "Guardar cambios", actualizamos la categoría
                document.getElementById('guardarCambiosEdit').addEventListener('click', function() {
                    let data = {
                        nombre: document.getElementById('nombreEditCategoria').value,
                    };
                    console.log(data)
                    fetch(url + '/categoria/' + idCategoria, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': csrf
                        },
                        body: JSON.stringify(data),
                    })
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        document.getElementById('nombre').textContent = data.nombre;
                        var modalElem = document.querySelector('#editCategoriaModal');
            			var modalInstance = bootstrap.Modal.getInstance(modalElem);
            			modalInstance.hide();
                        peticionCategorias();
                    })
                    .catch(error => console.error("Error:", error));
                });
            });
            
    
            let btndelete = document.createElement('a');
            btndelete.className = 'btn btn-outline-danger m-2';
            btndelete.setAttribute('data-bs-toggle', 'modal'); 
            btndelete.setAttribute( 'data-bs-target', '#deleteCategoriaModal');
            btndelete.setAttribute('data-id', categoria.id);
            btndelete.innerHTML = 'Eliminar';
            btndelete.addEventListener('click', function() {
                document.getElementById('confirmarEliminacionCategoia').addEventListener('click', function() {

                    fetch(url + '/categoria/' + categoria.id, {
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': csrf
                        },
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        let productoElement = document.getElementById('categoriaCard-' + idCategoria);
                        if (productoElement) {
                            productoElement.remove();
                        }
                        var modalElem = document.querySelector('#deleteCategoriaModal');
            			var modalInstance = bootstrap.Modal.getInstance(modalElem);
            			modalInstance.hide();
            			peticionCategorias()
                    })
                    .catch(error => console.error("Error:", error));
                });
            });
    
            btnDiv.appendChild(btnshow);
            btnDiv.appendChild(btnedit);
            btnDiv.appendChild(btndelete);
    
            contentDiv.appendChild(divCol);
        });
    }
    
        
})();
