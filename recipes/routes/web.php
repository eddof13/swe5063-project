<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CookbookController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\InstructionController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\SocialController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/Ingredients', function () {
    return Inertia::render('Ingredients', [
        'ingredients' => App\Models\Category::where('type', 'ingredient')->get()
    ]);
});

Route::get('/Recipes', function () {
    return Inertia::render('Recipes', [
        'recipes' => App\Models\Recipe::with('ingredients', 'instructions')->get()
    ]);
});

Route::get('/Recipes/by_category/{category}', function (string $category) {
    return Inertia::render('Recipes', [
        'recipes' => App\Models\Category::where('name', $category)->first()->recipes()->with('ingredients', 'instructions')->get()
    ]);
});

Route::get('/Recipes/by_ingredient/{ingredient}', function (string $ingredient) {
    return Inertia::render('Recipes', [
        'recipes' => App\Models\Category::where('name', $ingredient)->first()->recipes()->with('ingredients', 'instructions')->get()
    ]);
});

Route::get('/Categories', function () {
    return Inertia::render('Categories', [
        'categories' => App\Models\Category::where('type', 'category')->get()
    ]);
});

Route::get('/Toprated', function () {
    return Inertia::render('Toprated', [

    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('categories', CategoryController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('comments', CommentController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('cookbooks', CookbookController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('favorites', FavoriteController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('instructions', InstructionController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('ratings', RatingController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('recipes', RecipeController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('socials', SocialController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
