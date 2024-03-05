<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\CrudController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PhotoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('front.index');
});

Route::get('producto', [ProductosController::class, 'index'])->name('productos.index');
Route::get('producto/{id}', [ProductosController::class, 'detail'])->name('productos.detail');
Route::post('producto', [ProductosController::class, 'store'])->name('productos.store');
Route::post('/categoria', [CategoriaController::class, 'store']);
Route::get('/categoria/{id}', [CategoriaController::class, 'show']);

Route::put('producto/{id}', [ProductosController::class, 'update'])->name('productos.update');
Route::put('/categoria/{id}', [CategoriaController::class, 'update']);
Route::delete('/producto/{id}', [ProductosController::class, 'delete']);
Route::delete('/categoria/{id}', [CategoriaController::class, 'delete']);

Route::get('categoria', [CategoriaController::class, 'index'])->name('categoria.index');


Route::resource('crud',CrudController::class);
Route::resource('login',LoginController::class);

Route::get('productos', [CrudController::class, 'productos'])->name('crud.productos');
Route::get('categorias', [CrudController::class, 'categorias'])->name('crud.categorias');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
