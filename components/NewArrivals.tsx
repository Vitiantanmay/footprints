import React from 'react';
import { SHOES } from '../constants/products';
import { ArrowRightIcon } from '../constants/icons';

const newArrival = SHOES.find(s => s.id === 4);

interface NewArrivalsProps {
  onSelectShoe: (id: number) => void;
}

export default function NewArrivals({ onSelectShoe }: NewArrivalsProps): React.ReactNode {
  if (!newArrival) {
    return (
        <main className="h-full w-full flex items-center justify-center animate-fadeIn">
            <p>The new arrival is on its way. Check back soon.</p>
        </main>
    );
  }

  return (
    <main className="h-full w-full flex items-center justify-center p-4 md:p-8 animate-fadeIn bg-[#fdfdfd] overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="relative order-2 md:order-1 flex justify-center">
            <div className="absolute -inset-16 bg-blue-500/10 rounded-full blur-3xl"></div>
            <img 
                src={newArrival.imageUrl} 
                alt={newArrival.name}
                className="w-full max-w-lg lg:max-w-2xl object-contain relative z-10 -rotate-12 transform-gpu transition-transform duration-500 hover:rotate-0 hover:scale-105"
            />
        </div>
        <div className="text-center md:text-left order-1 md:order-2">
            <span className="text-blue-500 font-semibold">Just Dropped</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mt-2">{newArrival.name}</h1>
            <p className="mt-4 text-md md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">{newArrival.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button 
                  onClick={() => onSelectShoe(newArrival.id)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
                >
                    <span>Pre-Order Now</span>
                    <span className="text-2xl font-light">{newArrival.price}</span>
                </button>
                <button 
                  onClick={() => onSelectShoe(newArrival.id)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-black border border-gray-300 rounded-full hover:border-black transition-colors"
                >
                    <span>View Details</span>
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
          </div>
        </div>
      </div>
    </main>
  );
}