<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ManageUserController extends Controller
{
    // BACK END
    public function index()
    {
        $users = User::all();
        return inertia('Admin/MenuUsers/Index', [
            'users' => $users,
        ]);
    }

    public function create()
    {
        $users = User::all();
        return inertia('Admin/MenuUsers/Create', compact('users'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string',
            'password' => 'required|max:255',
            'type' => 'required|string|in:admin,user',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => $request->type,
        ]);

        return redirect()->route('manage_user.index')->with('message', 'User created successfully.');
    }

    public function edit(User $users)
    {
        $users = User::findOrFail($users->id); // <-- ambil produk berdasarkan id
        return Inertia::render('Admin/MenuUsers/Edit', [
            'users' => $users,
        ]);
    }

    public function update(User $users, Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string',
            'password' => 'nullable|string|max:255',
            'type' => 'required|string|in:admin,user',
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'type' => $request->type,
        ];

        // kalau password diisi, update juga
        if ($request->filled('password')) {
            $data['password'] = bcrypt($request->password);
        }

        $users->update($data); //

        return redirect()->route('manage_user.index')->with('message', 'User updated successfully.');
    }
        public function destroy(User $users){
        $users->delete();
        return redirect()->route('manage_user.index')->with('message', 'Category deleted successfully.');
    }
}
