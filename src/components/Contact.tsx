import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      color: '#d5739d',
      url: 'https://www.instagram.com/shree.collection78/',
      handle: '@shree.collection78',
      description: 'Follow us for daily style inspiration'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: '#19a3c8',
      url: 'https://wa.me/9012929558',
      handle: '+91-9012929558',
      description: 'Chat with us directly'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4" style={{ color: '#19a3c8' }}>
            Connect With Us
          </h2>
          <p className="font-['Lato'] text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to us on social media to place orders, ask questions, or stay updated with our latest collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-current text-center"
                  style={{ color: social.color }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={40} />
                    </div>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl mb-2">
                    {social.name}
                  </h3>
                  <p className="font-['Lato'] mb-2">
                    {social.handle}
                  </p>
                  <p className="font-['Lato'] text-sm text-gray-600">
                    {social.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9' }}>
            <p className="font-['Lato'] text-lg mb-2 text-gray-700">
              📍 Visit Our Store
            </p>
            <p className="font-['Lato'] text-gray-600">
              Experience our collection in person at our boutique
            </p>
            <button
              onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg font-['Lato'] cursor-pointer"
              style={{ 
                backgroundColor: '#19a3c8',
                color: 'white'
              }}
            >
              View Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}