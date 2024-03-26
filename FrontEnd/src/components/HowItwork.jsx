import React from 'react';
import { Heading, Text } from '@radix-ui/themes';

function HowItWork() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading size="2" className="text-center mb-8">How Read for Speed Works?</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <img src="your-image-url" alt="Illustration" className="w-full" />
        </div>
        
        {/* Right side */}
        <div>
          <Text as="p" className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in erat ut libero vehicula pulvinar. Integer nec justo nec odio efficitur sagittis. 
          </Text>
          <Text as="p" className="mb-4">
            Nulla facilisi. Morbi nec sollicitudin risus, sit amet vestibulum nisl. Suspendisse eget dapibus orci, at suscipit libero. Nulla facilisi.
          </Text>
          <Text as="p" className="mb-4">
            Donec eget felis orci. Duis at quam sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
