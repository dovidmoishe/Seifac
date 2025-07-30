import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';

const FarmERPContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Digital Farming. Smarter Agriculture.</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        At Seifac, we provide cutting-edge Farm ERP (Enterprise Resource Planning) solutions designed to 
        revolutionize the way agricultural businesses are managed. From smallholder cooperatives to 
        large-scale commercial farms, our digital tools streamline every aspect of farm operations—from 
        planning and planting to harvesting, storage, and sales. Our goal is simple: to help farmers grow 
        more, waste less, and earn better.
      </p>
      
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Is Farm ERP?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Farm ERP is an all-in-one agriculture management software that enables real-time monitoring, 
        planning, and control of farm activities. With Seifac Farm ERP, you can manage:
      </p>
      
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>Farm inputs and inventory</li>
        <li>Land use and crop planning</li>
        <li>Labor and field operations</li>
        <li>Financial records and cost tracking</li>
        <li>Harvest data and yield analysis</li>
        <li>Sales, distribution, and customer management</li>
      </ul>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <Card className="p-6 shadow-md border-green-100">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Key Features of Seifac Farm ERP</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Crop Management</strong> – Plan schedules, monitor growth, manage multi-seasonal farming.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Inventory & Input Tracking</strong> – Track seeds, fertilizers, chemicals, and equipment.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Farmer & Field Mapping</strong> – Use GPS to map fields and monitor productivity.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Financial Management</strong> – Handle expenses, income, and profitability with built-in accounting.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Mobile & Offline Access</strong> – Empower field agents and farmers, even in remote areas.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Reporting & Analytics</strong> – Real-time dashboards and smart reports.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Integration Ready</strong> – Sync with weather systems, payments, and drones.</span>
          </li>
        </ul>
      </Card>
      
      <Card className="p-6 shadow-md border-green-100">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Who Should Use Seifac Farm ERP?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Commercial Farm Owners</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Agribusiness Cooperatives</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Agricultural Extension Services</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Government & NGO Agricultural Projects</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Input Suppliers & Off-takers</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Farmer Associations & Unions</span>
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold text-green-700 mt-8 mb-4">Why Choose Seifac ERP Services?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Tailored for African Agriculture</strong> – Suits both smallholder and commercial farming needs.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">User-Friendly Interface</strong> – Easy to use across all levels.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Scalable</strong> – Adaptable for any farm size.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Data Security</strong> – Secure cloud-based system.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong className="text-gray-800">Training & Support</strong> – Full onboarding and continuous assistance.</span>
          </li>
        </ul>
      </Card>
    </div>
    
    <div className="bg-green-50 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Deployment Options</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-medium text-green-700 mb-2">Software-as-a-Service (SaaS)</h4>
          <p className="text-sm text-gray-600">Access from anywhere with our cloud-based solution</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-medium text-green-700 mb-2">On-Premise Deployment</h4>
          <p className="text-sm text-gray-600">Internal hosting for organizations with existing IT infrastructure</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-medium text-green-700 mb-2">White-Labeling</h4>
          <p className="text-sm text-gray-600">Branded solutions for NGOs or government agricultural programs</p>
        </div>
      </div>
    </div>
    
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let&apos;s Help You Digitize Your Farm Operations</h3>
      <div className="bg-gray-50 p-6 rounded-lg">
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-700">Request a demo or consultation</li>
          <li className="text-gray-700">Share your farm size, goals, and current challenges</li>
          <li className="text-gray-700">We customize the solution to fit your needs</li>
          <li className="text-gray-700">Training, deployment, and ongoing support</li>
        </ol>
      </div>
    </div>
  </div>
);

export default function FarmERP() {
  return (
    <ServicePage
      title="Farm ERP"
      description="Digital farming solutions that revolutionize agricultural management and boost productivity"
      heroImage="https://images.unsplash.com/photo-1625246333195-78d73c5207fd?q=80&w=1920&auto=format&fit=crop"
      icon="🌾"
      content={<FarmERPContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "erp@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Request a Demo",
        link: "/contact",
      }}
      relatedServices={[
        {
          id: 2,
          title: "Extension & Advisory Services",
          link: "/services/extension-advisory",
        },
        {
          id: 3,
          title: "Farm Management",
          link: "/services/farm-management",
        },
      ]}
    />
  );
}