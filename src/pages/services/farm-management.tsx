import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const FarmManagementContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Optimized Farm Operations. Improved Productivity.</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        At Seifac, our Farm Management Services provide end-to-end solutions to help farm owners,
        agribusinesses, and cooperatives achieve maximum productivity, profitability, and
        sustainability. Whether you operate a small plot or a commercial estate, our experienced
        team manages your farm like a business—with precision, technology, and best practices.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <Card className="p-6 shadow-md border-green-100">
        <h3 className="text-xl font-semibold text-green-700 mb-4">What We Offer</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Complete farm setup and development</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Crop and livestock enterprise planning</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Daily operations and labor management</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Input sourcing and inventory control</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Farm budgeting and financial tracking</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Equipment and machinery oversight</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Pest, disease, and weed management</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Harvesting, storage, and post-harvest handling</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Market linkage and off-taker coordination</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Farm performance monitoring and reporting</span>
          </li>
        </ul>
      </Card>
      
      <div>
        <Card className="p-6 shadow-md border-green-100 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Our Management Approach</h3>
          <p className="text-gray-700 mb-4">
            Our farm management system is built on data, discipline, and delivery. We assign a dedicated
            agribusiness team to each client, combining:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Field visits and supervision</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Technology tools (Farm ERP, GPS mapping, yield tracking)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Financial oversight and transparency</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Real-time communication and reporting</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-md border-green-100">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Who We Serve</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Busy or absentee farm owners</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Institutional landowners and cooperatives</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Commercial farms and estate investors</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Development organizations and donor projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>Youth in agriculture and new entrants needing support</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <Image 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop" 
            alt="Farm management and planning"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Why Choose Seifac Farm Management?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Experienced team</strong> of agronomists and farm supervisors with deep local knowledge</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Data-driven decision-making</strong> and precision farming tools for optimal results</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Transparent and accountable operations</strong> with regular performance reporting</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Nationwide service coverage</strong> across all major agricultural regions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Flexible plans</strong> for part-time or full-time farm management needs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Let&apos;s Manage Your Farm the Smart Way</h3>
      <p className="text-gray-700 mb-8 text-center">
        Take the stress out of farming—partner with Seifac to run your farm profitably and professionally.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🌱</div>
          <h4 className="text-xl font-semibold mb-2">Setup & Planning</h4>
          <p className="text-sm text-gray-600">
            We establish clear objectives, budgets, and operational plans tailored to your farm&apos;s potential.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🚜</div>
          <h4 className="text-xl font-semibold mb-2">Daily Operations</h4>
          <p className="text-sm text-gray-600">
            Our team handles day-to-day management, staff supervision, and technical execution.
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">📊</div>
          <h4 className="text-xl font-semibold mb-2">Results & Reporting</h4>
          <p className="text-sm text-gray-600">
            Receive detailed reports on farm performance, finances, and recommendations for improvement.
          </p>
        </Card>
      </div>
    </div>
  </div>
);

export default function FarmManagement() {
  return (
    <ServicePage
      title="Farm Management"
      description="Professional farm management services to optimize operations and boost profitability"
      heroImage="https://images.unsplash.com/photo-1472652024906-e8449d8486ff?q=80&w=1920&auto=format&fit=crop"
      icon="🚜"
      content={<FarmManagementContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "farm@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Get Farm Management Services",
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
          title: "Extension & Advisory Services",
          link: "/services/extension-advisory",
        },
      ]}
    />
  );
}