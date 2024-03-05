@extends('loginpage.master')

@section('title', 'Login')

@section('contentlog')
    <div class="box box_login shadow">
          <div class="row g-3 align-items-center">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">Password</label>
          </div>
          <div class="col-auto">
            <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
          <button type="button" class="btn btn-success">Ingresar</button>
          <div class=" footer mtop16">
              <a href="{{ url('/register')}}">No tienes cuenta?, Registrate</a>
          </div>
         </div>
    </div>
@stop