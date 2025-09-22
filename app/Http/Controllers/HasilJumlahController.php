<?php

namespace App\Http\Controllers;

use App\Models\Hasil_jumlah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HasilJumlahController extends Controller
{

    public function index()
    {
        $hasil_jumlah = Hasil_jumlah::all();
        return Inertia::render('Admin/MenuHasilJumlah/Index', compact('hasil_jumlah'));
    }

    public function create()
    {
        return Inertia::render('Admin/MenuHasilJumlah/Create');
    }

    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'jumlah_neptu' => 'required|integer|min:0',
            'nama_makna' => 'required|string|max:255',
            'arti_makna' => 'required|string',
        ]);

        Hasil_jumlah::create($request->all());
        return redirect()->route('hasil_jumlah.index')->with('message', 'Hasil jumlah created successfully.');
    }

    public function edit(Hasil_jumlah $hasil_jumlah)
    {
        return Inertia::render('Admin/MenuHasilJumlah/Edit', compact('hasil_jumlah'));
    }
    public function update(Hasil_jumlah $hasil_jumlah, Request $request)
    {
        $request->validate([
            'jumlah_neptu' => 'required|integer|min:0',
            'nama_makna' => 'required|string|max:255',
            'arti_makna' => 'required|string',
        ]);

        $hasil_jumlah->update($request->all());
        return redirect()->route('hasil_jumlah.index')->with('message', 'Hasil Jumlah updated successfully.');
    }
    public function destroy(Hasil_jumlah $hasil_jumlah)
    {
        $hasil_jumlah->delete();
        return redirect()->route('hasil_jumlah.index')->with('message', 'Category deleted successfully.');
    }
}
