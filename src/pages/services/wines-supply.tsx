import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';

const WinesSupplyContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">A Taste of Global Excellence, Delivered to Nigeria</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        At Seifac Wines, we specialize in importing and distributing premium wines from the world&apos;s most renowned vineyards. 
        Whether you&apos;re a wine connoisseur, a retail business, or part of the hospitality industry, our handpicked 
        selection brings sophistication and satisfaction to your table.
      </p>
      
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Seifac Wines – Redefining Wine Importation in Nigeria. Seifac Wines is the wine importation division 
        of Seifac Agricultural Services Ltd, a trusted name in agribusiness and food logistics in Nigeria. 
        Our venture into premium wine importation is driven by passion, expertise, and a commitment to excellence.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        We partner directly with licensed wineries across France, Italy, Spain, South Africa, Chile, and 
        Argentina to bring you authentic, high-quality wines suited to the Nigerian market.
      </p>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Wine Collection</h3>
      <p className="text-gray-700 mb-6">
        Explore Our Portfolio of elegant wines for every occasion:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🍷</span>
            <h4 className="text-xl font-semibold">Red Wines</h4>
          </div>
          <p className="text-gray-700">
            Full-bodied, rich, and bold. Perfect with meals or for relaxed evenings. Popular varietals:
            Cabernet Sauvignon, Merlot, Pinot Noir, Shiraz.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🥂</span>
            <h4 className="text-xl font-semibold">White Wines</h4>
          </div>
          <p className="text-gray-700">
            Light, crisp, and refreshing. Ideal for warm weather and seafood dishes. Includes Sauvignon
            Blanc, Chardonnay, and Riesling.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🌹</span>
            <h4 className="text-xl font-semibold">Rosé Wines</h4>
          </div>
          <p className="text-gray-700">
            Fresh, fruity, and elegant. Great for social events and brunch moments.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">✨</span>
            <h4 className="text-xl font-semibold">Sparkling Wines & Champagne</h4>
          </div>
          <p className="text-gray-700">
            Celebrate milestones with bubbly classics—Prosecco, Cava, and French Champagne.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🍯</span>
            <h4 className="text-xl font-semibold">Sweet & Fortified Wines</h4>
          </div>
          <p className="text-gray-700">
            Rich dessert wines and fortified selections to end your evenings beautifully.
          </p>
        </Card>
      </div>
      
      <p className="text-gray-700 mt-6 text-center font-medium">
        All wines are imported under strict quality standards and registered with Nigerian food and drug authorities.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wholesale & Retail Services</h3>
        <p className="text-gray-700 mb-4">We Serve:</p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✅</span>
            <span>Hotels & Restaurants</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✅</span>
            <span>Bars & Lounges</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✅</span>
            <span>Supermarkets & Wine Shops</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✅</span>
            <span>Event Planners & Wedding Caterers</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✅</span>
            <span>Private Collectors & Wine Enthusiasts</span>
          </li>
        </ul>
        
        <p className="text-gray-700 mt-6 mb-4">Our Services Include:</p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Bulk wine importation and sales</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Custom wine orders for clients</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Nationwide delivery logistics</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Staff wine education & tasting support</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Event wine curation & supply</span>
          </li>
        </ul>
      </div>
      
      <Card className="p-6 shadow-md border-green-100">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Why Choose Seifac Wines?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">🥂</span>
            <span><strong>Direct Importer</strong> – No third-party markups</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">🥂</span>
            <span><strong>Authentic Brands</strong> – From certified international vineyards</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">🥂</span>
            <span><strong>Registered & Compliant</strong> – With NAFDAC, SON, and FIRS</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">🥂</span>
            <span><strong>Customer-Centric Support</strong> – From order to delivery</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">🥂</span>
            <span><strong>Flexible Pricing</strong> – For wholesale and bulk orders</span>
          </li>
        </ul>
        
        <p className="text-gray-700 mt-6 font-medium text-center">
          We deliver more than wine — we deliver confidence and class.
        </p>
      </Card>
    </div>
    
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">How to Order</h3>
      <p className="text-gray-700 mb-6 text-center">
        Ordering is fast and seamless:
      </p>
      
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex-1 flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">1</div>
            <p className="text-gray-700 text-center">Browse our catalog (request via WhatsApp or email)</p>
          </div>
          <div className="hidden md:block text-green-500">→</div>
          
          <div className="flex-1 flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">2</div>
            <p className="text-gray-700 text-center">Select your wine and quantity</p>
          </div>
          <div className="hidden md:block text-green-500">→</div>
          
          <div className="flex-1 flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">3</div>
            <p className="text-gray-700 text-center">Confirm your order and receive a quote</p>
          </div>
          <div className="hidden md:block text-green-500">→</div>
          
          <div className="flex-1 flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">4</div>
            <p className="text-gray-700 text-center">Delivery within 24–72 hours nationwide</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function WinesSupply() {
  return (
    <ServicePage
      title="Wine Importation"
      description="Premium wines imported from the world's finest vineyards, delivered with excellence"
      heroImage="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1920&auto=format&fit=crop"
      icon="🍷"
      content={<WinesSupplyContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "wines@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Request Wine Catalog",
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
          title: "Hair Extensions",
          link: "/services/hair-extensions",
        },
      ]}
    />
  );
}