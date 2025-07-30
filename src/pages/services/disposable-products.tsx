import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const DisposableProductsContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">High-Quality PP & PS Disposable Products</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        Seifac provides premium polypropylene (PP) and polystyrene (PS) disposable products for 
        food service, hospitality, healthcare, and retail industries across Nigeria. Our products 
        combine durability, safety, and eco-conscious design to meet the needs of businesses of all sizes.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <Card className="p-6 shadow-md border-green-100 h-full">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Food Service Disposables</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>PP Containers</strong> - Microwave-safe food containers with lids</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>PS Food Trays</strong> - Lightweight trays for food presentation</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Disposable Cutlery</strong> - Forks, spoons, knives, and combo sets</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Disposable Cups</strong> - Various sizes for hot and cold beverages</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Plates & Bowls</strong> - Disposable tableware for all occasions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Straws & Stirrers</strong> - Individual or bulk packaging</span>
          </li>
        </ul>
      </Card>
      
      <Card className="p-6 shadow-md border-green-100 h-full">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Hospitality & Catering</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Takeaway Containers</strong> - Secure, leak-resistant packaging</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Buffet Supplies</strong> - Serving trays, tongs, and utensils</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Event Packaging</strong> - Elegant disposables for special occasions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Portion Cups</strong> - For condiments, sauces, and dressings</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Disposable Gloves</strong> - For food handling and preparation</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Aprons & Caps</strong> - Disposable kitchen apparel</span>
          </li>
        </ul>
      </Card>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Industrial & Commercial Applications</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-sm border-0 bg-white">
          <h4 className="text-xl font-semibold text-green-700 mb-3">Retail Solutions</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Display containers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Product packaging</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Promotional items</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Food service supplies</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-sm border-0 bg-white">
          <h4 className="text-xl font-semibold text-green-700 mb-3">Healthcare Uses</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Specimen containers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Medication cups</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Disposable trays</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Patient care items</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-sm border-0 bg-white">
          <h4 className="text-xl font-semibold text-green-700 mb-3">Packaging Industry</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Custom containers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Blister packaging</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Protective packaging</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Transport solutions</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    
    <div className="my-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Benefits</h3>
          <Card className="p-6 shadow-md border-green-100 h-full">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Food-Grade Materials</h4>
                  <p className="text-sm text-gray-600">All our products are made from FDA-approved food-grade PP and PS materials, safe for direct food contact.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Durability</h4>
                  <p className="text-sm text-gray-600">Our disposables are designed to be sturdy and reliable, reducing breakage and spillage risks.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Cost-Effective</h4>
                  <p className="text-sm text-gray-600">Eliminate washing costs and reduce water usage while maintaining professional presentation.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Hygiene Standards</h4>
                  <p className="text-sm text-gray-600">Single-use products reduce cross-contamination risks in food service and healthcare settings.</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="md:w-1/2">
          <Image 
            src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=800&auto=format&fit=crop" 
            alt="Disposable food containers and packaging"
            width={500}
            height={400}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Environmental Consideration</h4>
            <p className="text-sm text-gray-600">
              Seifac is committed to responsible manufacturing and distribution. We offer recyclable 
              options where possible and are continuously exploring more sustainable alternatives and 
              biodegradable options to reduce environmental impact.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🏭</div>
          <h4 className="text-lg font-semibold mb-2">Bulk Supply</h4>
          <p className="text-xs text-gray-600">
            Wholesale quantities for businesses with volume discounts available.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">✨</div>
          <h4 className="text-lg font-semibold mb-2">Custom Branding</h4>
          <p className="text-xs text-gray-600">
            Add your logo and branding to disposable products for marketing impact.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🚚</div>
          <h4 className="text-lg font-semibold mb-2">Nationwide Delivery</h4>
          <p className="text-xs text-gray-600">
            Reliable logistics to deliver your orders anywhere in Nigeria.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">📦</div>
          <h4 className="text-lg font-semibold mb-2">Inventory Management</h4>
          <p className="text-xs text-gray-600">
            Regular supply schedules to keep your business stocked.
          </p>
        </Card>
      </div>
    </div>
    
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Industries We Serve</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          {icon: "🍔", name: "Fast Food"},
          {icon: "🏨", name: "Hotels"},
          {icon: "🍲", name: "Catering"},
          {icon: "🏥", name: "Healthcare"},
          {icon: "🛒", name: "Retail"},
          {icon: "☕", name: "Cafes"},
          {icon: "🍦", name: "Ice Cream Shops"},
          {icon: "🍰", name: "Bakeries"},
          {icon: "🥡", name: "Food Delivery"},
          {icon: "🎓", name: "Schools"},
          {icon: "🏢", name: "Offices"},
          {icon: "🎪", name: "Events"}
        ].map((industry, index) => (
          <Card key={index} className="p-4 shadow-sm border-0 text-center">
            <div className="text-3xl mb-2">{industry.icon}</div>
            <h4 className="font-medium text-xs text-gray-700">{industry.name}</h4>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default function DisposableProducts() {
  return (
    <ServicePage
      title="PP & PS Disposable Products"
      description="High-quality food service and hospitality disposable products for businesses across Nigeria"
      heroImage="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1920&auto=format&fit=crop"
      icon="🥤"
      content={<DisposableProductsContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "disposable@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Request Product Catalog",
        link: "/contact",
      }}
      relatedServices={[
        {
          id: 1,
          title: "Medical Devices",
          link: "/services/medical-devices",
        },
        {
          id: 2,
          title: "Bathroom Fittings",
          link: "/services/bathroom-fittings",
        },
      ]}
    />
  );
}