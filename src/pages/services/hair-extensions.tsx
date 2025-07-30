import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';

const HairExtensionsContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Premium Quality Virgin Hair Extensions</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        Seifac&apos;s hair extensions are unparalleled because the virgin hair used only has cuticle layers
        facing the same direction from root to end. This ensures that the extensions behave exactly like
        your own hair and guarantees natural wave, fullness, luster and remarkable usability. Our
        hair is light in weight and supple which gives it natural flow and movement.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        Chemically free, our hair will enhance the length, color and texture of your natural hair leaving you with a
        flawless and refined weave or hair extension style. Our hair can be reused for up to a year. It
        can be washed, blow dried, curled, flat ironed, colored and permed while still maintaining its
        original beauty and vitality.
      </p>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Industry-Exclusive Collections</h3>
      <p className="text-gray-700 mb-6">
        Seifac&apos;s six collections of premium hair extension products set the standard for the Industry.
        Seifac is for everyone! Our exclusive collections cater to people of all ages, ethnicities and hair
        types offering unmatched longevity.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { name: "Virgin Hair", icon: "💁‍♀️" },
          { name: "Clip-in Extensions", icon: "📎" },
          { name: "Closures & Frontals", icon: "👑" },
          { name: "Lace Front Wigs", icon: "👸" },
          { name: "Ponytails", icon: "🎀" },
          { name: "Braiding Hair", icon: "✨" }
        ].map((product, index) => (
          <Card key={index} className="p-4 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{product.icon}</div>
            <h4 className="font-medium text-sm">{product.name}</h4>
          </Card>
        ))}
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Product Range</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Virgin Hair</strong> - 100% unprocessed human hair sourced from single donors with all natural cuticles</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Clip-in Hair Extensions</strong> - Quick and damage-free way to add volume and length</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Closures & Frontals</strong> - Natural-looking hairline and finish for weaves or wigs</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Lace Front Wigs</strong> - Natural hairline and breathable lace cap</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Ponytails</strong> - Sleek and chic looks in different textures and lengths</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Braiding Hair</strong> - Premium synthetic and human hair for knotless braids, box braids, cornrows, and twists</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Tape Extensions</strong> - Semi-permanent hair extensions with a discreet and seamless finish</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Wavy Hair</strong> - Soft, natural wave pattern that mimics relaxed hair</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Weave</strong> - Machine-sewn bundles of 100% human hair in straight, wavy, and curly textures</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Human Hair Wigs</strong> - Premium wigs in various cap constructions for comfort and longevity</span>
          </li>
        </ul>
      </div>
      
      <Card className="p-6 shadow-md border-green-100">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Top-of-the-Line Quality Assurance</h3>
        <p className="text-gray-700 mb-4">
          Seifac knows the human hair industry unlike any other. While many other companies simply
          sell a private labeled product available to be sold by anyone, we own and operate our own
          overseas factories and domestic operations to ensure total control of the process from start to
          finish.
        </p>
        <p className="text-gray-700 mb-4">
          Once the raw hair is sourced from the Temples of India and private suppliers in South
          East Asia, it is thoroughly inspected, cleaned and manufactured into our trademark collections
          of products.
        </p>
        
        <h4 className="font-semibold text-gray-800 mt-6 mb-3">Private Label Hair Extensions</h4>
        <p className="text-gray-700 mb-4">
          Are you feeling frustrated with your current virgin hair vendor? Let us solve your hair supply issues so you can focus on selling instead of sourcing.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Consistent quality with no surprises</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Reliable delivery timelines</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Guaranteed stock availability</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Transparent pricing with no last-minute changes</span>
          </li>
        </ul>
      </Card>
    </div>
  </div>
);

export default function HairExtensions() {
  return (
    <ServicePage
      title="Hair Extensions"
      description="Premium quality virgin hair extensions with aligned cuticles for natural movement and longevity"
      heroImage="https://images.unsplash.com/photo-1595534005229-68f332bec85c?q=80&w=1920&auto=format&fit=crop"
      icon="💇‍♀️"
      content={<HairExtensionsContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "hair@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "View Our Hair Collections",
        link: "/contact",
      }}
      relatedServices={[
        {
          id: 1,
          title: "Computers & Smartphones",
          link: "/services/tech-devices",
        },
        {
          id: 2,
          title: "Bathroom Fittings & Tiles",
          link: "/services/bathroom-fittings",
        },
      ]}
    />
  );
}