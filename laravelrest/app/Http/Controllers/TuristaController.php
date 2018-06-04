<?php

namespace App\Http\Controllers;

use App\Turista;
use Illuminate\Http\Request;

class TuristaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $turistas = Turista::all(); 
        return response()->json(
             $turistas
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
        //
        $data = $request->all();
        
        $turista = new Turista;
        $turista->nombre = $data['nombre_'];
        $turista->apellido = $data['apellido'];
        $turista->nro_documento = $data['nro_documento'];
        $turista->nacionalidad_id = $data['nacionalidad_id'];
        $turista->email = $data['email'];
    
        $turista->save();
        
        
        return response()->json(
            $turista
         );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Turista  $turista
     * @return \Illuminate\Http\Response
     */
    public function show(Turista $turista)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Turista  $turista
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        return response()->json(
            Turista::find($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Turista  $turista
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = $request->all();
        $turista = Turista::find($id);

        if (!empty($turista)) {
            $turista->nombre = $data['nombre_'];
            $turista->apellido = $data['apellido'];
            //$turista->nro_documento = $data['nro_documento'];
            //$turista->nacionalidad_id = $data['nacionalidad_id'];
            //$turista->email = $data['email'];
            $turista->update();
        }
        return response()->json(
            $turista
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Turista  $turista
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $turista = Turista::find($id);
        $resultado = $turista;
        if(!empty($turista)){
            $turista->delete();
        }

        return response()->json(
            $resultado
        );
    }
}
