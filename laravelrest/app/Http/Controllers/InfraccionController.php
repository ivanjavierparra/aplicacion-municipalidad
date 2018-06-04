<?php

namespace App\Http\Controllers;

use App\Infraccion;
use Illuminate\Http\Request;

class InfraccionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $infracciones = Infraccion::getAll(); //aca deberia obtener los Aspectos y NO las infracciones
        return response()->json(
             $infracciones
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

        $infraccion = new Infraccion;
        $infraccion->fecha = $data['fecha'];
        $infraccion->tipo_id = $data['tipo_id'];
        $infraccion->infractor_id = $data['infractor_id'];
        $infraccion->descripcion = $data['descripcion'];
        $infraccion->pagada = $data['pagada'];
        $infraccion->save();

        return response()->json(
            $data
         );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Infraccion  $infraccion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json(
            Infraccion::find($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Infraccion  $infraccion
     * @return \Illuminate\Http\Response
     */
    public function edit(Infraccion $infraccion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Infraccion  $infraccion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = $request->all();
        $infraccion = Infraccion::find($id);

        if (!empty($infraccion)) {
            //$infraccion->fecha = $data['fecha'];
            //$infraccion->tipo_id = $data['tipo_id'];
            //$infraccion->infractor_id = $data['infractor_id'];
            //$infraccion->descripcion = $data['descripcion'];
            $infraccion->pagada = $data['pagada'];
            $infraccion->update();
        }
        return response()->json(
            $infraccion
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Infraccion  $infraccion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $infraccion = Infraccion::find($id);
        $resultado = $infraccion;
        if(!empty($infraccion)){
            $infraccion->delete();
        }

        return response()->json(
            $resultado
        );
    }
}

