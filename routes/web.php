<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CekJodohController;
use App\Http\Controllers\HasilJumlahController;
use App\Http\Controllers\HasilSisaController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/lara-welcome', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('category', [CategoryController::class, 'index'])->name('category.index');
    Route::post('category', [CategoryController::class, 'store'])->name('category.store');
    Route::get('category/create', [CategoryController::class, 'create'])->name('category.create');
    Route::get('category/{category}/edit', [CategoryController::class, 'edit'])->name('category.edit');
    Route::put('category/{category}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('category/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');

    Route::get('product', [ProductController::class, 'index'])->name('product.index');
    Route::post('product', [ProductController::class, 'store'])->name('product.store');
    Route::get('product/create', [ProductController::class, 'create'])->name('product.create');
    Route::get('product/{product}/edit', [ProductController::class, 'edit'])->name('product.edit');
    Route::put('product/{product}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('product/{product}', [ProductController::class, 'destroy'])->name('product.destroy');

    Route::get('hasil_jumlah', [HasilJumlahController::class, 'index'])->name('hasil_jumlah.index');
    Route::post('hasil_jumlah', [HasilJumlahController::class, 'store'])->name('hasil_jumlah.store');
    Route::get('hasil_jumlah/create', [HasilJumlahController::class, 'create'])->name('hasil_jumlah.create');
    Route::get('hasil_jumlah/{hasil_jumlah}/edit', [HasilJumlahController::class, 'edit'])->name('hasil_jumlah.edit');
    Route::put('hasil_jumlah/{hasil_jumlah}', [HasilJumlahController::class, 'update'])->name('hasil_jumlah.update');
    Route::delete('hasil_jumlah/{hasil_jumlah}', [HasilJumlahController::class, 'destroy'])->name('hasil_jumlah.destroy');

    Route::get('hasil_sisa', [HasilSisaController::class, 'index'])->name('hasil_sisa.index');
    Route::post('hasil_sisa', [HasilSisaController::class, 'store'])->name('hasil_sisa.store');
    Route::get('hasil_sisa/create', [HasilSisaController::class, 'create'])->name('hasil_sisa.create');
    Route::get('hasil_sisa/{hasil_sisa}/edit', [HasilSisaController::class, 'edit'])->name('hasil_sisa.edit');
    Route::put('hasil_sisa/{hasil_sisa}', [HasilSisaController::class, 'update'])->name('hasil_sisa.update');
    Route::delete('hasil_sisa/{hasil_sisa}', [HasilSisaController::class, 'destroy'])->name('hasil_sisa.destroy');
});

Route::get('/beranda', function () {
    return Inertia::render('LandingPage');
});

// Route::get('/produk', function () {
//     return Inertia::render('ProdukPage');
// });
Route::get('/produk', [ProductController::class, 'list'])->name('produk.page');


Route::get('/undangan', function () {
    return Inertia::render('UndanganList');
});

Route::get('/cekjodoh', function () {
    return Inertia::render('LandingCekJodoh');
});

Route::get('/cekjodohpage', function () {
    return Inertia::render('Cekjodoh');
});

Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('beranda');


Route::post('/cekjodoh/cari-makna', [CekJodohController::class, 'cariMakna']);


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
