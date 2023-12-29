<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', function (Request $request){
    return "Get all categories";
});

Route::post('/categories', function (Request $request){
    return "Create 1 category";
});

Route::patch('/categories/{categoryID}', function (Request $request){
    return "Update 1 category";
});

Route::delete('/categories/{categoryID}', function (Request $request){
    return "Delete 1 categories";
});

Route::get('/products', function (Request $request){
    return "Get all products";
});

Route::post('/products', function (Request $request){
    return "Create 1 products";
});

Route::get('/products/{productID}', function (Request $request){
    return "Get 1 products";
});

Route::patch('/products/{productID}', function (Request $request){
    return "Update 1 products";
});

Route::delete('/products/{productID}', function (Request $request){
    return "Delete 1 products";
});

Route::get('/categories/{categoryID}/products', function (Request $request){
    return "Get all products belong to categoryID";
});