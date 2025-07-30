import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const BathroomFittingsContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Premium Bathroom Solutions for Modern Spaces</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        Seifac provides high-quality imported bathroom tiles and fittings that combine 
        aesthetics, durability, and functionality. From luxurious hotels to residential 
        projects, our exclusive collection of sanitary wares and tiles helps create bathroom 
        spaces that impress and endure.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <Card className="p-6 shadow-md border-green-100 h-full">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Our Bathroom Product Range</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Premium Tiles</strong> - Floor and wall tiles in ceramic, porcelain, marble, and granite</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Bathtubs & Shower Systems</strong> - Free-standing baths, jacuzzis, and premium shower sets</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Sanitaryware</strong> - Water closets, bidets, basins, and urinals</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Bathroom Furniture</strong> - Cabinets, vanities, and storage solutions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Faucets & Mixers</strong> - Contemporary and traditional styles with advanced technology</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Accessories</strong> - Towel racks, soap dispensers, mirrors, and shelves</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Smart Bathroom Technologies</strong> - Water-saving fixtures and touchless operations</span>
          </li>
        </ul>
      </Card>
      
      <div className="space-y-6">
        <Card className="p-6 shadow-md border-green-100">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Brands We Carry</h3>
          <p className="text-gray-700 mb-4">
            We import and distribute bathroom products from respected global manufacturers known for 
            their quality, innovation, and design excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Premium Italian Tiles",
              "Spanish Porcelain",
              "German Fittings",
              "Turkish Ceramics",
              "British Fixtures",
              "Scandinavian Design"
            ].map((brand, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded text-center text-sm font-medium text-gray-700">
                {brand}
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6 shadow-md border-green-100">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Who We Serve</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span>Architects & Interior Designers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span>Construction Companies & Developers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span>Hotels & Hospitality Groups</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span>Retail Showrooms & Distributors</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span>Homeowners & Renovators</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Premium Tile Collections</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4 shadow-sm border-0 bg-white">
          <div className="aspect-square relative mb-3 overflow-hidden rounded-md">
            <Image 
              src="https://images.unsplash.com/photo-1599577456698-d3f91bf61abb?q=80&w=800&auto=format&fit=crop" 
              alt="Luxury marble tiles"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <h4 className="font-semibold text-center">Luxury Marble Collection</h4>
        </Card>
        
        <Card className="p-4 shadow-sm border-0 bg-white">
          <div className="aspect-square relative mb-3 overflow-hidden rounded-md">
            <Image 
              src="https://images.unsplash.com/photo-1539080740795-3ff3a891dc1a?q=80&w=800&auto=format&fit=crop" 
              alt="Modern porcelain tiles"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <h4 className="font-semibold text-center">Modern Porcelain Series</h4>
        </Card>
        
        <Card className="p-4 shadow-sm border-0 bg-white">
          <div className="aspect-square relative mb-3 overflow-hidden rounded-md">
            <Image 
              src="https://images.unsplash.com/photo-1635668422724-aca06a4a0907?q=80&w=800&auto=format&fit=crop" 
              alt="Designer pattern tiles"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <h4 className="font-semibold text-center">Designer Pattern Collection</h4>
        </Card>
      </div>
    </div>
    
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Seifac for Bathroom Solutions?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🛠️</div>
          <h4 className="text-xl font-semibold mb-2">Quality Assurance</h4>
          <p className="text-sm text-gray-600">
            All our products meet international standards for durability, safety, and performance.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🎨</div>
          <h4 className="text-xl font-semibold mb-2">Design Excellence</h4>
          <p className="text-sm text-gray-600">
            Contemporary aesthetics, diverse styles, and innovative design options for every taste.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🚚</div>
          <h4 className="text-xl font-semibold mb-2">Supply & Support</h4>
          <p className="text-sm text-gray-600">
            Reliable inventory, efficient logistics, professional installation advice, and after-sales service.
          </p>
        </Card>
      </div>
    </div>
    
    <div className="bg-gray-50 p-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <Image 
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop" 
            alt="Modern bathroom design"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Service Process</h3>
          <ol className="space-y-3 list-decimal pl-5">
            <li className="text-gray-700">
              <span className="font-medium">Consultation</span> - Discuss your requirements, budget, and timeline
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Product Selection</span> - Browse our catalog and showroom for the perfect match
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Quotation</span> - Receive detailed pricing with transparent terms
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Supply</span> - Efficient delivery of products to your project site
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Technical Support</span> - Installation guidance and post-purchase assistance
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default function BathroomFittings() {
  return (
    <ServicePage
      title="Bathroom Tiles & Fittings"
      description="Premium imported bathroom tiles, sanitaryware, and accessories for elegant and functional spaces"
      heroImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop"
      icon="🚿"
      content={<BathroomFittingsContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "bathroom@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Request Product Catalog",
        link: "/contact",
      }}
      relatedServices={[
        {
          id: 1,
          title: "Farm ERP",
          link: "/services/farm-erp",
        },
        {
          id: 2,
          title: "Wine Importation",
          link: "/services/wines-supply",
        },
      ]}
    />
  );
}