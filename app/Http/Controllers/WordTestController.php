<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreSetRequest;
use App\Http\Requests\UpdateSetRequest;
use App\Http\Resources\SetResource;
use App\Http\Resources\CardResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

class WordTestController extends Controller
{
    public function index(){
        return inertia("TestWords", [
            
        ]);
    }
}
