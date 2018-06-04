<?php

namespace App\Http\Controllers;

use App\TipoInfraccion;
use Illuminate\Http\Request;

class TipoInfraccionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $tipo_infracciones = TipoInfraccion::getAll(); //aca deberia obtener los Aspectos y NO las tipo_infracciones
        return response()->json(
             $tipo_infracciones
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

        $tipo_infraccion = new TipoInfraccion;
        $tipo_infraccion->nombre = $data['nombre'];
        $tipo_infraccion->precio = $data['precio'];
        $tipo_infraccion->tipo = $data['tipo'];
        $tipo_infraccion->save();

        return response()->json(
            $tipo_infraccion
         );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TipoInfraccion  $tipoInfraccion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json(
            TipoInfraccion::find($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TipoInfraccion  $tipoInfraccion
     * @return \Illuminate\Http\Response
     */
    public function edit(TipoInfraccion $tipoInfraccion)
    {
        //
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TipoInfraccion  $tipoInfraccion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = $request->all();
        $tipo_infraccion = TipoInfraccion::find($id);

        if (!empty($tipo_infraccion)) {
            //$tipo_infraccion->nombre = $data['nombre'];
            $tipo_infraccion->precio = $data['precio'];
            //$tipo_infraccion->tipo = $data['tipo'];
            $tipo_infraccion->update();
        }
        return response()->json(
            $tipo_infraccion
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TipoInfraccion  $tipoInfraccion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $tipo_infraccion = TipoInfraccion::find($id);
        $resultado = $tipo_infraccion;
        if(!empty($tipo_infraccion)){
            $tipo_infraccion->delete();
        }

        return response()->json(
            $resultado
        );
    }
}
