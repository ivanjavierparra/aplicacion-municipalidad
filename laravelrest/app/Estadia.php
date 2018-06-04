<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estadia extends Model
{
    //
    protected $table = 'estadias';
    

    public static function getAll(){
        return Estadia::all();
    }
}
