import React from 'react';

const LeftCodeEditor: React.FC = () => {
  return (
    <div className="absolute left-8 bottom-32 lg:bottom-40 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-gray-600">
          HeroCraftcheck.component.ts
        </span>
        <div className="w-4 h-4"></div>
      </div>
      <div className="p-4 text-sm font-mono">
        <div className="text-purple-600">@Component</div>
        <div className="text-gray-800">{'({'}</div>
        <div className="ml-4 text-blue-600">
          selector:{' '}
          <span className="text-green-600">'cc-hero-craftcheck'</span>,
        </div>
        <div className="ml-4 text-blue-600">
          standalone: <span className="text-orange-600">true</span>,
        </div>
        <div className="ml-4 text-blue-600">template:</div>
        <div className="ml-8 text-green-600">
          `&lt;div class="flex flex-col items-start gap-4"&gt;
        </div>
        <div className="ml-10 text-green-600">&lt;h1&gt;</div>
        <div className="ml-12 text-green-600">
          &lt;button class="px-5 py-2 rounded-full bg-blue-600
        </div>
        <div className="ml-12 text-green-600">
          text-white hover:bg-blue-500 disabled:opacity-50
        </div>
        <div className="ml-12 text-green-600">
          disabled:cursor-not-allowed"
        </div>
        <div className="ml-14 text-gray-800">(disabled)="running"</div>
        <div className="ml-14 text-gray-800">{'(click)="run()"'}</div>
      </div>
    </div>
  );
};

export default LeftCodeEditor;