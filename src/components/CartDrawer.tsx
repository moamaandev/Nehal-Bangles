'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { X, Trash2 } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const { items, count, removeItem, clear } = useCart();
  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-stone-200">
          <h3 className="text-lg font-serif font-bold text-stone-900">Your Cart ({count})</h3>
          <button onClick={onClose} className="text-stone-700 hover:text-primary">
            <X size={22} />
          </button>
        </div>

        <div className="px-4 py-4 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 && (
            <div className="text-center text-stone-500 py-16">Your cart is empty</div>
          )}
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex items-center gap-3 border border-stone-200 rounded-lg p-3">
              <div className="relative w-16 h-16 rounded-md overflow-hidden bg-stone-100">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-stone-900 line-clamp-1">{product.name}</div>
                <div className="text-xs text-stone-500">Qty: {qty}</div>
                <div className="text-sm font-semibold text-stone-900">₹{(product.price * qty).toLocaleString('en-IN')}</div>
              </div>
              <button
                aria-label="Remove item"
                onClick={() => removeItem(product.id)}
                className="p-2 rounded-md border border-stone-200 text-stone-600 hover:text-red-600 hover:border-red-200"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="px-4 py-4 border-t border-stone-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-stone-600 text-sm">Total</span>
            <span className="text-stone-900 font-bold">₹{total.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={clear}
              className="flex-1 px-4 py-3 rounded-lg border border-stone-300 text-stone-700 font-medium hover:border-red-400 hover:text-red-600 transition-colors"
            >
              Clear
            </button>
            <a
              href="/shop"
              className="flex-1 px-4 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity text-center"
              onClick={onClose}
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
