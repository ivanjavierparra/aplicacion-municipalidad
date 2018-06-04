<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoInfraccion extends Model
{
    //
    protected $table = 'tipoinfracciones';
    

    public static function getAll(){
        return TipoInfraccion::all();
    }
}
