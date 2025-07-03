<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hasil_jumlah extends Model
{
    //Menambahlan Tabel hasil_jumlah
      protected $fillable = [
        'jumlah_neptu',
        'nama_makna',
        'arti_makna'
    ];

}
