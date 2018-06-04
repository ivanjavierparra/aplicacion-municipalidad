<?php

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
    return view('welcome');
});

/*     APIS DE NACIONALIDADES  */
Route::get('api/nacionalidades', 'NacionalidadController@index');
Route::post('api/nacionalidades', 'NacionalidadController@store');

Route::get('api/nacionalidades/{id?}', 'NacionalidadController@show');
Route::put('api/nacionalidades/{id?}', 'NacionalidadController@update');
Route::delete('api/nacionalidades/{id?}', 'NacionalidadController@destroy');

/*     APIS DE TURISTAS   */
Route::get('api/turistas', 'TuristaController@index');
Route::post('api/turistas', 'TuristaController@store');

Route::get('api/turistas/{id?}', 'TuristaController@show');
Route::put('api/turistas/{id?}', 'TuristaController@update');
Route::delete('api/turistas/{id?}', 'TuristaController@destroy');

/*     APIS DE ALOJAMIENTOS   */
Route::get('api/alojamientos', 'AlojamientoController@index');
Route::post('api/alojamientos', 'AlojamientoController@store');

Route::get('api/alojamientos/{id?}', 'AlojamientoController@show');
Route::put('api/alojamientos/{id?}', 'AlojamientoController@update');
Route::delete('api/alojamientos/{id?}', 'AlojamientoController@destroy');

/*     APIS DE ESTADIAS   */
Route::get('api/estadias', 'EstadiaController@index');
Route::post('api/estadias', 'EstadiaController@store');

Route::get('api/estadias/{id?}', 'EstadiaController@show');
Route::put('api/estadias/{id?}', 'EstadiaController@update');
Route::delete('api/estadias/{id?}', 'EstadiaController@destroy');