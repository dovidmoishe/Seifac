import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MapComponent: React.FC<{ className: string }> = ({
  className,
}: {
  className: string;
}) => {

  return (
    <div style={{ width: "100%", height: "400px" }} className={className}>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2
          id="about-heading"
          className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center"
        >
          Contact Us
        </h2>

        <div className="  w-20 h-1 bg-gradient-to-r from-green-200 to-green-400 rounded-full" />
      </div>

      <Card className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row  p-3">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <p>
              7Seas Impex, 316-Shree Mahalaxmi Complex, Opp. Saint Mary&apos;s High
              School, Kalawad Road, Rajkot - 360001 Gujarat, INDIA
            </p>
            <p className="flex flex-col items-center">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                <span className="mt-2">Phone: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <span>Email: ozerlihashem@gmail.com </span>
              </div>
            </p>
          </div>

          <MapComponent className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/2 h-96" />
        </div>
      </Card>
    </div>
  );
};

export default Contact;
