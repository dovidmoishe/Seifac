import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const TechDevicesContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Complete Technology Solutions for Businesses & Institutions</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        Seifac provides high-quality computers, smartphones, and IT peripherals to businesses, 
        educational institutions, and government agencies across Nigeria. We source directly from 
        authorized global manufacturers to ensure you receive genuine products with full warranty 
        coverage and after-sales support.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <Card className="p-6 shadow-md border-green-100 h-full">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Computing Solutions</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Desktop Computers</strong> - Office PCs, workstations, and all-in-ones</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Laptops & Notebooks</strong> - Business laptops, ultrabooks, and convertibles</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Servers & Storage</strong> - Enterprise-grade servers and NAS solutions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Tablets</strong> - iPads, Android tablets, and Windows tablets</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Monitors & Displays</strong> - Office monitors, professional displays</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Computer Components</strong> - Processors, memory, storage, and graphics cards</span>
          </li>
        </ul>
      </Card>
      
      <Card className="p-6 shadow-md border-green-100 h-full">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Mobile & Communication</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Smartphones</strong> - Business and premium consumer devices</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Feature Phones</strong> - Affordable communication devices</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>VoIP Systems</strong> - Business communication solutions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Conference Systems</strong> - Audio and video conferencing equipment</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Mobile Accessories</strong> - Cases, screen protectors, and charging solutions</span>
          </li>
        </ul>
      </Card>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Peripherals & Networking</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-sm border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🖨️</span>
            <h4 className="text-xl font-semibold">Printing Solutions</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Laser & Inkjet Printers</li>
            <li>• Multifunction Devices</li>
            <li>• Large Format Printers</li>
            <li>• Label Printers</li>
            <li>• Consumables & Supplies</li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-sm border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🔌</span>
            <h4 className="text-xl font-semibold">Networking</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Routers & Switches</li>
            <li>• Wireless Access Points</li>
            <li>• Network Security Devices</li>
            <li>• Cabling & Infrastructure</li>
            <li>• Network Management Tools</li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-sm border-0 bg-white">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🔋</span>
            <h4 className="text-xl font-semibold">Power & Protection</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• UPS Systems</li>
            <li>• Surge Protectors</li>
            <li>• Power Conditioners</li>
            <li>• Voltage Regulators</li>
            <li>• Generator Compatibility</li>
          </ul>
        </Card>
      </div>
    </div>
    
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Software & Services</h3>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Card className="p-6 shadow-md border-green-100 h-full">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Software Solutions</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Operating Systems</strong> - Windows, macOS, and Linux distributions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Productivity Suites</strong> - Microsoft Office, Google Workspace</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Security Software</strong> - Antivirus, endpoint protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Specialized Applications</strong> - Industry-specific software</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Cloud Services</strong> - SaaS, PaaS, and IaaS solutions</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="md:w-1/2">
          <Card className="p-6 shadow-md border-green-100 h-full">
            <h4 className="text-xl font-semibold text-green-700 mb-4">IT Services</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Installation & Setup</strong> - Hardware deployment and configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Maintenance Contracts</strong> - Regular service and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Training</strong> - End-user and administrator training</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>System Integration</strong> - Connecting disparate systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Technical Support</strong> - Remote and on-site assistance</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
    
    <div className="bg-gray-50 p-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <Image 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
            alt="Business technology solutions"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Why Choose Seifac for Tech Solutions?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span><strong>Authorized Partnerships</strong> - Direct relationships with top manufacturers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span><strong>Genuine Products</strong> - 100% authentic with full manufacturer warranty</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span><strong>Competitive Pricing</strong> - Bulk discounts and flexible payment options</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span><strong>Expert Consultation</strong> - Tailored recommendations for your needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span><strong>After-Sales Support</strong> - Technical assistance and warranty handling</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Clients</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "Corporate Offices",
          "Educational Institutions",
          "Government Agencies",
          "Healthcare Facilities",
          "Financial Services",
          "Retail Businesses",
          "Hospitality Industry",
          "SMEs & Startups"
        ].map((client, index) => (
          <Card key={index} className="p-4 shadow-sm border-0 text-center bg-gray-50">
            <div className="text-3xl mb-2 text-green-500">💼</div>
            <h4 className="font-medium text-sm text-gray-700">{client}</h4>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default function TechDevices() {
  return (
    <ServicePage
      title="Computers, Smartphones & Peripherals"
      description="High-quality technology products and IT solutions for businesses and institutions across Nigeria"
      heroImage="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1920&auto=format&fit=crop"
      icon="💻"
      content={<TechDevicesContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "tech@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Request Technology Consultation",
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
          title: "Medical Devices",
          link: "/services/medical-devices",
        },
      ]}
    />
  );
}