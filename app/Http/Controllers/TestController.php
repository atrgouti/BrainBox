<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Models\Card;

class TestController extends Controller
{
    public function getWords($setID){
        $words = Card::where('set_id', $setID)->get();
        return inertia("TestWords", compact("words"));
    }
}
