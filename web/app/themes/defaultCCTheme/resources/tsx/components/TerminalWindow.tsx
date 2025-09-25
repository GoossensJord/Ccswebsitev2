import React, { JSX } from 'react';

interface TerminalWindowProps {
  className?: string;
}

export const TerminalWindow = ({
  className = '',
}: TerminalWindowProps): JSX.Element => {
  return (
    <div
      className={`absolute w-80 lg:w-96 bg-gray-900 rounded-lg shadow-2xl rotate-1 z-20 ${className}`}
    >
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
          </div>
          <span className="text-xs text-gray-300 ml-2">zsh</span>
        </div>
      </div>
      <div className="p-4 font-mono text-xs text-green-400 bg-gray-900">
        <div>$ npm run dev</div>
        <div className="text-gray-400 mt-1">
          <span className="text-green-400">{'✓'}</span> Build successful (2.1s)
        </div>
        <div className="text-gray-400">
          <span className="text-green-400">{'✓'}</span> Server on :3000
        </div>
        <div className="mt-1 text-gray-400">
          <span className="text-green-400">{'✓'}</span> Ready
        </div>
        <div className="text-gray-400">
          <span className="text-green-400">{'✓'}</span> Tests passed
        </div>
        <div className="text-gray-400">
          <span className="text-green-400">{'✓'}</span> Hot reloaded
        </div>
        <div className="mt-2 text-green-400">
          $<span className="animate-pulse">{'_'}</span>
        </div>
      </div>
    </div>
  );
};
