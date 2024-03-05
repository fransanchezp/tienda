@extends('app.base2')
@section('content')
<h1>CRUD Productos</h1>
<a  class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#creaProductoMod">Crear un nuevo producto</a>
    <div id="contenido" class="row row-cols-1 mt-5 mb-3">
    
    </div>

<script>
    var view = 1;
</script>
    <script src="{{ url('assets/script/dashboard.js')}}"></script>
@endsection