<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\QuizCard;
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
    public function store(StoreCardRequest $request, $setID)
    {
       
        $set = new Card();
        $set->set_id = $request->input("set_id");
        $set->word = $request->input("word");
        $set->translation = $request->input("translation");
        $set->example = $request->input("example");

        $set->save();
        return redirect()->route('cards.show', $setID)->with('success', 'Set has been deleted successfully.');
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
    public function edit($setId, $id)
    {
        $carrd = Card::findOrFail($id);
        return inertia("Sets/updateWord", compact("setId","carrd"));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardRequest $request, $id, $setId)
    {
        $card1 = Card::findOrFail($id);
        $card1->word = $request->get('word');
        $card1->translation = $request->get('translation');
        $card1->example = $request->get('example');
        $card1->update();
        return redirect()->route('cards.show', ['id' => $setId])->with('success', 'card a été supprimé avec succès');
 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id, $setId)
{
    $cardd = Card::findOrFail($id);
    $cardd->delete();
    return redirect()->route('cards.show', ['id' => $setId])->with('success', 'card a été supprimé avec succès');
}

}
