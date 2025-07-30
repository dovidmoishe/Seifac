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
            src="/images/frame.jpg"
            alt="Seifac - Empowering Innovation"
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
              Seifac is an agricultural-focused enterprise that leads in Farm ERP, Extension Advisory,{" "}
              and Farm Management services across Nigeria. While agriculture is our core strength,{" "}
              we also deliver quality products and services in healthcare, technology,{" "}
              lifestyle, and beauty sectors.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-6 italic text-gray-600 bg-gray-50 p-4 rounded-r-lg">
              &quot;Our agricultural solutions empower farmers with cutting-edge Farm ERP tools, expert advisory services,{" "}
              and professional farm management - revolutionizing farming practices while driving sustainable growth{" "}
              and productivity.&quot;
            </blockquote>

            <p>
              Our agricultural division spearheads our operations, while our supplementary divisions include Medical Devices,{" "}
              Tech Products, Hair Extensions, Wine Importation, Bathroom Fittings, and Disposable Supplies—each designed to meet
              the evolving needs of individuals, institutions, and governments.
            </p>

            <p>
              Whether it&lsquo;s traceable farm operations, imported sanitary wares, private label hair
              extensions, or FDA-compliant disposables, Seifac brings global standards to the local
              market—backed by logistics, partnerships, and end-to-end quality control.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-wrap gap-4 pt-4">
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
