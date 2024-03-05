/* global bootstrap fetch */
/* global view */
(() => {
    'use strict'
    let btnCrearProducto = document.getElementById('btnCreaProducto');
    let btnCrearCategoria = document.getElementById('btnCreaCategoria');
 
    const url = document.querySelector('meta[name="url-base"]')['content'];
    const csrf = document.querySelector('meta[name="csrf-token"]')['content'];
    
    let nombreCreate = document.getElementById('nombre');
    let categoriaCreate = document.getElementById('idcategorias');
    let descripcionCreate = document.getElementById('descripcion');
    let precioCreate = document.getElementById('precio');
    
     let idProducto = document.getElementById('idproducto');
     let nombreEdit = document.getElementById('nombre');
     let categoriaEdit = document.getElementById('categoria');
     let precioEdit = document.getElementById('precio');
     let descripcionEdit = document.getElementById('descripcion');
     
    let page = 1;
    let perPage = 9;


    document.addEventListener("DOMContentLoaded", function(event) {
        if(view != 2){
            peticionProductos();
        }else {
        }
        if(view == 1){
            btnCrearProducto.onclick = function() {
                let data = {
                    nombre: nombreCreate.value,
                    idcategorias: categoriaCreate.value,
                    precio: precioCreate.value,
                    descripcion: descripcionCreate.value
                };
                creaProducto(data);
            };
        }
        // var rowContainer = document.getElementById('contenido');
        //   var linkElement = document.createElement('a');
        //   linkElement.href = url + '/producto?page=' + page + '&perPage=' + perPage;
        
        // // // // Configurar el contenido del enlace
        //   linkElement.textContent = 'Categories';
        //   rowContainer.appendChild(linkElement)

    });
    
    function creaProducto(data) {
         fetch(url + '/producto',{
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
                console.log('estoy aqui');
             let modal = document.getElementById('creaProductoMod');
             let instanceM = bootstrap.Modal.getInstance(modal);
             instanceM.hide();
             let correct = document.getElementById('correct');
             correct.className = 'alert alert-success';
             crudProductos(data.productos);
            } else {
                console.log('else');
            }
         })
         .catch(error => {
             console.log("Error", error);
         });
    }
    
    function peticionProductos() {
        fetch(url + '/producto?page=' + page + '&perPage=' + perPage)
        .then(response => response.json())
        .then(data => {
            if (view == 0) {
                recorrerProductos(data);
            }else if(view == 1){
                crudProductos(data.productos);
            }
            
        })
        .catch(error => console.error("Error:", error));
    }

    function recorrerProductos(data){
        const contentDiv = document.getElementById("contenido");
        let productos = data.productos.data;
        contentDiv.innerHTML='';
        productos.forEach(producto =>{
            let divCol = document.createElement('div');
            divCol.className = 'col d-flex justify-content-center mt-3';
            
            let card = document.createElement('div');
            card.className = 'cart-button shadow d-flex';
            card.setAttribute('style', 'width: 38rem');
            
            divCol.appendChild(card);
            
            // let img = document.createElement('img');
            // img.className = 'card-img-top';
            // img.setAttribute('alt', 'rubia siempre presente');
            
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body d-flex justify-content-between flex-column';
            
            //card.appendChild(img);
            card.appendChild(cardBody);
            
            
            let h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.innerHTML = `${producto.nombre}`;
            
            let precio = document.createElement('p');
            precio.className = 'item-price text-primary mt-2';
            precio.innerHTML = `${producto.precio}`+'\u20AC';
            
            let a = document.createElement('a');
            a.className = 'btn btn-medium btn-black mt-2 ';
            a.innerHTML = 'Añadir';
            
            cardBody.appendChild(h5);
            cardBody.appendChild(precio);
            cardBody.appendChild(a);
            
            contentDiv.appendChild(divCol);    
        });

        if(data.paginacion[0].paginaMaxima != 1){
            var paginationContainer = document.getElementById('paginationContainer');
            if (paginationContainer == null) {
                paginationContainer = document.createElement('div');
            } else {
                paginationContainer.innerHTML = '';
            }
            
            // Crear el elemento nav con las clases correspondientes
            var navElement = document.createElement('nav');
            navElement.setAttribute('aria-label', 'Page navigation example');
            
            // Crear el elemento ul con las clases correspondientes
            var ulElement = document.createElement('ul');
            ulElement.className = 'pagination justify-content-center justify-content-lg-end';
            
            // Crear los elementos li y a con las clases y atributos correspondientes
            if (page != 1) {
                var liPrevious = document.createElement('li');
                liPrevious.className = 'page-item mx-1';
                var aPrevious = document.createElement('a');
                aPrevious.className = 'page-link';
                aPrevious.href = '#!';
                aPrevious.setAttribute('aria-label', 'Previous');
                aPrevious.innerHTML = '<span aria-hidden="true">«</span>';
                if (page != 1) {
                    liPrevious.onclick = () => {
                        page = page-1;
            		    peticionProductos();
            	    };
                }
                liPrevious.style.cursor = 'pointer';
                liPrevious.appendChild(aPrevious);
                ulElement.appendChild(liPrevious);
            }
            
            var liPage1 = document.createElement('li');
            liPage1.className = 'page-item mx-1';
            var aPage1 = document.createElement('a');
            aPage1.className = 'page-link';
            if (page == 1) {
                liPage1.className += ' active';
                aPage1.textContent = '1';
            }else {
                aPage1.textContent = page - 1;
                liPage1.onclick = () => {
                    page = page-1;
        		    peticionProductos();
        	    };
        	    liPage1.style.cursor = 'pointer';
            }
            liPage1.appendChild(aPage1);
            ulElement.appendChild(liPage1);
            
            
            var liPage2 = document.createElement('li');
            liPage2.className = 'page-item mx-1';
            var aPage2 = document.createElement('a');
            aPage2.className = 'page-link';
            if (page < 2) {
                aPage2.textContent = page + 1;
                liPage2.onclick = () => {
                     page++;
        		    peticionProductos();
        	    };
        	    liPage2.style.cursor = 'pointer';
            }else {
                liPage2.className += ' active';
                aPage2.textContent = page;
            }
            liPage2.appendChild(aPage2);
            ulElement.appendChild(liPage2);
            if (data.paginacion[0].paginaMaxima > 2 && data.paginacion[0].paginaMaxima != page) {
                var liPage3 = document.createElement('li');
                liPage3.className = 'page-item mx-1';
                var aPage3 = document.createElement('a');
                aPage3.className = 'page-link';
                if (page < 2) {
                    aPage3.textContent = page + 2;
                    liPage3.onclick = () => {
                         page = page+2;
            		    peticionProductos();
            	    };
                }else {
                    aPage3.textContent = page + 1;
                    liPage3.onclick = () => {
                         page++;
            		    peticionProductos();
            	    };
                }
                liPage3.style.cursor = 'pointer';
                liPage3.appendChild(aPage3);
                ulElement.appendChild(liPage3);
                var liNext = document.createElement('li');
                liNext.className = 'page-item ms-1';
                var aNext = document.createElement('a');
                aNext.className = 'page-link';
                aNext.onclick = () => {
                    page++;
            	    peticionProductos();
                };
                aNext.setAttribute('aria-label', 'Next');
                aNext.innerHTML = '<span aria-hidden="true">»</span>';
                liNext.style.cursor = 'pointer';
                liNext.appendChild(aNext);
                ulElement.appendChild(liNext);
            }

            navElement.appendChild(ulElement);
            
            // Agregar el elemento nav al contenedor de la paginación
            paginationContainer.appendChild(navElement);
    
            contentDiv.appendChild(paginationContainer);
        }
    }
    
    function crudProductos(productos){
        const contentDiv = document.getElementById("contenido");
        contentDiv.innerHTML='';
        productos.forEach(producto =>{
            if (!producto.id) {
            console.error('Producto sin ID:', producto);
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
            h5.innerHTML = `${producto.nombre}`;
            
            cardBody.appendChild(h5);
            
            
            let btnshow = document.createElement('a');
            btnshow.className = 'btn btn-outline-primary m-2';
            btnshow.setAttribute('data-bs-toggle', 'modal'); 
            btnshow.setAttribute( 'data-bs-target', '#showProductoModal');
            btnshow.setAttribute('data-id', producto.id);
            btnshow.innerHTML = 'Mostrar';
            btnshow.addEventListener('click', function(){
                let idProducto = this.getAttribute('data-id');
                fetch(url + '/producto/' + idProducto)
                 .then(response => {
                 if (!response.ok) {
                    throw new Error('Network response was not ok');
                 }
                 return response.json();
                 })
                 .then(data => {
                 console.log(data);
                 document.getElementById('nombreProducto').innerHTML = 'Nombre del producto: '+ data.productos.nombre;
                 document.getElementById('categoriaProducto').innerHTML = 'Categoría del producto: '+data.categoria;
                 document.getElementById('precioProducto').innerHTML = 'Precio del producto: '+data.productos.precio;
                 document.getElementById('descripcionProducto').innerHTML = 'escripción del producto: '+data.productos.descripcion;
                 })
             .catch(error => console.error("Error:", error));
             });
            
            let btnedit = document.createElement('a');
            btnedit.className = 'btn btn-outline-warning m-2';
            btnedit.setAttribute('data-bs-toggle', 'modal'); 
            btnedit.setAttribute('data-bs-target', '#editProductoModal');
            btnedit.setAttribute('data-id', producto.id);
            btnedit.innerHTML = 'Editar';
            btnedit.addEventListener('click', function(){
            let idProducto = this.getAttribute('data-id');
    
            // Primero, obtenemos los detalles del producto para llenar el formulario
            fetch(url + '/producto/' + idProducto)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Llenamos el formulario con los detalles del producto
                document.getElementById('nombreEdit').value = data.productos.nombre;
                document.getElementById('precioEdit').value = data.productos.precio;
                document.getElementById('descripcionEdit').value = data.productos.descripcion;
                data.categorias.forEach(categoria =>{
                    console.log(categoria);
                    console.log(data.categoria);
                    let option = document.createElement('option');
                    option.value = categoria.id;
                    if(data.categoria == categoria) {
                        option.selected = 'selected';
                    }
                    option.innerHTML = categoria.nombre;
                    document.getElementById('category').appendChild(option);
                });
            })
            .catch(error => console.error("Error:", error));

            document.getElementById('guardarCambios').addEventListener('click', function() {
                let data = {
                    nombre: document.getElementById('nombreEdit').value,
                    idcategorias: document.getElementById('category').value,
                    precio: document.getElementById('precioEdit').value,
                    descripcion: document.getElementById('descripcionEdit').value
                };
                console.log(data)
                fetch(url + '/producto/' + idProducto, {
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
                })
                .catch(error => console.error("Error:", error));
            });
        });
            
            let btndelete = document.createElement('a');
            btndelete.className = 'btn btn-outline-danger m-2';
            btndelete.setAttribute('data-bs-toggle', 'modal'); 
            btndelete.setAttribute( 'data-bs-target', '#deleteProductoModal');
            btndelete.setAttribute('data-id', producto.id);
            btndelete.innerHTML = 'Borrar';
            btndelete.addEventListener('click', function() {
                document.getElementById('confirmarEliminacion').addEventListener('click', function() {

                    fetch(url + '/producto/' + producto.id, {
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
                        let productoElement = document.getElementById('productoCard-' + idProducto);
                        if (productoElement) {
                            productoElement.remove();
                        }
                        var modalElem = document.querySelector('#deleteProductoModal');
            			var modalInstance = bootstrap.Modal.getInstance(modalElem);
            			modalInstance.hide();
            			peticionProductos()
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



