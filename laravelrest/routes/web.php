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
//crud
Route::get('api/estadias', 'EstadiaController@index');
Route::post('api/estadias', 'EstadiaController@store');

Route::get('api/estadias/{id?}', 'EstadiaController@show');
Route::put('api/estadias/{id?}', 'EstadiaController@update');
Route::delete('api/estadias/{id?}', 'EstadiaController@destroy');

//filtros
Route::get('api/estadias/alojamientos/{id?}', 'EstadiaController@readAlojamientos'); #todo los alojamientos cuyo id es {id} en que estan en estadias.
Route::get('api/estadias/{id?}/alojamientos', 'EstadiaController@readAlojamiento'); #alojamiento de una estadia.
Route::get('api/estadias/{id?}/turistas', 'EstadiaController@readTurista');#turista de una estadia.

/*     APIS DE INFRACTORES   */
Route::get('api/infractores', 'InfractorController@index');
Route::post('api/infractores', 'InfractorController@store');

Route::get('api/infractores/{id?}', 'InfractorController@show');
Route::put('api/infractores/{id?}', 'InfractorController@update');
Route::delete('api/infractores/{id?}', 'InfractorController@destroy');

/*     APIS DE TIPOS DE INFRACCIONES   */
Route::get('api/tiposinfracciones', 'TipoInfraccionController@index');
Route::post('api/tiposinfracciones', 'TipoInfraccionController@store');

Route::get('api/tiposinfracciones/{id?}', 'TipoInfraccionController@show');
Route::put('api/tiposinfracciones/{id?}', 'TipoInfraccionController@update');
Route::delete('api/tiposinfracciones/{id?}', 'TipoInfraccionController@destroy');

/*     APIS DE INFRACCIONES   */
//crud
Route::get('api/infracciones', 'InfraccionController@index');
Route::post('api/infracciones', 'InfraccionController@store');

Route::get('api/infracciones/{id?}', 'InfraccionController@show');
Route::put('api/infracciones/{id?}', 'InfraccionController@update');
Route::delete('api/infracciones/{id?}', 'InfraccionController@destroy');

//filtros
Route::get('api/infracciones/tipos/{id?}', 'InfraccionController@readTipos'); #todas las infracciones cuyo tipo de infraccino tiene {di}.
Route::get('api/infracciones/{id?}/infractores', 'InfraccionController@readInfractor'); #infractor de una infraccion dada-
Route::get('api/infracciones/{id?}/tipos', 'InfraccionController@readTipo'); #tipo de infraccion de una infraccion.