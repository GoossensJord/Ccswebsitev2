<section class="relative" style="padding: 0;">
  <div class="mx-auto" style="max-width: 1440px; padding: 0;">
    <div
      class="w-full min-h-[1000px] rounded-[20px_20px_60px_20px] border border-solid relative bg-cover bg-center bg-no-repeat"
      style="
        background-color: #F8F9FB;
        border-color: #E5E7EB;
        padding: 0;
        margin: 0;
        background-image: url(/app/themes/craftcodephp/resources/images/image-85.png);
      "
    >
      <!-- Hero Content Overlay -->
      <div class="relative z-20 flex flex-col items-center text-center" style="padding-top: 96px;">
        <h1 style="
          font-size: 62px;
          line-height: 70px;
          margin-bottom: 96px;
        ">
          Our craftsmanship <br>
          defines your code
        </h1>
        <p class="text-center" style="
          max-width: 798px;
          margin-bottom: 96px;
        ">
          From strategic advisory to hands-on development,
          <br>
          we partner with you to create sustainable digital solutions that
          truly make a difference.
        </p>
        <button class="h-auto hover:bg-[#0156ff]/90" style="
          background-color: #0156ff;
          color: white;
          padding: 16px 24px;
        ">
          <span>Get to know us</span>
        </button>
      </div>

      @include('sections.LeftCodeEditor')
      <!-- Code Editors and Terminal would need to be converted to static HTML -->
      <!-- You'll need to create static HTML versions of LeftCodeEditor, RightTopCodeEditor, and TerminalWindow components -->



      <!-- Background decorative image -->
      <img
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-auto z-5 opacity-60"
        alt="Background decoration"
        src="/app/themes/craftcodephp/resources/images/heroBg.png"
      />
    </div>
  </div>
</section>