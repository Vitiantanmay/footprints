import React from 'react';
import { LogoIcon, SearchIcon } from '../constants/icons';
import type { Page } from '../App';
import CartButton from './CartButton';

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const NavLink = ({ children, onClick, isActive }: NavLinkProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm rounded-full transition-all duration-200 focus:outline-none ${
      isActive ? 'bg-black text-white' : 'text-gray-700 hover:text-black hover:bg-gray-200/50'
    }`}
  >
    {children}
  </button>
);

interface HeaderProps {
    navigateTo: (page: Page) => void;
    currentPage: Page;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    isProductDetailVisible: boolean;
    cartCount: number;
}

const navLinks: { id: Page; label: string }[] = [
    { id: 'wearables', label: 'Wearables' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'about', label: 'About' },
    { id: 'updates', label: 'Updates' },
];

export default function Header({ navigateTo, currentPage, searchQuery, setSearchQuery, isProductDetailVisible, cartCount }: HeaderProps): React.ReactNode {
  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-transform duration-300 ${isProductDetailVisible ? '-translate-y-24' : 'translate-y-0'}`}>
      <div className="flex items-center justify-between mx-auto p-2 rounded-full bg-white/50 backdrop-blur-lg border border-gray-200/80 shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigateTo('home')} className="p-2 rounded-full hover:bg-gray-200/50 transition-colors">
            <LogoIcon className="h-5 w-5 text-gray-800" />
          </button>
        </div>
        <nav className="hidden md:flex items-center bg-gray-100/70 rounded-full border border-gray-200/60 p-1">
          {navLinks.map(link => (
            <NavLink 
                key={link.id}
                onClick={() => navigateTo(link.id)}
                isActive={currentPage === link.id && !searchQuery}
            >
                {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center w-full md:w-auto md:max-w-xs ml-4">
          <div className="relative w-full">
            <input 
              type="text"
              placeholder="Discover shoes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm bg-transparent border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            ) : (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 pointer-events-none">
                <SearchIcon className="w-5 h-5" />
              </div>
            )}
          </div>
        </div>
        <div className="ml-2">
            <CartButton onClick={() => navigateTo('cart')} itemCount={cartCount} />
        </div>
      </div>
    </header>
  );
}