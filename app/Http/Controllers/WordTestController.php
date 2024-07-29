<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Card;
use App\Models\Set;
use App\Models\Quiz;
use App\Models\QuizCard;


class WordTestController extends Controller
{
    public function getWords($setID){
        $words = Card::where('set_id', $setID)->get();
        $set = Set::where('id', $setID)->get();
        return inertia("TestWords", compact("words", "set"));
    }
    public function getQuizzes($quizzID){
        $quizzes = QuizCard::where('quiz_id', $quizzID)->get();
        $quizzName = Quiz::where('id', $quizzID)->get();
        return inertia("TestQuizzes", compact("quizzes", "quizzName"));
    }
}
