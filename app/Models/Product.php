<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Product extends Model
{
    // Mask Tabel Product
    protected $fillable = [
        'category_id',
        'image',
        'name',
        'description',
        'price',
        'link',
    ];

    // Set Jenis Relasi Tabel
    public function category() {
        return $this->belongsTo(Category::class);
    }

    //  protected static function boot()
    // {
    //     parent::boot();

    //     static::saving(function ($category) {
    //         if (empty($category->slug)) {
    //             $category->slug = Str::slug($category->name);
    //         }
    //     });
    // }
}
