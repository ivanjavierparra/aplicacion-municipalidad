<?php

namespace App\Http\Controllers;

use App\Nacionalidad;
use Illuminate\Http\Request;

class NacionalidadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nacionalidades = Nacionalidad::getAll(); //aca deberia obtener los Aspectos y NO las nacionalidades
        return response()->json(
             $nacionalidades
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $nacionalidad = new Nacionalidad;
        $nacionalidad->nombre = $data['nombre'];
        $nacionalidad->save();

        return response()->json(
            $nacionalidad
         );

       /* return response()->json(
            $data['nombre_']
       );*/
        
        //return "hola";
        //$nacionalidad = new Nacionalidad;

        //$user->nombre = $request->body->nombre;

        //$user->save();

        //https://stackoverflow.com/questions/45229945/laravel-store-method?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    }

    

    /**
     * Display the specified resource.
     *
     * @param  \App\Nacionalidad  $nacionalidad
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json(
            Nacionalidad::find($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Nacionalidad  $nacionalidad
     * @return \Illuminate\Http\Response
     */
    public function edit(Nacionalidad $nacionalidad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Nacionalidad  $nacionalidad
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $nacionalidad = Nacionalidad::find($id);

        if (!empty($nacionalidad)) {
            $nacionalidad->nombre = $data['nombre'];
            $nacionalidad->update();
        }
        return response()->json(
            $nacionalidad
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Nacionalidad  $nacionalidad
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        
        $nacionalidad = Nacionalidad::find($id);
        $resultado = $nacionalidad;
        if(!empty($nacionalidad)){
            $nacionalidad->delete();
        }

        return response()->json(
            $resultado
        );
        

    }
}
