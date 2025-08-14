
import React from 'react';

export default function ScrollIndicator(): React.ReactNode {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
