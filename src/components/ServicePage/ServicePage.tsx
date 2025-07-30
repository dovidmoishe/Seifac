import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface ServicePageProps {
  title: string;
  description: string;
  heroImage: string;
  icon: string;
  content: React.ReactNode;
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
    social?: string;
  };
  callToAction?: {
    text: string;
    link: string;
  };
  relatedServices?: Array<{
    id: number;
    title: string;
    link: string;
  }>;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  heroImage,
  icon,
  content,
  contactInfo = {},
  callToAction,
  relatedServices = [],
}) => {
  const { phone = '+2348132385944', email = 'info@seifac.ng', website = 'www.seifac.ng', social = '@SeifacGlobal' } = contactInfo;

  return (
    <>
      <NextSeo
        title={`${title} | Seifac`}
        description={description}
        openGraph={{
          title: `${title} | Seifac`,
          description: description,
          images: [{ url: heroImage, width: 1200, height: 630, alt: title }],
        }}
      />

      {/* Hero Section */}
      <div className="relative h-[30rem] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{icon}</span>
                <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
              </div>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl">{description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {content}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {callToAction && (
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="border-none bg-gradient-to-r from-green-500/90 to-green-600/90 p-8 shadow-lg text-white">
                <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-white/90">
                  Take the next step toward optimizing your business with our solutions.
                </p>
                <Link 
                  href={callToAction.link}
                  className="inline-block px-6 py-3 bg-white text-green-600 font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  {callToAction.text}
                </Link>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  Have questions about our {title.toLowerCase()} services? Our team is here to help you.
                </p>
                <div className="space-y-3">
                  {phone && (
                    <p className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">Phone/WhatsApp:</span> {phone}
                    </p>
                  )}
                  {email && (
                    <p className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">Email:</span> {email}
                    </p>
                  )}
                  {website && (
                    <p className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">Website:</span> {website}
                    </p>
                  )}
                  {social && (
                    <p className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">Follow us:</span> {social}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Seifac Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-8">Explore Other Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((service) => (
                  <Link 
                    key={service.id} 
                    href={service.link}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-md transition-all text-center"
                  >
                    <span className="text-green-600 font-medium">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServicePage;