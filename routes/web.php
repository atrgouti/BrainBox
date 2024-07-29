<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SetController;
use App\Http\Controllers\WordTestController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PresentationController;
use App\Http\Controllers\QuickController;
use App\Http\Controllers\ArticleController;
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
// Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('/', fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    
    Route::resource('Word', WordController::class);
    Route::resource('Set', SetController::class);
    Route::resource('Card', CardController::class);
    Route::resource('User', UserController::class);


    Route::get('/sets', [SetController::class, 'index'])->name('sets.index');


     // Custom route for showing a specific set
    //  Route::get('/Set/{set}', [SetController::class, 'show'])->name('sets.show');
    Route::get('/card/{id}', [SetController::class, 'show'])->name('cards.show');
    Route::delete('/card/{id}/{setId}', [CardController::class, 'destroy'])->name('cards.delete');
    Route::get('/editcard/{setId}/{id}', [CardController::class, 'edit'])->name('cards.edit');
    Route::patch('/editcard/{id}/{setId}', [CardController::class, 'update'])->name('cards.update');
    Route::get('/addnewset', [SetController::class, 'create'])->name('sets.create');
    Route::post('/addnewset', [SetController::class, 'store'])->name('sets.store');
    Route::delete('/set/{id}', [SetController::class, 'destroy'])->name('sets.delete');
    Route::get('/card/{id}/addnewword', [CardController::class, 'create'])->name('cards.create');
    Route::post('/addnewword/{setId}', [CardController::class, 'store'])->name('cards.store');

    // this is presentation routes 
    
    Route::get('/presentation', [PresentationController::class, 'index'])->name('presentations.index');    
    Route::get('/presentation/{id}', [PresentationController::class, 'show'])->name('presentations.show');    
    Route::get('/presentations/addnewPresentation', [PresentationController::class, 'create'])->name('presentations.create');    
    Route::post('/presentations/addnewPresentation', [PresentationController::class, 'store'])->name('presentations.store');    
    Route::delete('/presentations/{id}', [PresentationController::class, 'destroy'])->name('presentations.delete');    
    Route::get('/presentations/edit/{id}', [PresentationController::class, 'edit'])->name('presentations.edit');    
    Route::patch('/presentations/{id}', [PresentationController::class, 'update'])->name('presentations.update');    


    // test routes
    Route::get("/sets/test/{id}", [WordTestController::class, 'getWords'])->name("words.test");
    Route::get("/sets/quizz/{id}", [WordTestController::class, 'getQuizzes'])->name("words.quizz");

    
    //this is articles route 
    Route::get("/article/{id}", [DashboardController::class, 'show'])->name('article.show');

    //this quizess
    Route::get("/quizzes", [QuickController::class, 'index'])->name("quizzes.index");
    Route::get("/quizzes/{id}", [QuickController::class, 'show'])->name("quizzes.show");

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch("/profile/updateInformations/{id}", [ProfileController::class, 'updatePersonalINformation'])->name('profile.updatePersonaleInformation');
    Route::post('/profile/updateProfileImage', [ProfileController::class, 'updateProfileImage'])->name('profile.updateProfileImage');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
