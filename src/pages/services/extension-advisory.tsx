import React from 'react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const ExtensionAdvisoryContent = () => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Empowering Farmers Through Knowledge and Innovation</h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        At Seifac, our Extension & Advisory Services play a crucial role in advancing modern
        agriculture by bridging the gap between research, innovation, and practical on-farm
        applications. We provide timely, tailored, and evidence-based support to farmers,
        cooperatives, and agribusinesses, ensuring they have the knowledge, tools, and
        confidence to improve productivity, income, and sustainability.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <Card className="p-6 shadow-md border-green-100">
        <h3 className="text-xl font-semibold text-green-700 mb-4">What We Offer</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Field-based farmer training and capacity building</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>On-site and remote agronomic support</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Guidance on best practices for crop and livestock production</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Farm business planning and enterprise development</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Climate-smart agriculture education</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Integrated pest and disease management advisory</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Soil testing and fertilizer recommendation services</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Mobile and digital advisory via WhatsApp, SMS, and voice calls</span>
          </li>
        </ul>
      </Card>
      
      <Card className="p-6 shadow-md border-green-100">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Our Delivery Approach</h3>
        <p className="text-gray-700 mb-4">
          We combine traditional extension models with digital technologies to reach farmers in
          both remote and urban areas. Our delivery methods include:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Farmer Field Schools (FFS)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Demonstration plots</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Group workshops and seminars</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>One-on-one farm visits</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Mobile advisory and e-extension platforms</span>
          </li>
        </ul>
      </Card>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Serve</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Smallholder and large-scale farmers</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Youth and women in agriculture</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Farmer cooperatives and associations</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>NGOs and development agencies</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Agribusinesses and agro-dealers</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Government extension networks</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Seifac Extension Services?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Locally adapted, research-backed advisory</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Experienced team of agronomists and field officers</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Use of digital tools for wide and fast outreach</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Continuous monitoring and feedback systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Strong linkages to markets, finance, and inputs</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="bg-green-50 p-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <Image 
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop" 
            alt="Farmers receiving training"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Impact</h3>
          <p className="text-gray-700 mb-4">
            Through our extension and advisory services, we&apos;ve helped:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Over 10,000 farmers adopt improved agricultural practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Increase crop yields by an average of 35% for participating farmers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Reduce post-harvest losses by up to 40% through better handling techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Connect smallholder farmers to premium markets and value chains</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="text-center my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch With Us</h3>
      <p className="text-gray-700 mb-4">
        Let us help you or your farmer group access the right information at the right time.
      </p>
    </div>
  </div>
);

export default function ExtensionAdvisory() {
  return (
    <ServicePage
      title="Extension & Advisory Services"
      description="Empowering farmers with knowledge, training, and support to improve productivity and sustainability"
      heroImage="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1920&auto=format&fit=crop"
      icon="👨‍🌾"
      content={<ExtensionAdvisoryContent />}
      contactInfo={{
        phone: "+2348132385944",
        email: "extension@seifac.ng",
        website: "www.seifac.ng",
      }}
      callToAction={{
        text: "Request Advisory Services",
        link: "/contact",
      }}
      relatedServices={[
        {
          id: 1,
          title: "Farm ERP",
          link: "/services/farm-erp",
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