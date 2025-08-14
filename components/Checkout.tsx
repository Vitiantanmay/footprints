import React, { useState } from 'react';
import type { CartItem } from '../types';
import type { Page } from '../App';

interface CheckoutProps {
  cart: CartItem[];
  onPlaceOrder: () => void;
  onNavigate: (page: Page) => void;
}

const Input = ({ label, id, ...props }: { label: string; id: string; [key: string]: any }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      id={id}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      {...props}
    />
  </div>
);

export default function Checkout({ cart, onPlaceOrder, onNavigate }: CheckoutProps): React.ReactNode {
  const [formState, setFormState] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvc: '',
  });

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    for (const key in formState) {
        if (formState[key as keyof typeof formState] === '') {
            alert('Please fill out all fields.');
            return;
        }
    }
    onPlaceOrder();
  };

  return (
    <main className="h-full w-full bg-[#fdfdfd] pt-24 px-4 md:px-8 overflow-y-auto animate-fadeIn">
      <div className="max-w-5xl mx-auto pb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Checkout</h1>
        <form onSubmit={handleSubmit} className="mt-12 grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200/80">
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-bold">Shipping Information</h2>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <Input label="Email Address" id="email" type="email" required value={formState.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, email: e.target.value})} />
                        <Input label="Full Name" id="fullName" type="text" required value={formState.fullName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, fullName: e.target.value})} />
                        <div className="sm:col-span-2">
                          <Input label="Address" id="address" type="text" required value={formState.address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, address: e.target.value})}/>
                        </div>
                        <Input label="City" id="city" type="text" required value={formState.city} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, city: e.target.value})}/>
                        <Input label="ZIP / Postal Code" id="zip" type="text" required value={formState.zip} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, zip: e.target.value})}/>
                    </div>
                </section>

                <section className="border-t border-gray-200 pt-6">
                    <h2 className="text-xl font-bold">Payment Details</h2>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div className="sm:col-span-2">
                          <Input label="Card Number" id="card" type="text" placeholder="•••• •••• •••• ••••" required value={formState.card} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, card: e.target.value})}/>
                        </div>
                        <Input label="Expiration Date (MM/YY)" id="expiry" type="text" placeholder="MM / YY" required value={formState.expiry} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, expiry: e.target.value})}/>
                        <Input label="CVC" id="cvc" type="text" placeholder="•••" required value={formState.cvc} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({...formState, cvc: e.target.value})}/>
                    </div>
                </section>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 sticky top-24">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="mt-4 space-y-4">
                {cart.map(item => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 text-sm">
                    <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0 p-1">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain -rotate-12"/>
                    </div>
                    <div>
                      <p className="font-semibold">{item.name} <span className="text-gray-500">x{item.quantity}</span></p>
                      <p className="text-gray-500">Size: {item.size}</p>
                    </div>
                    <p className="ml-auto font-medium">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-black pt-2">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full mt-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}