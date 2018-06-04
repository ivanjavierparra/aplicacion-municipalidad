<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstadiasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estadias', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->date('fecha_desde');
            $table->date('fecha_hasta');
            $table->unsignedInteger('turista_id');
            $table->foreign('turista_id')->references('id')->on('turistas');
            $table->unsignedInteger('alojamiento_id');
            $table->foreign('alojamiento_id')->references('id')->on('alojamientos');
            $table->unsignedInteger('nro_habitacion');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estadias');
    }
}
