<?php

namespace App\Http\Controllers\Wordcard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Folder;

class IndexController extends Controller
{
    public function index()
    {
        $folders = Folder::where('user_id',Auth::id())
        ->orderBy('id', 'desc')
        ->get();

        // dd($folders);

        return Inertia::render('Index',[
            'folders' => $folders
        ]);
    }
}
