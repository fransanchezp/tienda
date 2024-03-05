@extends('app.base2')
@section('content')
<h1>CRUD Categorias</h1>
        <a  class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#creaCategoriaMod">Crear una nueva categoria</a>
        <div id="contenido" class="row row-cols-1 mt-5 mb-3">
        </div>
<script>
    var view = 2;
</script>
    <script src="{{ url('assets/script/categorias.js')}}"></script>
@endsection