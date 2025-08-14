import React from 'react';
import type { Page } from '../App';
import { CheckIcon } from '../constants/icons';

interface OrderConfirmationProps {
  onNavigate: (page: Page) => void;
}

export default function OrderConfirmation({ onNavigate }: OrderConfirmationProps): React.ReactNode {
  return (
    <main className="h-full w-full bg-[#fdfdfd] flex items-center justify-center p-4 animate-fadeIn">
      <div className="text-center bg-white p-12 rounded-3xl border border-gray-200/80 shadow-lg">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tighter">Thank You For Your Order!</h1>
        <p className="mt-2 text-lg text-gray-500 max-w-md">
            Your order has been placed successfully. A confirmation email has been sent to you.
        </p>
        <p className="mt-4 text-sm text-gray-400">
            Order ID: #FP{Math.floor(Math.random() * 90000) + 10000}
        </p>
        <button 
            onClick={() => onNavigate('home')}
            className="mt-8 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
        >
            Continue Shopping
        </button>
      </div>
    </main>
  );
}