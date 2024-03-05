<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorias;

class CategoriaController extends Controller {
    function index(){
        $categorias = Categorias::all();
        return response()->json(['categorias' => $categorias]);
    }
    
    function store(Request $request) {
        try{
            $categorias = new Categorias($request->all());
            $categorias->save();
            
        }catch(\Exception $e) {
            return response()->json(['result' => $e]);
        }
        return response()->json(['result' => true, 'categorias' => Categorias::all(), 'message' => 'Categoria creada perfectamente']);
    }
    
    function update(Request $request, $id) {
        $categoria = Categorias::find($id);
        if (!$categoria) {
            return response()->json(['message' => 'Categoria no encontrada'], 404);
        }

        $categoria->nombre = $request->nombre;
        $categoria->save();

        return response()->json(['categoria' => $categoria]);
    }
    
    function delete(Request $request, $id) {
        $categoria = Categorias::find($id);
        if (!$categoria) {
            return response()->json(['message' => 'Categoria no encontrada'], 404);
        }

        $categoria->delete();

        return response()->json(['message' => 'Categoria eliminada con éxito']);
    }
}