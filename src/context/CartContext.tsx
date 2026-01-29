'use client';

import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import type { Product } from '@/data/products';

type CartItem = {
  product: Product;
  qty: number;
};

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; productId: string }
  | { type: 'CLEAR' };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD': {
      const idx = state.items.findIndex(i => i.product.id === action.product.id);
      if (idx >= 0) {
        const next = [...state.items];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return { items: next };
      }
      return { items: [...state.items, { product: action.product, qty: 1 }] };
    }
    case 'REMOVE': {
      return { items: state.items.filter(i => i.product.id !== action.productId) };
    }
    case 'CLEAR': {
      return { items: [] };
    }
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  count: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  useEffect(() => {
    try {
      const raw = localStorage.getItem('nb_cart');
      if (raw) {
        const parsed: CartState = JSON.parse(raw);
        if (Array.isArray(parsed.items)) {
          dispatch({ type: 'CLEAR' });
          parsed.items.forEach(i => dispatch({ type: 'ADD', product: i.product }));
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('nb_cart', JSON.stringify(state));
    } catch {}
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    return {
      items: state.items,
      count: state.items.reduce((sum, i) => sum + i.qty, 0),
      addItem: (product: Product) => dispatch({ type: 'ADD', product }),
      removeItem: (productId: string) => dispatch({ type: 'REMOVE', productId }),
      clear: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
