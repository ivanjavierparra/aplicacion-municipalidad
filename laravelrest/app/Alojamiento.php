<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alojamiento extends Model
{
    //
    protected $table = 'alojamientos';

    public static function getAll(){
        return Alojamiento::all();
    }
}
