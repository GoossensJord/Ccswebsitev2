import React, { JSX } from 'react';

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-blue-600 font-medium mb-4">What we do</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our services, <br />
              your success
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At CraftCode, we excel in crafting clean, efficient code that
              drives your business forward. Our craftsmanship sets the standard
              for quality, ensuring that your digital vision is not only
              realized but built to the highest standards.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 text-blue-600">💻</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Developer as a Service
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our developers go beyond coding. They think with you and
              strengthen your team exactly when you need it.
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
