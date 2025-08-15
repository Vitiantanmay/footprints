
import React from 'react';
import { SHOES } from '../constants/products';
import ScrollIndicator from './ScrollIndicator';

interface HeroProps {
  onSelectShoe: (id: number) => void;
}

const ExploreLink = ({ shoeName, onClick }: { shoeName: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300"
  >
    {shoeName}
  </button>
);

export default function Hero({ onSelectShoe }: HeroProps): React.ReactNode {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative snap-start overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="assets/img/cover.png"
          alt="Hero Shoe"
          className="w-[80%] max-w-4xl object-contain -rotate-12 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col h-full">
        <div className="flex-grow"></div>
        <div className="pb-24">
          <h1 className="text-xl font-medium tracking-tight text-gray-600">FootPrints</h1>
          <p className="text-6xl md:text-8xl font-bold tracking-tighter mt-2">Beyond Footwear.</p>
          <div className="flex items-center gap-4 mt-8">
            <span className="text-gray-500 text-sm">Explore</span>
            {SHOES.map((shoe) => (
              <ExploreLink key={shoe.id} shoeName={shoe.name} onClick={() => onSelectShoe(shoe.id)} />
            ))}
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
