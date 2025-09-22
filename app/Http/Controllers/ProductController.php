<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    // BACK END
    public function index()
    {
        $product = Product::all();
        $categories = Category::all(['id', 'category_name']); // ambil id dan name saja
        // return inertia('Product/Index', compact('product', 'categories'));
        return inertia('Admin/MenuProduct/Index', [
            'products' => $product,
            'categories' => $categories,
        ]);
    }

        public function landing()
    {
        $product = Product::all();
        $categories = Category::all(['id', 'category_name']); // ambil id dan name saja
        // return inertia('Product/Index', compact('product', 'categories'));
        return inertia('LandingPage', [
            'products' => $product,
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        // return inertia('Product/Create');
        $categories = Category::all(['id', 'category_name']); // ambil id dan name saja
        return inertia('Admin/MenuProduct/Create', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'link' => 'required|url',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id' => 'required|exists:categories,id',
        ]);
        $imagePath = $request->file('image')->store('products', 'public');

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'link' => $request->link,
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

        return Inertia::render('Admin/MenuProduct/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    public function update(Product $product, Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'link' => 'required|url',
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
            'link' => $request->link,
            'description' => $request->description,
            'category_id' => $request->category_id,
        ]);

        return redirect()->route('product.index')->with('message', 'Product updated successfully.');
    }

       public function destroy(Product $product){
        $product->delete();
        return redirect()->route('product.index')->with('message', 'Category deleted successfully.');
    }
    // END BACK END

    // FRONT END
    public function list(Product $products)
    {
        $products = Product::all();
        $categories = Category::all(['id', 'category_name']);
        return Inertia::render('ProdukPage', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }
    // END FRONT END
}
