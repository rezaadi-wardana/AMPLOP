<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['product.category'])->latest()->get();
        // $orders = Order::with(['product'])->latest()->get();

        return Inertia::render('Admin/MenuOrder/Index', [
            'orders' => $orders,
        ]);
    }

    public function create()
    {
        $products = Product::all(['id', 'name']);

        return Inertia::render('Admin/MenuOrder/Create', [
            'products' => $products,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'order_name' => 'required|string|max:255',
            'order_desc' => 'required|string|max:255',
            'product_id' => 'required|exists:products,id',
            'status' => 'required|string|in:belumbayar,berjalan,selesai',
'link_order' => 'nullable|url',
            'bukti_pembayaran' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $buktiPath = $request->file('bukti_pembayaran')
            ? $request->file('bukti_pembayaran')->store('bukti_pembayaran', 'public')
            : null;

        Order::create([
            'order_name' => $request->order_name,
            'order_desc' => $request->order_desc,
            'product_id' => $request->product_id,
            'status' => $request->status,
            'link_order' => $request->link_order,
            'bukti_pembayaran' => $buktiPath,
        ]);

        return redirect()->route('order.index')->with('message', 'Order created successfully.');
    }

    public function edit(Order $order)
    {
        $order->load(['product']);
        $products = Product::all(['id', 'name']);

        return Inertia::render('Admin/MenuOrder/Edit', [
            'order' => $order,
            'products' => $products,
        ]);
    }

    public function update(Request $request, Order $order)
    {
        $request->validate([
            'order_name' => 'required|string|max:255',
            'order_desc' => 'nullable|string|max:255',
            'product_id' => 'required|exists:products,id',
            'status' => 'required|string|in:belumbayar,berjalan,selesai',
            'link_order' => 'nullable|url',
            'bukti_pembayaran' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data = [
    'order_name' => $request->order_name ?? $order->order_name,
    'order_desc' => $request->order_desc ?? $order->order_desc,
    'product_id' => $request->product_id ?? $order->product_id,
    'status' => $request->status ?? $order->status,
    'link_order' => $request->link_order ?? $order->link_order,
];

        $data = $request->only(['order_name', 'order_desc', 'product_id', 'status', 'link_order']);

        if ($request->hasFile('bukti_pembayaran')) {
            if ($order->bukti_pembayaran) {
                Storage::disk('public')->delete($order->bukti_pembayaran);
            }
            $data['bukti_pembayaran'] = $request->file('bukti_pembayaran')->store('bukti_pembayaran', 'public');
        }

        $order->update($data);

        return redirect()->route('order.index')->with('message', 'Order updated successfully.');
    }

    public function destroy(Order $order)
    {
        if ($order->bukti_pembayaran) {
            Storage::disk('public')->delete($order->bukti_pembayaran);
        }

        $order->delete();

        return redirect()->route('order.index')->with('message', 'Order deleted successfully.');
    }
}
