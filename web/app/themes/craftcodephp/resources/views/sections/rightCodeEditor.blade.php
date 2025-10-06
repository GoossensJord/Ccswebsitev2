<div class="absolute right-8 bottom-48 lg:bottom-56 w-72 bg-white rounded-lg shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
  <div class="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span class="text-sm text-gray-600">CraftCheckCtrl.java</span>
    <div class="w-4 h-4"></div>
  </div>
  <div class="p-4 text-sm font-mono">
    <div class="text-purple-600">
      @RequestMapping<span class="text-gray-800">(</span><span class="text-green-600">"/api/craft"</span><span class="text-gray-800">)</span>
    </div>
    <div class="text-blue-600">
      class <span class="text-yellow-600">CraftCheckController</span> <span class="text-gray-800">{</span>
    </div>
    <div class="ml-4 text-purple-600">
      @PostMapping<span class="text-gray-800">(</span><span class="text-green-600">"/check"</span><span class="text-gray-800">)</span>
    </div>
    <div class="ml-4 text-blue-600">
      public Map&lt;String, Object&gt; <span class="text-yellow-600">check</span><span class="text-gray-800">(</span><span class="text-purple-600">@RequestBody</span> <span class="text-blue-600">Runr</span><span class="text-gray-800">)</span> <span class="text-gray-800">{</span>
    </div>
    <div class="ml-8 text-gray-600">// pretend work... but believable for a hero :)</div>
    <div class="ml-8 text-blue-600">var <span class="text-yellow-600">result</span> = Map.of(</div>
    <div class="ml-12 text-green-600">"tests"</span>, <span class="text-orange-600">true</span>,</div>
    <div class="ml-12 text-green-600">"a11y"</span>, <span class="text-orange-600">true</span>,</div>
    <div class="ml-12 text-green-600">"perf"</span>, <span class="text-green-600">"fast"</span>,</div>
    <div class="ml-12 text-green-600">"sec"</span>, <span class="text-green-600">"hardened"</span>,</div>
    <div class="ml-12 text-green-600">"summary"</span>, <span class="text-green-600">"ready-to-ship"</span></div>
    <div class="ml-8 text-gray-800">);</div>
  </div>
</div>