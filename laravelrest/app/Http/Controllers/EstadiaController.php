<?php

namespace App\Http\Controllers;

use App\Estadia;
use Illuminate\Http\Request;

class EstadiaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $estadias = Estadia::getAll(); //aca deberia obtener los Aspectos y NO las estadias
        return response()->json(
             $estadias
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

        $estadia = new Estadia;
        $estadia->fecha_desde = $data['fecha_desde'];
        $estadia->fecha_hasta = $data['fecha_hasta'];
        $estadia->turista_id = $data['turista_id'];
        $estadia->alojamiento_id = $data['alojamiento_id'];
        $estadia->nro_habitacion = $data['nro_habitacion'];
        $estadia->save();

        return response()->json(
            $estadia
         );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Estadia  $estadia
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json(
            Estadia::find($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Estadia  $estadia
     * @return \Illuminate\Http\Response
     */
    public function edit(Estadia $estadia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Estadia  $estadia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = $request->all();
        $estadia = Estadia::find($id);

        if (!empty($estadia)) {
            $estadia->fecha_desde = $data['fecha_desde'];
            $estadia->fecha_hasta = $data['fecha_hasta'];
            //$estadia->turista_id = $data['turista_id'];
            //$estadia->alojamiento_id = $data['alojamiento_id'];
            //$estadia->nro_habitacion = $data['nro_habitacion'];
            $estadia->update();
        }
        return response()->json(
            $estadia
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Estadia  $estadia
     * @return \Illuminate\Http\Response
     */
    public function destroy(Estadia $estadia)
    {
        //
        $estadia = Estadia::find($id);
        $resultado = $estadia;
        if(!empty($estadia)){
            $estadia->delete();
        }

        return response()->json(
            $resultado
        );
    }
}
