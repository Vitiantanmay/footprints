import React, { useState, useEffect } from 'react';
import type { Shoe } from '../types';
import { ChevronLeftIcon, CheckIcon, SparkleIcon, MinusIcon, PlusIcon } from '../constants/icons';
import Reviews from './Reviews';

interface ProductDetailProps {
  shoe: Shoe;
  onBack: () => void;
  onAddToCart: (shoe: Shoe, size: number, quantity: number) => void;
}

const SIZES = [7, 8, 9, 10, 11, 12, 13];
const FEATURES = [
    'Zero-gravity foam midsole',
    'Adaptive Kinetic Weave upper',
    'Carbon-plated for energy return',
    'Sustainable materials'
];

export default function ProductDetail({ shoe, onBack, onAddToCart }: ProductDetailProps): React.ReactNode {
  const [selectedSize, setSelectedSize] = useState<number | null>(10);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(shoe.imageUrl);

  useEffect(() => {
    setActiveImage(shoe.imageUrl);
  }, [shoe.imageUrl]);

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(shoe, selectedSize, quantity);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } else {
      alert('Please select a size.');
    }
  };

  const galleryImages = [shoe.imageUrl, shoe.imageUrl, shoe.imageUrl, shoe.imageUrl];

  return (
    <main className="h-full w-full bg-[#fdfdfd] overflow-y-auto animate-fadeIn">
      <div className="absolute top-6 left-6 z-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors bg-white/50 backdrop-blur-md rounded-full pl-2 pr-4 py-2 border border-gray-200/80 shadow-sm"
        >
          <ChevronLeftIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-4 sticky top-24">
            <div className="relative aspect-square w-full bg-gray-100 rounded-3xl flex items-center justify-center p-8 border border-gray-200/80">
              <div className="absolute -inset-16 bg-blue-500/5 rounded-full blur-3xl opacity-50"></div>
              <img 
                src={activeImage} 
                alt={shoe.name}
                className="w-full h-full object-contain relative z-10 -rotate-12 transform-gpu transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square w-full bg-gray-100 rounded-2xl p-2 border transition-all duration-200 ${activeImage === img ? 'border-blue-500 scale-105' : 'border-gray-200/80 hover:border-gray-400'}`}
                >
                  <img src={img} alt={`${shoe.name} thumbnail ${index + 1}`} className="w-full h-full object-contain -rotate-12" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full">
            <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">{shoe.category}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mt-4">{shoe.name}</h1>
            <p className="text-3xl md:text-4xl font-medium text-gray-800 mt-2">{shoe.price}</p>
            <p className="mt-6 text-md text-gray-600 max-w-prose">{shoe.description}</p>
            
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-800">Select Size</h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {SIZES.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-full border text-sm font-semibold transition-all duration-200 flex items-center justify-center ${
                      selectedSize === size 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 text-gray-500 hover:text-black transition-colors disabled:opacity-50" disabled={quantity <= 1}>
                  <MinusIcon className="w-5 h-5"/>
                </button>
                <span className="px-4 text-lg font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-3 text-gray-500 hover:text-black transition-colors">
                  <PlusIcon className="w-5 h-5"/>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`w-full h-[52px] flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isAdded ? 'bg-green-500' : 'bg-black hover:bg-gray-800'
                }`}
                disabled={!selectedSize}
              >
                {isAdded ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <span>Add to Cart</span>
                )}
              </button>
            </div>
             <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-800">Features</h3>
                 <ul className="mt-4 space-y-3 text-sm text-gray-600">
                    {FEATURES.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                            <SparkleIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                 </ul>
             </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-16 md:mt-24 border-t border-gray-200 pt-12">
            <Reviews shoeId={shoe.id} />
        </div>
      </div>
    </main>
  );
}