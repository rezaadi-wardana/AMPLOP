<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard()
    {
        if (Auth::check() && Auth::user()->type === "user") {
            return Inertia::render('Users/Dashboard');
        } elseif (Auth::check() && Auth::user()->type === "admin") {
            return Inertia::render('Admin/Dashboard');
        } else {
            return redirect()->route('login'); // lebih baik redirect ke route login
        }

            // return Inertia::render('Admin/Testfile');
    }
}
