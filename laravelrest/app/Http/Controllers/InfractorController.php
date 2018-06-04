<?php

namespace App\Http\Controllers;

use App\Infractor;
use Illuminate\Http\Request;

class InfractorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $infractores = Infractor::getAll(); //aca deberia obtener los Aspectos y NO las infractores
        return response()->json(
             $infractores
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

        $infractor = new Infractor;
        $infractor->nombre = $data['nombre'];
        $infractor->apellido = $data['apellido'];
        $infractor->nro_documento = $data['nro_documento'];
        $infractor->sexo = $data['sexo'];
        $infractor->save();

        return response()->json(
            $infractor
         );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Infractor  $infractor
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json(
            Infractor::find($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Infractor  $infractor
     * @return \Illuminate\Http\Response
     */
    public function edit(Infractor $infractor)
    {
        //
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Infractor  $infractor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = $request->all();
        $infractor = Infractor::find($id);

        if (!empty($infractor)) {
            $infractor->nombre = $data['nombre'];
            //$infractor->apellido = $data['apellido'];
            //$infractor->nro_documento = $data['nro_documento'];
            //$infractor->sexo = $data['sexo'];
            $infractor->update();
        }
        return response()->json(
            $infractor
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Infractor  $infractor
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $infractor = Infractor::find($id);
        $resultado = $infractor;
        if(!empty($infractor)){
            $infractor->delete();
        }

        return response()->json(
            $resultado
        );
    }
}
