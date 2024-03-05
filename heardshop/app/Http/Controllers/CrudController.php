<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productos;
use App\Models\Categorias;

class CrudController extends Controller {
    function index() {
        return view('crud.index',['categorias' => Categorias::all()]);
    }
    
    function productos(){
        return view('crud.productos',['categorias' => Categorias::all()]);
    }
    
    function categorias(){
        return view('crud.categorias',['categorias' => Categorias::all()]);
    }
}
