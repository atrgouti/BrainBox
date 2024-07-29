<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quiz_cards', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('quiz_id')->constrained("quizzes");
            $table->string("word");
            $table->string("translation");
            $table->string("example");
            $table->string("memorized");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz_cards');
    }
};
