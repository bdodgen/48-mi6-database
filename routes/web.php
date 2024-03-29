<?php

use Illuminate\Support\Facades\Route;

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
    return view('index');
});

Route::get('/people-of-interest', [App\Http\Controllers\PeopleController::class, 'index'])->name('people');
Route::get('/mission/{id}', [App\Http\Controllers\MissionController::class, 'show']);

Route::view('/missions/{path?}', 'missions/app')->where('path', '.*')->name('missions.app');