<?php

namespace App\Http\Controllers;

use App\Models\Hasil_sisa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HasilSisaController extends Controller
{

    public function index()
    {
        $hasil_sisa = Hasil_sisa::all();
        return Inertia::render('Admin/MenuHasilSisa/Index', compact('hasil_sisa'));
    }

    public function create()
    {
        return Inertia::render('Admin/MenuHasilSisa/Create');
    }

    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'jumlah_neptu' => 'required|integer|min:0',
            'nama_makna' => 'required|string|max:255',
            'arti_makna' => 'required|string',
        ]);

        Hasil_sisa::create($request->all());
        return redirect()->route('hasil_sisa.index')->with('message', 'Hasil jumlah created successfully.');
    }

    public function edit(Hasil_sisa $hasil_sisa)
    {
        return Inertia::render('Admin/MenuHasilSisa/Edit', compact('hasil_sisa'));
    }
    public function update(Hasil_sisa $hasil_sisa, Request $request)
    {
        $request->validate([
            'jumlah_neptu' => 'required|integer|min:0',
            'nama_makna' => 'required|string|max:255',
            'arti_makna' => 'required|string',
        ]);

        $hasil_sisa->update($request->all());
        return redirect()->route('hasil_sisa.index')->with('message', 'Hasil Jumlah updated successfully.');
    }
    public function destroy(Hasil_sisa $hasil_sisa)
    {
        $hasil_sisa->delete();
        return redirect()->route('hasil_sisa.index')->with('message', 'Category deleted successfully.');
    }
}

