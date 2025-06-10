<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::all();
        $categories = Category::all(['id', 'category_name']); // ambil id dan name saja
        // return inertia('Product/Index', compact('product', 'categories'));
        return inertia('Product/Index', [
            'products' => $product,
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        // return inertia('Product/Create');
        $categories = Category::all(['id', 'category_name']); // ambil id dan name saja
        return inertia('Product/Create', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id' => 'required|exists:categories,id',
        ]);
        $imagePath = $request->file('image')->store('products', 'public');

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'image' => $imagePath,
            'category_id' => $request->category_id,
        ]);
        return redirect()->route('product.index')->with('message', 'Product created successfully.');
    }

    public function edit(Product $product)
    {
        $product = Product::findOrFail($product->id); // <-- ambil produk berdasarkan id
        $categories = Category::all(['id', 'category_name']); // <-- ambil semua kategori

        return Inertia::render('Product/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

   public function update(Product $product, Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'price' => 'required|numeric',
        'category_id' => 'required|exists:categories,id',
        'description' => 'nullable|string',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('products', 'public');
        $product->image = $imagePath;
    }

    $product->update([
        'name' => $request->name,
        'price' => $request->price,
        'description' => $request->description,
        'category_id' => $request->category_id,
    ]);

    return redirect()->route('product.index')->with('message', 'Product updated successfully.');
}

}
