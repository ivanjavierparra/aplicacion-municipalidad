<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Infractor extends Model
{
    //
    protected $table = 'infractores';
    

    public static function getAll(){
        return Infractor::all();
    }
}
