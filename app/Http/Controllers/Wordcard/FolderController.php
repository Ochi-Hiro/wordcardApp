<?php

namespace App\Http\Controllers\Wordcard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Folder;

class FolderController extends Controller
{
    public function create(){
        return Inertia::render('createfolder');
    }

    public function store(Request $request){
        try{
            DB::transaction(function() use($request) {
                $folder = Folder::create([
                    'user_id' => Auth::id(),
                    'name' => $request->folder_name,
                    'is_public' => $request->is_public
                ]);
            }, 2);
        } catch(Throwable $e){
            Log::error($e);
            throw $e;
        };

        return to_route('index');
    }
}
