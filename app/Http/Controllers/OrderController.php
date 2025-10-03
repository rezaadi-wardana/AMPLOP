<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['product.category'])->latest()->get();

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

        $buktiPath = null;
        if ($request->hasFile('bukti_pembayaran')) {
            $file = $request->file('bukti_pembayaran');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('bukti_pembayaran'), $filename);
            $buktiPath = 'bukti_pembayaran/' . $filename;
        }

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

        $data = $request->only(['order_name', 'order_desc', 'product_id', 'status', 'link_order']);

        if ($request->hasFile('bukti_pembayaran')) {
            // hapus file lama
            if ($order->bukti_pembayaran && File::exists(public_path($order->bukti_pembayaran))) {
                File::delete(public_path($order->bukti_pembayaran));
            }

            $file = $request->file('bukti_pembayaran');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('bukti_pembayaran'), $filename);
            $data['bukti_pembayaran'] = 'bukti_pembayaran/' . $filename;
        }

        $order->update($data);

        return redirect()->route('order.index')->with('message', 'Order updated successfully.');
    }

    public function destroy(Order $order)
    {
        if ($order->bukti_pembayaran && File::exists(public_path($order->bukti_pembayaran))) {
            File::delete(public_path($order->bukti_pembayaran));
        }

        $order->delete();

        return redirect()->route('order.index')->with('message', 'Order deleted successfully.');
    }
}
