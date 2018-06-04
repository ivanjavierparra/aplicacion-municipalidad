<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nacionalidad extends Model
{
    //
    protected $table = 'nacionalidades';
    

    public static function getAll(){
        return Nacionalidad::all();
    }

    

}
