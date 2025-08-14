import React from 'react';
import type { CartItem } from '../types';
import type { Page } from '../App';
import { MinusIcon, PlusIcon, TrashIcon } from '../constants/icons';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (shoeId: number, size: number, newQuantity: number) => void;
  onRemoveItem: (shoeId: number, size: number) => void;
  onNavigate: (page: Page) => void;
}

export default function Cart({ cart, onUpdateQuantity, onRemoveItem, onNavigate }: CartProps): React.ReactNode {
  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  return (
    <main className="h-full w-full bg-[#fdfdfd] pt-24 px-4 md:px-8 overflow-y-auto animate-fadeIn">
      <div className="max-w-5xl mx-auto pb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Your Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Your cart is empty.</p>
            <button
              onClick={() => onNavigate('wearables')}
              className="mt-6 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="mt-12 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200/80">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 p-2">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain -rotate-12" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="font-semibold text-md mt-1">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="flex items-center border border-gray-300 rounded-full">
                        <button onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)} className="p-2 text-gray-500 hover:text-black transition-colors">
                          <MinusIcon className="w-4 h-4"/>
                        </button>
                        <span className="px-2 text-md font-semibold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)} className="p-2 text-gray-500 hover:text-black transition-colors">
                          <PlusIcon className="w-4 h-4"/>
                        </button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id, item.size)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <TrashIcon className="w-5 h-5"/>
                      </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl border border-gray-200/80 sticky top-24">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <div className="mt-4 space-y-2 text-gray-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className="font-medium text-green-600">Free</span>
                        </div>
                         <div className="flex justify-between text-lg font-bold text-black border-t border-gray-200 pt-2 mt-2">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => onNavigate('checkout')}
                        className="w-full mt-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}