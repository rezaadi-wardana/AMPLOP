<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    //Menambahkan categry
    protected $fillable = [
        'category_name',
        'category_desc',
        'slug'
    ];

    //Set Eloquent Relationships
    public function products()
    {
        //  haMany() berarti untuk relasi One to Many
        return $this->hasMany(Product::class);
    }

    // Set Method boot untuk slug user friendly
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($category) {
            if (empty($category->slug)) {
                $category->slug = Str::slug($category->category_name);
            }
        });
    }
}
