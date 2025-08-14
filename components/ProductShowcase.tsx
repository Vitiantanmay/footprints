
import React from 'react';
import type { Shoe } from '../types';
import { ArrowRightIcon } from '../constants/icons';

interface ProductShowcaseProps {
  shoe: Shoe;
  isScrolling: boolean;
  onSelectShoe: (id: number) => void;
}

export default function ProductShowcase({ shoe, isScrolling, onSelectShoe }: ProductShowcaseProps): React.ReactNode {
  return (
    <section id={shoe.name.replace(/\s+/g, '-')} className="h-screen w-full relative flex items-center justify-center snap-start overflow-hidden p-4 md:p-8">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <h1 
          className="text-[15vw] lg:text-[18rem] font-black text-blue-500 whitespace-nowrap select-none transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${isScrolling ? '-10%' : '0'})` }}
        >
          {shoe.slogan}
        </h1>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={shoe.imageUrl}
            alt={shoe.name}
            className={`w-full max-w-lg lg:max-w-2xl object-contain transition-all duration-300 ease-out transform-gpu
              ${isScrolling ? 'blur-sm scale-95' : 'blur-0 scale-100'}
              -rotate-12 hover:rotate-0 hover:scale-105
            `}
            style={{ filter: isScrolling ? 'blur(4px)' : 'none' }}
          />
        </div>

        <div className="w-full md:w-[40%] text-center md:text-left mt-8 md:mt-0">
          <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">{shoe.category}</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mt-4">{shoe.name}</h2>
          <p className="mt-4 text-md md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">{shoe.description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button 
              onClick={() => onSelectShoe(shoe.id)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
            >
              <span>Order Now</span>
              <span className="text-2xl font-light">{shoe.price}</span>
            </button>
            <button 
              onClick={() => onSelectShoe(shoe.id)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-black border border-gray-300 rounded-full hover:border-black transition-colors"
            >
              <span>Explore in depth</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}