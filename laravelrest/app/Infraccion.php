<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Infraccion extends Model
{
    //
    protected $table = 'infracciones';
    

    public static function getAll(){
        return Infraccion::all();
    }
}
