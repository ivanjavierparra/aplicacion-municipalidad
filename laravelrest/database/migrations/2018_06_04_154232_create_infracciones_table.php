<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInfraccionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infracciones', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->date('fecha');
            $table->unsignedInteger('tipo_id');
            $table->foreign('tipo_id')->references('id')->on('tipoinfracciones');
            $table->unsignedInteger('infractor_id');
            $table->foreign('infractor_id')->references('id')->on('infractores');
            $table->mediumText('descripcion');
            $table->boolean('pagada')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('infracciones');
    }
}
