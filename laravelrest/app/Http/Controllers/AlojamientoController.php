<?php

namespace App\Http\Controllers;

use App\Alojamiento;
use Illuminate\Http\Request;

class AlojamientoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $alojamientos = Alojamiento::getAll(); //aca deberia obtener los Aspectos y NO las alojamientos
        return response()->json(
             $alojamientos
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

        $alojamiento = new Alojamiento;
        $alojamiento->nombre = $data['nombre_'];
        $alojamiento->direccion = $data['direccion'];
        $alojamiento->categoria = $data['categoria'];
        $alojamiento->cantidad_habitaciones = $data['cantidad_habitaciones'];
        $alojamiento->save();

        return response()->json(
            $alojamiento
         );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Alojamiento  $alojamiento
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json(
            Alojamiento::find($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Alojamiento  $alojamiento
     * @return \Illuminate\Http\Response
     */
    public function edit(Alojamiento $alojamiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Alojamiento  $alojamiento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = $request->all();
        $alojamiento = Alojamiento::find($id);

        if (!empty($alojamiento)) {
            $alojamiento->nombre = $data['nombre_'];
            //$alojamiento->direccion = $data['direccion'];
            $alojamiento->categoria = $data['categoria'];
            //$alojamiento->cantidad_habitaciones = $data['cantidad_habitaciones'];
            $alojamiento->update();
        }
        return response()->json(
            $alojamiento
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Alojamiento  $alojamiento
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $alojamiento = Alojamiento::find($id);
        $resultado = $alojamiento;
        if(!empty($alojamiento)){
            $alojamiento->delete();
        }

        return response()->json(
            $resultado
        );
    }
}
