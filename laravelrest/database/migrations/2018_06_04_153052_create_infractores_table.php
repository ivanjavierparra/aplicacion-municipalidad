<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInfractoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infractores', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('nombre',60);
            $table->string('apellido',60);
            $table->unsignedInteger('nro_documento');
            $table->enum('sexo', ['masculino', 'femenino']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('infractores');
    }
}
