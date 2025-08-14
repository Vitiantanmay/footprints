import React from 'react';
import { ShoppingCartIcon } from '../constants/icons';

interface CartButtonProps {
  onClick: () => void;
  itemCount: number;
}

export default function CartButton({ onClick, itemCount }: CartButtonProps): React.ReactNode {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full hover:bg-gray-200/50 transition-colors focus:outline-none"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingCartIcon className="h-5 w-5 text-gray-800" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
          {itemCount}
        </span>
      )}
    </button>
  );
}