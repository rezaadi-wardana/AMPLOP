<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'order_name',         // nama order / nama klien
        'order_desc',         // deskripsi tambahan
        'product_id',         // relasi ke produk
        'status',             // status order: terima, siap kirim, selesai
        'link_order',         // link order
        'bukti_pembayaran',   // bukti pembayaran (img)
    ];

    /**
     * Relasi: Order milik 1 produk
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Relasi langsung ke kategori lewat produk
     */
    public function category()
    {
        return $this->hasOneThrough(
            Category::class, // model tujuan
            Product::class,  // model perantara
            'id',            // foreign key di product (id product)
            'id',            // foreign key di category (id category)
            'product_id',    // foreign key di order
            'category_id'    // foreign key di product
        );
    }
}
