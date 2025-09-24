import React from 'react';

const RightTopCodeEditor: React.FC = () => {
  return (
    <div className="absolute right-8 bottom-48 lg:bottom-56 w-72 bg-white rounded-lg shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-gray-600">CraftCheckCtrl.java</span>
        <div className="w-4 h-4"></div>
      </div>
      <div className="p-4 text-sm font-mono">
        <div className="text-purple-600">
          @RequestMapping<span className="text-gray-800">(</span>
          <span className="text-green-600">"/api/craft/*"</span>
          <span className="text-gray-800">)</span>
        </div>
        <div className="text-blue-600">
          class{' '}
          <span className="text-yellow-600">CraftCheckController</span>{' '}
          <span className="text-gray-800">{'{'}</span>
        </div>
        <div className="ml-4 text-purple-600">
          @PostMapping<span className="text-gray-800">(</span>
          <span className="text-green-600">"/check/*"</span>
          <span className="text-gray-800">)</span>
        </div>
        <div className="ml-4 text-blue-600">
          public Map&lt;String, Object&gt;{' '}
          <span className="text-yellow-600">check</span>
          <span className="text-gray-800">(</span>
          <span className="text-purple-600">@RequestBody</span>
        </div>
        <div className="ml-8 text-gray-800">{')'}</div>
        <div className="ml-4 text-gray-600">{'// { a hero }'}</div>
      </div>
    </div>
  );
};

export default RightTopCodeEditor;