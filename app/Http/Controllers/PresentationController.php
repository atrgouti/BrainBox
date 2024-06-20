<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Presentation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

class PresentationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $mypresentations = Presentation::where('userid', $user->id)->get(); 
        return inertia("Presentations", compact("mypresentations"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("PresentationComponants/AddNewPresentation");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $presentation = new Presentation();
        $presentation->userid = $user->id;
        $presentation->title = $request->input("title");
        $presentation->description = $request->input("description");

        $presentation->save();
        return redirect("/presentation")->with("success", "set has been added with success");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $p = Presentation::where('id', $id)->get(); 
        return inertia("PresentationComponants/ViewPresentation", compact("p"));
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
