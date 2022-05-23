<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('maestros', 'App\Http\Controllers\MaestroController')->only('index', 'store', 'show', 'update','destroy');

Route::resource('items', 'App\Http\Controllers\ItemController')->only('index', 'store', 'show', 'update','destroy');

Route::get('maestros/{maestro}/items', [App\Http\Controllers\MaestroItemController::class, '__invoke'])->name('maestros.items.index');