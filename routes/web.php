<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;




Route::get('/', function () {
    return view('welcome');
});

// Route::post('/login', [LoginController::class, 'login']);


Route::get('/01php', function () {
    return view('php.practice.01php');
});
