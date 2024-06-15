<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Set;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;



class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Set::all();
        // $sets = $query->paginate(10)->onEachSide(1);
        return inertia("Sets/ShowWords", [
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        return inertia("Sets/AddNewWord", compact('id'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCardRequest $request)
    {
       
        $set = new Card();
        $set->set_id = $request->input("set_id");
        $set->word = $request->input("word");
        $set->translation = $request->input("translation");
        $set->example = $request->input("example");

        $set->save();
        return redirect("/Set")->with("success", "set has been added with success");
    }

    /**
     * Display the specified resource.
     */
    public function show(Card $card)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Card $card)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardRequest $request, Card $card)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Card $card)
    {
        //
    }
}
