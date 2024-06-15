<?php

namespace App\Http\Controllers;

use App\Models\Set;
use App\Models\Card;
use App\Http\Requests\StoreSetRequest;
use App\Http\Requests\UpdateSetRequest;
use App\Http\Resources\SetResource;
use App\Http\Resources\CardResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

class SetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $query = Set::where('userid', $user->id); 
        $sets = $query->paginate(10)->onEachSide(1);
        return inertia("Sets/Index", [
            "sets" => SetResource::collection($sets)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Sets/AddNewSet", []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSetRequest $request)
    {
        $user = Auth::user();
        $set = new Set();
        $set->userid = $user->id;
        $set->title = $request->input("title");

        $set->save();
        return redirect("/Set")->with("success", "set has been added with success");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
{
    // // Fetch cards where set_id equals the ID from the URL parameter
    // $user = Auth::user();
    // $cards = Card::where('set_id', 1)->get();

    // // Transform the collection of cards into a resource collection
    // $cardResources = $cards->map(function ($card) {
    //     return new CardResource($card);
    // });

    // // Return the set and its cards
    // return inertia('Sets/ShowWords', [
    //     'set' => new SetResource($set),
    //     'cards' => $cardResources,
    // ]);
    $cards = Card::where('set_id', $id)->get();
    $nameOfTheSet = Set::where("id", $id)->get();

    return inertia('Sets/ShowWords', [
        'cards' => $cards,
        'nameOfTheSet' => $nameOfTheSet
    ]);
}




    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Set $set)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSetRequest $request, Set $set)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $sett = Set::findOrFail($id);
        $sett->delete();
        return redirect('/Set')->with('success', 'Employé a été supprimé avec succès');
    }
}
