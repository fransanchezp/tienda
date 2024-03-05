<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productos;
use App\Models\Categorias;

class ProductosController extends Controller {
    function index(Request $request) {
        $categorias = Categorias::all();
        $perPage = $request->input('perPage', 9); // Obtener el valor de perPage de la solicitud, con un valor predeterminado de 10
        $page = $request->input('page', 1); // Obtener el valor de la página de la solicitud, con un valor predeterminado de 1
        
        $productos = Productos::paginate($perPage);
        $stock = count(Productos::all());
        $paginaMaxima = ceil($stock/$perPage);
    
        $paginacion[] = [
            "page" => $page,
            "perPage" => $perPage,
            "stock" => $stock,
            "paginaMaxima" => $paginaMaxima,
        ];

    
        return response()->json(['productos' => $productos, 'categorias' => $categorias, 'paginacion' => $paginacion]);
    }
    
    function store(Request $request) {
        try{
            $producto = new Productos($request->all());
            $producto->idcategorias = $request->idcategorias;
            $producto->save();
            
        }catch(\Exception $e) {
            return response() -> json(['result' -> $e]);
        }
        return response()->json(['result' => true, 'productos' => Productos::all(), 'message' => 'Producto creado perfectamente']);
    }
    
    function detail(Request $request, $id) {
        $producto = Productos::find($id);
        $categoria = Categorias::find($producto->idcategorias);
        $caregorias = Categorias::all();
        return response()->json(['productos' => $producto, 'categoria' => $categoria->nombre, 'categorias' => $caregorias]);
    }
    
    function update(Request $request, $id) {
        $producto = Productos::find($id);
        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $producto->nombre = $request->nombre;
        $producto->idcategorias = $request->idcategorias;
        $producto->precio = $request->precio;
        $producto->descripcion = $request->descripcion;

        $producto->save();

        return response()->json(['producto' => $producto]);
    }
    
    function delete(Request $request, $id) {
        $producto = Productos::find($id);
        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $producto->delete();

        return response()->json(['message' => 'Producto eliminado con éxito']);
    }
}
