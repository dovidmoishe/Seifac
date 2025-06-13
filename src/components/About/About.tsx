import Image from "next/image";
import React from "react";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = "" }) => {
  return (
    <section
      className={`container mx-auto px-6 py-16 ${className}`}
      aria-labelledby="about-heading"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md">
          <Image
            src="https://images.unsplash.com/photo-1659262673818-d7b419542d16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern industrial facility showcasing Seifac's manufacturing capabilities"
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2
              id="about-heading"
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Welcome to{" "}
              <span className="text-green-400 bg-gradient-to-r from-green-200 to-green-300 bg-clip-text">
                Seifac
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-green-200 to-green-400 rounded-full" />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg font-medium">
              We are a manufacturer, supplier, exporter & importer of wide range
              of Cotton & Nylon yarns, Electrical Transformers & Switch gears,
              Aluminum foil & bottles, Tiles & Bathroom fittings and Disposable
              PP & PS products.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-6 italic text-gray-600 bg-gray-50 p-4 rounded-r-lg">
            &quot;7seas Impex works by the principle that is dedicated its resource
              and capabilities towards keeping its customer ahead by being a
              reliable & punctual supplier & transshipment partner.&quot;
            </blockquote>

            <p>
              We are committed to delivering value for money to our global
              customers. We strive to realize this everyday by setting highest
              standards of products, services, reliability, safety, and cost
              effectiveness in our industry.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Learn More
            </button>
            <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
