<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SetController;
use App\Http\Controllers\WordTestController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', fn() => Inertia::render('Dashboard'))->name('dashboard');
    
    Route::resource('Word', WordController::class);
    Route::resource('Set', SetController::class);
    Route::resource('Card', CardController::class);
    Route::resource('User', UserController::class);

     // Custom route for showing a specific set
    //  Route::get('/Set/{set}', [SetController::class, 'show'])->name('sets.show');
    Route::get('/card/{id}', [SetController::class, 'show'])->name('cards.show');
    Route::delete('/card/{id}/{setId}', [CardController::class, 'destroy'])->name('cards.delete');
    Route::get('/editcard/{id}', [CardController::class, 'edit'])->name('cards.edit');
    Route::patch('/editcard/{id}', [CardController::class, 'update'])->name('cards.update');
    Route::get('/addnewset', [SetController::class, 'create'])->name('sets.create');
    Route::post('/addnewset', [SetController::class, 'store'])->name('sets.store');
    Route::delete('/set/{id}', [SetController::class, 'destroy'])->name('sets.delete');
    Route::get('/card/test', [WordTestController::class, 'index'])->name('cards.test');
    Route::get('/card/{id}/addnewword', [CardController::class, 'create'])->name('cards.create');
    Route::post('/addnewword', [CardController::class, 'store'])->name('cards.store');
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
