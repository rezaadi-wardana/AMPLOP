<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hasil_sisa extends Model
{
    //Menambahlan Tabel hasil_sisa
      protected $fillable = [
        'jumlah_neptu',
        'nama_makna',
        'arti_makna'
    ];
}
