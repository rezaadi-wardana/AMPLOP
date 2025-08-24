<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CekJodohController extends Controller
{
    public function cariMakna(Request $request)
    {
        $jumlah = (int) $request->input('jumlah_neptu');

        // Cek di tabel hasil_jumlahs
        $hasilJumlah = DB::table('hasil_jumlahs')
            ->whereRaw("FIND_IN_SET(?, jumlah_neptu)", [$jumlah])
            ->first();

        if ($hasilJumlah) {
            return response()->json([
                'nama_makna' => $hasilJumlah->nama_makna,
                'arti_makna' => $hasilJumlah->arti_makna
            ]);
        }

        // Cek di tabel hasil_sisas
        $hasilSisa = DB::table('hasil_sisas')
            ->whereRaw("FIND_IN_SET(?, jumlah_neptu)", [$jumlah])
            ->first();

        if ($hasilSisa) {
            return response()->json([
                'nama_makna' => $hasilSisa->nama_makna,
                'arti_makna' => $hasilSisa->arti_makna
            ]);
        }

        return response()->json([
            'nama_makna' => 'Tidak ditemukan',
            'arti_makna' => 'Makna untuk jumlah tersebut tidak tersedia.'
        ]);
    }
}
