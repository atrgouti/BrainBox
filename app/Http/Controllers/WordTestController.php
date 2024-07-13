<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Card;
use App\Models\Set;

class WordTestController extends Controller
{
    public function getWords($setID){
        $words = Card::where('set_id', $setID)->get();
        $set = Set::where('id', $setID)->get();
        return inertia("TestWords", compact("words", "set"));
    }
}
