{{-- Solutions Section --}}
<section style="padding: 6rem 0;">
  <div class="mx-auto" style="max-width: 1200px; padding: 0 1rem;">
    <div class="text-center" style="margin-bottom: 4rem;">
      <div>
        <p style="
          font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #0156ff;
          line-height: 1.5;
          margin-bottom: 0.5rem;
        ">
          Our solutions
        </p>
        <h2 class="lg:text-5xl" style="
          font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segend UI', 'Roboto', sans-serif;
          font-size: 2.25rem;
          font-weight: 700;
          color: #010326;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        ">
          Clean code, Real impact
        </h2>
      </div>
      <p style="
        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
        color: #010326cc;
        line-height: 1.75;
        margin: 0 auto;
        text-align: center;
      ">
        We take pride in adapting to your needs with clean, scalable
        solutions. From architecture to front-end and back-end development,
        we build what works best for you using technologies that fit,
        without being tied to any one framework.
      </p>
    </div>

    {{-- Solutions Grid --}}
    <div class="grid grid-cols-6 gap-10">
      {{-- First Row: Architecture (2 cols) + Front-end Development (4 cols) --}}
      <div class="bg-gray-50 border border-solid border-gray-200 p-6 rounded-[40px_20px_20px_20px] col-span-2">
        <div class="w-full h-[280px] mb-8 flex items-center justify-center">
          <img
            class="w-full h-[212px] object-cover"
            alt="Architecture"
            src="{{ asset('app/themes/defaultCCTheme/resources/images/group-1000005876.png') }}"
          />
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Architecture
        </h3>
        <p class="text-gray-600 leading-relaxed">
          We design solid foundations that grow with your ambitions. Clear, maintainable and ready for the future.
        </p>
      </div>

      <div class="bg-gray-50 border border-solid border-gray-200 p-6 rounded-[20px] col-span-4">
        <div class="w-full h-[280px] mb-8 flex items-center justify-center">
          <img
            class="w-full h-[275px] object-cover"
            alt="Front-end Development"
            src="{{ asset('app/themes/defaultCCTheme/resources/images/frame-73.svg') }}"
          />
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Front-end Development
        </h3>
        <p class="text-gray-600 leading-relaxed">
          We craft user interfaces that don't just look good but feel intuitive and responsive. Whether it's a web app, dashboard or customer portal, our front-end developers ensure smooth interactions, accessible experiences and high performance across all devices.
        </p>
      </div>

      {{-- Second Row: Back-end Development (4 cols) + Integration (2 cols) --}}
      <div class="bg-gray-50 border border-solid border-gray-200 p-6 rounded-[20px] col-span-4 relative">
        {{-- Overlapping Code Windows --}}
        <div class="relative mb-8 h-[280px]">
          {{-- Java Code Editor - Front, slightly rotated left --}}
          <div class="absolute left-0 top-0 w-[357px] h-[241px] bg-white rounded-lg shadow-xl border border-gray-200 transform -rotate-1 z-20">
            <div class="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span class="text-sm text-gray-600 font-medium">CraftService.java</span>
              <div class="w-4 h-4"></div>
            </div>
            <div class="p-3 text-xs font-mono leading-snug bg-white text-gray-800 rounded-b-lg">
              <div class="py-0.5">
                <span style="color: #6366f1;">@Service</span>
              </div>
              <div class="py-0.5">
                <span style="color: #2563eb;">public</span> <span style="color: #2563eb;">class</span> <span style="color: #d97706;">CraftService</span> <span style="color: #374151;">{</span>
              </div>
              <br>
              <div style="margin-left: 0.5rem;">
                <span style="color: #6366f1;">@Autowired</span>
              </div>
              <div style="margin-left: 0.5rem;">
                <span style="color: #2563eb;">private</span> <span style="color: #8b5cf6;">CraftRepository</span> <span style="color: #d97706;">repository</span><span style="color: #374151;">;</span>
              </div>
              <br>
              <div style="margin-left: 0.5rem;">
                <span style="color: #2563eb;">public</span> <span style="color: #8b5cf6;">List</span><span style="color: #374151;">&lt;</span><span style="color: #8b5cf6;">Craft</span><span style="color: #374151;">&gt;</span> <span style="color: #d97706;">findAll</span><span style="color: #374151;">() {</span>
              </div>
              <div style="margin-left: 1rem;">
                <span style="color: #2563eb;">return</span> <span style="color: #d97706;">repository</span><span style="color: #374151;">.</span><span style="color: #d97706;">findAll</span><span style="color: #374151;">();</span>
              </div>
              <div style="margin-left: 0.5rem;">
                <span style="color: #374151;">}</span>
              </div>
              <div class="py-0.5">
                <span style="color: #374151;">}</span>
              </div>
            </div>
          </div>

          {{-- Terminal Window - Behind, overlapping, slightly rotated right --}}
          <div class="absolute left-72 top-12 w-[357px] h-[241px] bg-white rounded-lg shadow-xl border border-gray-200 transform rotate-1 z-10">
            <div class="flex items-start bg-gray-100 border-b border-gray-200 rounded-t-lg">
              <div class="inline-flex items-center gap-2 px-3 py-[11px] rounded-[10px_0px_0px_0px]">
                <div class="inline-flex items-center gap-1.5">
                  <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-[11px]">
                <div class="text-xs text-gray-600 font-medium">
                  zsh.
                </div>
              </div>
            </div>
            <div class="p-4 bg-white font-mono text-xs leading-relaxed">
              <div class="text-gray-800">
                local@MacBook % 
                <span class="text-blue-600">
                  ./mvnw spring-boot:run
                </span>
              </div>
              <div class="text-gray-600 mt-1">
                <span class="text-green-600">✔</span> Dependencies resolved
              </div>
              <div class="text-gray-600">
                <span class="text-green-600">✔</span> Build successful (14s)
              </div>
              <div class="text-gray-600">
                <span class="text-blue-600">[craftcode-demo]</span> Booting backend...
              </div>
              <div class="text-gray-600">
                <span class="text-green-600">☑</span> Database connected
              </div>
              <div class="text-gray-600">
                <span class="text-green-600">☑</span> Flyway migrations: 3 applied
              </div>
              <div class="text-gray-600">
                <span class="text-green-600">☑</span> HTTP server started on :8080
              </div>
              <div class="text-gray-600 mt-1">
                <span class="text-green-600">[READY]</span> Craftcode backend is up <span class="text-green-600">✔</span>
              </div>
            </div>
          </div>
        </div>

        {{-- Text Content --}}
        <div class="mt-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Back-end Development
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Behind every great interface is a solid engine. Our back-end experts build scalable, secure and future-ready systems that handle complex logic and data with ease. We focus on clean architecture, smart integrations and code that's built to last.
          </p>
        </div>
      </div>

      <div class="bg-gray-50 border border-solid border-gray-200 p-6 rounded-[20px_20px_40px_20px] col-span-2">
        <div class="w-full h-[280px] mb-8 flex items-center justify-center">
          <img
            class="w-full h-[212px] object-cover"
            alt="Integration"
            src="{{ asset('app/themes/defaultCCTheme/resources/images/group-1000005874.png') }}"
          />
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Integration
        </h3>
        <p class="text-gray-600 leading-relaxed">
          We connect systems in ways that just work. Smooth, safe and without the usual hassle.
        </p>
      </div>
    </div>
  </div>
</section>