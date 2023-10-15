<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Wordcard\IndexController;
use App\Http\Controllers\Wordcard\FolderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/index', [IndexController::class, 'index'])
    ->middleware(['auth', 'verified'])->name('index');

Route::prefix('folder')
->middleware('auth')
->name('folder.')
->controller(FolderController::class)
->group(function(){
    Route::get('/create','create')->name('create');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
