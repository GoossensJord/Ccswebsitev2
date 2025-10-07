{{-- Terminal Status Component --}}
<div class="absolute right-8 bottom-96 lg:bottom-[450px] w-72 font-mono bg-gray-50 rounded-lg shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
    {{-- Terminal Window Header --}}
    <div class="relative flex items-center p-3 bg-white border-b border-gray-200 rounded-t-lg">
        <div class="absolute left-3 flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span class="w-full text-center text-sm text-gray-600">zsh</span>
    </div>

    <div class="p-4 text-gray-800">
        <div class="text-gray-600 mb-1">local@MacBook %</div>
        <div class="mb-4">
            <div class="flex items-center space-x-2 text-green-500 mb-2">
                <span>✅</span>
                <span>Build successful (14s)</span>
            </div>
            <div class="flex items-center space-x-2">
                <span class="inline-block">🌐</span>
                <span>Server on <span class="text-blue-600">:8080</span></span>
            </div>
        </div>

        <div class="text-green-500 space-y-2">
            <div class="flex items-center space-x-2">
                <span>✅ </span>
                <span>tests passed</span>
            </div>
            <div class="flex items-center space-x-2">
                <span>✅ </span>
                <span>a11y ok</span>
            </div>
            <div class="flex items-center space-x-2">
                <span>✅ </span>
                <span>perf fast</span>
            </div>
            <div class="flex items-center space-x-2">
                <span>✅ </span>
                <span>sec hardened</span>
            </div>
        </div>
    </div>
</div>