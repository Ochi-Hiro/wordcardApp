<?php

namespace App\Http\Controllers\Wordcard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FolderController extends Controller
{
    public function create(){
        return Inertia::render('createfolder');
    }
}
