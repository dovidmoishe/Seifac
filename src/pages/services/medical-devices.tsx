import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const MedicalDevicesContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Medical Devices & Disposables</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        Seifac is a trusted provider of high-quality medical devices and disposables for healthcare 
        facilities across Nigeria. We partner with globally recognized manufacturers to deliver 
        reliable, innovative products that meet international standards and enhance patient care.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <Card className="p-6 shadow-md border-green-100 h-full">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Diagnostic Equipment</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Ultrasound Machines</strong> - Portable and stationary options</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>ECG Devices</strong> - 3/6/12-channel configurations</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Patient Monitors</strong> - Vital signs monitoring systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Blood Pressure Monitors</strong> - Digital and manual options</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Glucometers</strong> - Blood glucose monitoring systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Pulse Oximeters</strong> - For oxygen saturation measurement</span>
          </li>
        </ul>
      </Card>
      
      <Card className="p-6 shadow-md border-green-100 h-full">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Surgical & Procedural Equipment</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Surgical Instruments</strong> - Complete sets and individual tools</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Sterilization Equipment</strong> - Autoclaves and sterilizers</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Examination Lights</strong> - LED and halogen options</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Suction Machines</strong> - Electric and manual devices</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Infusion Pumps</strong> - For accurate medication delivery</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span><strong>Electrosurgical Units</strong> - Complete systems with accessories</span>
          </li>
        </ul>
      </Card>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Medical Disposables</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-sm border-0 bg-white">
          <h4 className="text-xl font-semibold text-green-700 mb-3">Infection Control</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Surgical masks & respirators</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Examination gloves</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Hand sanitizers & disinfectants</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Isolation gowns</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Face shields & goggles</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-sm border-0 bg-white">
          <h4 className="text-xl font-semibold text-green-700 mb-3">Wound Care</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Bandages & dressings</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Adhesive tapes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Gauze swabs & pads</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Wound cleaning solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Advanced wound care products</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-sm border-0 bg-white">
          <h4 className="text-xl font-semibold text-green-700 mb-3">General Supplies</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Syringes & needles</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>IV sets & catheters</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Urine bags & containers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Surgical sutures</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Blood collection tubes</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    
    <div className="my-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Equipment & Device Features</h3>
          <Card className="p-6 shadow-md border-green-100 h-full">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Certified Quality</h4>
                  <p className="text-sm text-gray-600">All medical devices are CE/FDA approved and meet international quality standards</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Warranty Coverage</h4>
                  <p className="text-sm text-gray-600">Comprehensive warranty options with extended coverage available</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Training & Support</h4>
                  <p className="text-sm text-gray-600">On-site training for medical staff on proper equipment usage and maintenance</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-700">Service & Maintenance</h4>
                  <p className="text-sm text-gray-600">Regular maintenance plans and prompt technical support</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="md:w-1/2">
          <Image 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" 
            alt="Medical equipment in a hospital setting"
            width={500}
            height={400}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Healthcare Solution Provider</h4>
            <p className="text-sm text-gray-600">
              Seifac is more than just a supplier - we&apos;re your healthcare partner. We understand the 
              unique challenges faced by medical facilities in Nigeria and provide comprehensive 
              solutions tailored to your specific needs and budget constraints.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🏥</div>
          <h4 className="text-lg font-semibold mb-2">Hospital Outfitting</h4>
          <p className="text-xs text-gray-600">
            Complete equipment solutions for new and expanding healthcare facilities
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">🔧</div>
          <h4 className="text-lg font-semibold mb-2">Equipment Maintenance</h4>
          <p className="text-xs text-gray-600">
            Regular service and maintenance to ensure optimal equipment performance
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">👨‍⚕️</div>
          <h4 className="text-lg font-semibold mb-2">Staff Training</h4>
          <p className="text-xs text-gray-600">
            Comprehensive training on proper equipment usage and care
          </p>
        </Card>
        
        <Card className="p-6 shadow-md text-center border-t-4 border-t-green-500">
          <div className="text-4xl mb-4 text-green-500">📦</div>
          <h4 className="text-lg font-semibold mb-2">Supply Chain Management</h4>
          <p className="text-xs text-gray-600">
            Regular delivery of disposables and consumables to maintain inventory
          </p>
        </Card>
      </div>
    </div>
    
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Facilities We Serve</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          {icon: "🏥", name: "Hospitals"},
          {icon: "🏫", name: "Clinics"},
          {icon: "🦷", name: "Dental Offices"},
          {icon: "👁️", name: "Optometry Centers"},
          {icon: "💉", name: "Laboratories"},
          {icon: "👨‍⚕️", name: "Private Practices"},
          {icon: "🚑", name: "Emergency Services"},
          {icon: "👵", name: "Nursing Homes"},
          {icon: "🏠", name: "Home Healthcare"},
          {icon: "💊", name: "Pharmacies"},
          {icon: "🧠", name: "Mental Health Facilities"},
          {icon: "👶", name: "Maternity Centers"}
        ].map((facility, index) => (
          <Card key={index} className="p-4 shadow-sm border-0 text-center">
            <div className="text-3xl mb-2">{facility.icon}</div>
            <h4 className="font-medium text-xs text-gray-700">{facility.name}</h4>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default function MedicalDevices() {
  return (
    <ServicePage
      title="Medical Devices & Disposables"
      description="High-quality medical equipment and supplies for healthcare facilities across Nigeria"
      heroImage="https://images.unsplash.com/photo-1631815588090-d1bcbe9a8545?q=80&w=1920&auto=format&fit=crop"
      icon="🏥"
      content={<MedicalDevicesContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "medical@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Request Equipment Catalog",
        link: "/contact",
      }}
      relatedServices={[
        {
          id: 1,
          title: "Disposable Products",
          link: "/services/disposable-products",
        },
        {
          id: 2,
          title: "Farm Management",
          link: "/services/farm-management",
        },
      ]}
    />
  );
}