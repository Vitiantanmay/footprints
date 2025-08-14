import React from 'react';
import type { Shoe } from '../types';
import { ArrowRightIcon } from '../constants/icons';

interface SearchResultsProps {
    results: Shoe[];
    query: string;
    setSearchQuery: (query: string) => void;
    onSelectShoe: (id: number) => void;
}

const ResultCard = ({ shoe, onSelectShoe }: { shoe: Shoe, onSelectShoe: (id: number) => void }) => (
    <div className="group relative bg-gray-100 rounded-2xl p-4 flex flex-col items-center text-center border border-gray-200/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img src={shoe.imageUrl} alt={shoe.name} className="w-4/5 -mt-12 -rotate-12 transform-gpu transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />
        <div className="mt-4">
            <span className="px-2 py-0.5 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">{shoe.category}</span>
            <h3 className="text-lg font-bold mt-2">{shoe.name}</h3>
            <p className="text-xl font-semibold text-gray-800 mt-1">{shoe.price}</p>
        </div>
        <button 
          onClick={() => onSelectShoe(shoe.id)}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-full font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
        >
            View Product
            <ArrowRightIcon className="w-4 h-4" />
        </button>
    </div>
);


export default function SearchResults({ results, query, setSearchQuery, onSelectShoe }: SearchResultsProps): React.ReactNode {
    return (
        <main className="h-full w-full bg-[#fdfdfd] pt-24 px-4 md:px-8 overflow-y-auto animate-fadeIn">
            <div className="max-w-7xl mx-auto pb-16">
                {results.length > 0 ? (
                    <>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            Results for "{query}"
                        </h1>
                        <p className="text-lg text-gray-500 mt-1">{results.length} product{results.length > 1 ? 's' : ''} found.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-12 pt-8">
                            {results.map(shoe => (
                                <ResultCard key={shoe.id} shoe={shoe} onSelectShoe={onSelectShoe} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center h-[60vh]">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            No results for "{query}"
                        </h1>
                        <p className="text-lg text-gray-500 mt-2 max-w-md">
                            Try checking for typos or using more general search terms.
                        </p>
                        <button 
                            onClick={() => setSearchQuery('')}
                            className="mt-8 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                        >
                            Clear Search & Go Back
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}