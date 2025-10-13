{{-- Right Code Editor Component --}}
<div class="absolute right-8 bottom-48 lg:bottom-56 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
  <div class="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span class="text-sm text-gray-600 font-medium">CraftCheckCtrl.java</span>
    <div class="w-4 h-4"></div>
  </div>
  <div class="p-3 text-xs font-mono leading-snug bg-white text-gray-800 rounded-b-lg">
    <div class="py-0.5">
      <span style="color: #6366f1;">@RequestMapping</span><span style="color: #374151;">(</span><span style="color: #059669;">"/api/craft"</span><span style="color: #374151;">)</span>
    </div>
    <div class="py-0.5">
      <span style="color: #2563eb;">class</span> <span style="color: #d97706;">CraftCheckController</span> <span style="color: #374151;">{</span>
    </div>
    <br>
    <div style="margin-left: 0.5rem;">
      <span style="color: #6366f1;">@PostMapping</span><span style="color: #374151;">(</span><span style="color: #059669;">"/check"</span><span style="color: #374151;">)</span>
    </div>
    <div style="margin-left: 0.5rem;">
      <span style="color: #2563eb;">public</span> <span style="color: #8b5cf6;">Map</span><span style="color: #374151;">&lt;</span><span style="color: #8b5cf6;">String</span><span style="color: #374151;">,</span> <span style="color: #8b5cf6;">Object</span><span style="color: #374151;">&gt;</span> <span style="color: #d97706;">check</span><span style="color: #374151;">(</span><span style="color: #6366f1;">@RequestBody</span> <span style="color: #8b5cf6;">Request</span> <span style="color: #d97706;">req</span><span style="color: #374151;">) {</span>
    </div>
    <div style="margin-left: 1rem; color: #6b7280;">
      // Craft quality checks
    </div>
    <div style="margin-left: 1rem;">
      <span style="color: #2563eb;">var</span> <span style="color: #d97706;">result</span> <span style="color: #374151;">=</span> <span style="color: #8b5cf6;">Map</span><span style="color: #374151;">.</span><span style="color: #d97706;">of</span><span style="color: #374151;">(</span>
    </div>
    <div style="margin-left: 1.5rem;">
      <span style="color: #059669;">"tests"</span><span style="color: #374151;">,</span> <span style="color: #2563eb;">true</span><span style="color: #374151;">,</span>
    </div>
    <div style="margin-left: 1.5rem;">
      <span style="color: #059669;">"performance"</span><span style="color: #374151;">,</span> <span style="color: #059669;">"excellent"</span><span style="color: #374151;">,</span>
    </div>
    <div style="margin-left: 1.5rem;">
      <span style="color: #059669;">"security"</span><span style="color: #374151;">,</span> <span style="color: #059669;">"hardened"</span>
    </div>
    <div style="margin-left: 1rem;">
      <span style="color: #374151;">);</span>
    </div>
    <div style="margin-left: 1rem;">
      <span style="color: #2563eb;">return</span> <span style="color: #d97706;">result</span><span style="color: #374151;">;</span>
    </div>
    <div style="margin-left: 0.5rem;">
      <span style="color: #374151;">}</span>
    </div>
    <div class="py-0.5">
      <span style="color: #374151;">}</span>
    </div>
  </div>
</div>