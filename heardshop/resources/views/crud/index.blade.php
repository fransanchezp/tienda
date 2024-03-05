@extends('app.base2')
@section('content')
<div id="crudcontent" class=" container d-felx flex-column justify-content-evenly mt-5">
    <div class="row">
        <div class="col text-center">
            <h1 class="display-3">crud shop</h1>
        </div>
    </div>
    <div class="row mt-4 justify-content-center">
        <div class="d-flex text-center justify-content-evenly w-75">
            <a href="{{url('productos')}}" class="btn btn-success mr-2">Productos</a>
            <a href="{{url('categorias')}}" class="btn btn-success">Categorias</a>
        </div>
    </div>
</div>

@endsection


