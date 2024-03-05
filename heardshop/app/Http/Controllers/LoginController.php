<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productos;

class LoginController extends Controller {
    function index() {
        return view('loginpage.login');
    }
}
