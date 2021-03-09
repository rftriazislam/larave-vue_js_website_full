<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
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

Route::get('/admin', function () {
    return view('welcome');
});

Route::post('/app/create-tag',  [AdminController::class,'add_tags']);

Route::post('/app/edit-tag',  [AdminController::class,'edit_tags']);
Route::post('/app/delete-tag',  [AdminController::class,'delete_tags']);

Route::post('/app/upload',  [AdminController::class,'upload_file']);




Route::get('/app/tags_get',  [AdminController::class,'get_tags']);





Route::get('{any}', function () {
    
    return view('app');

})->where('any', '.*');