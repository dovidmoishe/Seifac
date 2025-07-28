import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

const MapComponent: React.FC<{ className: string }> = ({
  className,
}: {
  className: string;
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }} className={className}>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus`}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "0.75rem" }}
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
    <section className="py-16 bg-gradient-to-b from-white to-green-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-green-600">Us</span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-green-300 to-green-600 rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Our team is here to help you.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Information */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100">
                <div className="flex items-center mb-8">
                  <Image
                    src="/logo.png"
                    alt="Seifac Logo"
                    width={80}
                    height={80}
                    className="mr-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800">Seifac</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 bg-white p-2 rounded-full mr-4 shadow-sm">
                      <FaMapMarkerAlt className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        FCT, Abuja <br />
                        Nigeria
                      </p>
                    </div>
                  </div> 

                  <div className="flex items-start">
                    <div className="mt-1 bg-white p-2 rounded-full mr-4 shadow-sm">
                      <FaPhoneAlt className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+2348132385944</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-white p-2 rounded-full mr-4 shadow-sm">
                      <FaEnvelope className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">disposables@seifac.ng</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-white p-2 rounded-full mr-4 shadow-sm">
                      <FaGlobe className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Website</h4>
                      <p className="text-gray-600">www.seifac.ng</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-3">Follow Us</h4>
                  <div className="flex space-x-3">
                    {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="@SeifacDisposable"
                        className="bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="text-green-600" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="shadow-lg border-0 overflow-hidden h-[400px]">
              <MapComponent className="h-full w-full" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
