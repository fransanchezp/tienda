<div class="modal" id="creaProductoMod" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Nuevo Producto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input class="form-control" type="text" name="nombre" id="nombre" maxlenght="100" placeholder="Nombre producto"/>
                <select name="idcategorias" id="idcategorias" class="form-control">
                    @foreach($categorias as $categoria)
                        <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
                    @endforeach
                </select>
                <input class="form-control" type="text" name="descripcion" id="descripcion" maxlenght="100" placeholder="Descripcion"/>
                <input class="form-control" type="number" name="precio" id="precio" value="0"/>
                <input class="form-control" type="file" name="image" id="image"/>
            </div>
            <div class="modal-footer">
                <a type="submit" id="btnCreaProducto"  class="btn btn-success">Add Producto</a>
            </div>
        </div>
    </div>
</div>