<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;
    protected $table = 'productos';
    
    protected $fillable = ['nombre','idcategoria','descripcion','precio', 'imagen'];
    
    public $timestamps = false;
    
    public function photo() {
        return $this->hasMany('App\Models\Photo', 'idproductos');
    }

}
