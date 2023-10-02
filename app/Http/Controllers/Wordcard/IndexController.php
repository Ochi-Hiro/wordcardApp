<?php

namespace App\Http\Controllers\Wordcard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index()
    {
        return Inertia::render('Index');
    }
}
