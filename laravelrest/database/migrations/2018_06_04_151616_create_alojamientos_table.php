<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlojamientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alojamientos', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('nombre',60);
            $table->string('direccion',60);
            $table->enum('categoria', ['5 Estrellas', '4 Estrellas', '3 Estrellas', '2 Estrellas', '1 Estrellas', 'Apart Hotel', 'Motel']);
            $table->unsignedInteger('cantidad_habitaciones');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alojamientos');
    }
}
