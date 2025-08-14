import React from 'react';
import { SHOES } from '../constants/products';

const categories = [
  {
    name: 'Lifestyle',
    description: 'Where cutting-edge design meets everyday comfort.',
    shoeId: SHOES.find(s => s.category === 'Lifestyle')?.id,
    imageUrl: SHOES.find(s => s.category === 'Lifestyle')?.imageUrl || '',
  },
  {
    name: 'Running',
    description: 'Engineered for peak performance and ethereal lightness.',
    shoeId: SHOES.find(s => s.category === 'Running')?.id,
    imageUrl: SHOES.find(s => s.category === 'Running')?.imageUrl || '',
  },
  {
    name: 'Outdoor',
    description: 'Built to conquer any terrain with unyielding stability.',
    shoeId: SHOES.find(s => s.category === 'Outdoor')?.id,
    imageUrl: SHOES.find(s => s.category === 'Outdoor')?.imageUrl || '',
  },
];

interface CategoryCardProps {
    name: string;
    description: string;
    imageUrl: string;
    shoeId?: number;
    onSelectShoe: (id: number) => void;
}

const CategoryCard = ({ name, description, imageUrl, shoeId, onSelectShoe }: CategoryCardProps) => (
  <button 
    onClick={() => shoeId && onSelectShoe(shoeId)}
    className="group relative text-left aspect-[4/5] w-full bg-gray-100 rounded-3xl overflow-hidden p-6 flex flex-col justify-end border border-gray-200/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={!shoeId}
  >
    <img src={imageUrl} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 -rotate-12 group-hover:rotate-0"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    <div className="relative z-10 text-white">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm text-white/80 mt-1">{description}</p>
    </div>
  </button>
);

interface WearablesProps {
  onSelectShoe: (id: number) => void;
}

export default function Wearables({ onSelectShoe }: WearablesProps): React.ReactNode {
  return (
    <main className="h-full w-full bg-[#fdfdfd] pt-24 px-4 md:px-8 overflow-y-auto animate-fadeIn">
      <div className="max-w-7xl mx-auto pb-16">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Engineered.</h1>
        <p className="text-lg md:text-xl text-gray-500 mt-2 max-w-2xl">
          Each pair of FootPrints is more than a shoe—it's a piece of technology designed to augment your journey. Explore our core collections.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map(cat => (
            <CategoryCard key={cat.name} {...cat} onSelectShoe={onSelectShoe} />
          ))}
        </div>
      </div>
    </main>
  );
}