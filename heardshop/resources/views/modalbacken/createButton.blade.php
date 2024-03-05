<!-- Modal Mostrar -->
<div class="modal fade" id="showProductoModal" tabindex="-1" aria-labelledby="showProductoModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="showProductoModalLabel">Mostrar Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Aquí puedes mostrar la información del producto -->
        <p id="nombreProducto"> </p>
        <p id="categoriaProducto"> </p>
        <p id="precioProducto"> </p>
        <p id="descripcionProducto">D </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Editar -->
<div class="modal fade" id="editProductoModal" tabindex="-1" aria-labelledby="editProductoModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editProductoModalLabel">Editar Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Aquí puedes poner un formulario para editar la información del producto -->
        <form id="editProductoForm">
          <div class="mb-3">
            <label for="nombreEdit" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombreEdit">
          </div>
          <div class="mb-3">
            <label for="categoriaEdit" class="form-label">Categoría</label>
            <select id="category" class="idcategory form-control form-control-lg rounded-0" data-customclass="form-control form-control-lg rounded-0" name="idcategorias" required>
              <option value="" disabled selected>Select the category</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="precioEdit" class="form-label">Precio</label>
            <input type="number" class="form-control" id="precioEdit">
          </div>
          <div class="mb-3">
            <label for="descripcionEdit" class="form-label">Descripción</label>
            <textarea class="form-control" id="descripcionEdit" rows="3"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button id="guardarCambios" type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Eliminar -->
<div class="modal fade" id="deleteProductoModal" tabindex="-1" aria-labelledby="deleteProductoModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteProductoModalLabel">Eliminar Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que quieres eliminar este producto?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button id="confirmarEliminacion" type="button" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Mostrar -->
<div class="modal fade" id="showCategoriaModal" tabindex="-1" aria-labelledby="showCategoriaModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="showCategoriaModalLabel">Mostrar Categoría</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Aquí puedes mostrar la información de la categoría -->
        <p id="nombreCategoria"> </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Editar -->
<div class="modal fade" id="editCategoriaModal" tabindex="-1" aria-labelledby="editCategoriaModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editCategoriaModalLabel">Editar Categoría</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Aquí puedes poner un formulario para editar la información de la categoría -->
        <form id="editCategoriaForm">
          <div class="mb-3">
            <label for="nombreEditCategoria" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombreEditCategoria">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button id="guardarCambiosEdit" type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Eliminar -->
<div class="modal fade" id="deleteCategoriaModal" tabindex="-1" aria-labelledby="deleteCategoriaModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteCategoriaModalLabel">Eliminar Categoría</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que quieres eliminar esta categoría?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button id="confirmarEliminacionCategoia" type="button" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</div>