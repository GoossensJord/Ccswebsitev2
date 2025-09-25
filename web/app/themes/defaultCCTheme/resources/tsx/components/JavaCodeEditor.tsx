import React, { JSX } from 'react';

interface JavaCodeEditorProps {
  className?: string;
}

export const JavaCodeEditor = ({
  className = '',
}: JavaCodeEditorProps): JSX.Element => {
  return (
    <div
      className={`absolute w-[357px] h-[241px] bg-white rounded-lg shadow-xl border border-gray-200 ${className}`}
    >
      <div className="flex items-start bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <div className="inline-flex items-center gap-2 px-3 py-[11px] rounded-[10px_0px_0px_0px]">
          <div className="inline-flex items-center gap-1.5">
            <div className="w-2 h-2 bg-red-400 rounded-full" />
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-[11px]">
          <div className="text-xs text-gray-600 font-medium">
            DScoreSvc.java
          </div>
        </div>
      </div>
      <div className="p-4 bg-white font-mono text-xs leading-relaxed">
        <div className="text-gray-500 mb-2">
          // 🚀 Craftcode Delivery Engine
        </div>
        <div className="text-purple-600">
          @PostMapping<span className="text-gray-800">(</span>
          <span className="text-green-600">"/delivery-score"</span>
          <span className="text-gray-800">)</span>
        </div>
        <div className="text-blue-600">
          public Map&lt;String, Object&gt;{' '}
          <span className="text-yellow-600">score</span>
          <span className="text-gray-800">(...) {`{`}</span>
        </div>
        <div className="ml-2 text-gray-800">return Map.of(</div>
        <div className="ml-4 text-red-600">
          "team", <span className="text-orange-600">"Backend Guild"</span>,
        </div>
        <div className="ml-4 text-red-600">
          "deliveryScore", <span className="text-green-600">87.4</span>,
        </div>
        <div className="ml-4 text-red-600">
          "label", <span className="text-orange-600">"Elite"</span>,
        </div>
        <div className="ml-4 text-red-600">
          "craftedBy", <span className="text-orange-600">"Craftcode ✨"</span>
        </div>
        <div className="ml-2 text-gray-800">);</div>
        <div className="text-blue-600">{`}`}</div>
      </div>
    </div>
  );
};
