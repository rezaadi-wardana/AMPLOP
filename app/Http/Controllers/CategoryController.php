<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();
        return Inertia::render('Admin/MenuCategory/Index',compact('category'));
    }

    public function create()
    {
        return Inertia::render('Admin/MenuCategory/Create');
    }

    public function store(Request $request)   {
        // dd($request);
        $request->validate([
            'category_name' => 'required|string|max:255',
            'category_desc' => 'nullable|string',
            'slug' => 'required|string|max:255|unique:categories,slug',
        ]);

        Category::create($request->all());
        return redirect()->route('category.index')->with('message', 'Category created successfully.');
    }

    public function edit(Category $category)
    {
        return Inertia::render('Admin/MenuCategory/Edit', compact('category'));

    }
    public function update(Category $category, Request $request) {
        $request->validate([
            'category_name' => 'required|string|max:255',
            'category_desc' => 'nullable|string',
            'slug' => 'required|string|max:255|unique:categories,slug,' . $category->id,
        ]);

        $category->update($request->all());
        return redirect()->route('category.index')->with('message', 'Category updated successfully.');
    }
    public function destroy(Category $category){
        $category->delete();
        return redirect()->route('category.index')->with('message', 'Category deleted successfully.');
    }
}
