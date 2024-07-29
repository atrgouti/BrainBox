<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\QuizCard;


class QuickController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wortschatz_quizzes = Quiz::where("type", "wortschatz")->get();
        $präposition_quizzes = Quiz::where("type", "präposition")->get();
        return inertia("Quizess/Quizess", compact('wortschatz_quizzes', 'präposition_quizzes'));
        }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $quizzes = QuizCard::where("quiz_id", $id)->get();
        $quizzName = Quiz::where("id", $id)->get();
        return inertia("Quizess/QuizCards", compact('quizzes', 'quizzName'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
