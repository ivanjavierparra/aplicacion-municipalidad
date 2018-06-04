<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTuristasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('turistas', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->unsignedInteger('nro_documento');
            $table->string('nombre',60);
            $table->string('apellido',60);
            $table->unsignedInteger('nacionalidad_id');
            $table->foreign('nacionalidad_id')->references('id')->on('nacionalidades');
            $table->string('email',60);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('turistas');
    }
}
