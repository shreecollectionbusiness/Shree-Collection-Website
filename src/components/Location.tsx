import { MapPin, Clock, Phone } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4" style={{ color: '#19a3c8' }}>
            Visit Our Boutique
          </h2>
          <p className="font-['Lato'] text-lg text-gray-600 max-w-2xl mx-auto">
            Come experience our elegant collection in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Store Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#d5739d20' }}>
                  <MapPin size={24} style={{ color: '#d5739d' }} />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl mb-2" style={{ color: '#19a3c8' }}>
                    Address
                  </h3>
                  <p className="font-['Lato'] text-gray-600">
                    Old Avas Vikas, near Dashmesh Sweets,<br />
                    Kashipur, Uttarakhand 244713
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#19a3c820' }}>
                  <Clock size={24} style={{ color: '#19a3c8' }} />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl mb-2" style={{ color: '#19a3c8' }}>
                    Store Hours
                  </h3>
                  <p className="font-['Lato'] text-gray-600">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#d5739d20' }}>
                  <Phone size={24} style={{ color: '#d5739d' }} />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl mb-2" style={{ color: '#19a3c8' }}>
                    Contact
                  </h3>
                  <p className="font-['Lato'] text-gray-600">
                    Phone: +91-9012929558<br />
                    Email: <a href="mailto:shreecollection.business@gmail.com">shreecollection.business@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13930.442881209361!2d78.9462219871582!3d29.2055857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a438d9fd94a35%3A0x84c248264e4e2635!2sShree%20Collection!5e0!3m2!1sen!2sin!4v1770486797124!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
