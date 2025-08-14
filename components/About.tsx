import React from 'react';

export default function About(): React.ReactNode {
  return (
    <main className="h-full w-full flex items-center justify-center p-4 md:p-8 animate-fadeIn bg-[#fdfdfd] overflow-y-auto">
      <div className="max-w-6xl mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                      We don't sell shoes.
                  </h1>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-blue-500 leading-tight">
                      We architect the future of movement.
                  </h2>
              </div>
              <div className="space-y-6 text-gray-600 text-lg">
                  <p>
                      FootPrints was founded on a simple, yet radical idea: what if footwear could do more? What if it could adapt, respond, and enhance our natural abilities? We're a collective of engineers, designers, and bio-mechanists obsessed with pushing the boundaries of what you put on your feet.
                  </p>
                  <p>
                      Our process is relentless innovation. From our zero-gravity foams to adaptive kinetic weaves, every material is developed in-house to solve problems you didn't even know you had. We believe in sustainable progress, ensuring our technological leaps leave a lighter footprint on the planet.
                  </p>
                  <p>Welcome to the next step. Welcome to FootPrints.</p>
              </div>
          </div>
      </div>
    </main>
  );
}
