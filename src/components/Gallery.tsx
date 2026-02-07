import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1638717366457-dbcaf6b1afbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tZW4lMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzcwMzc1Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Elegant Fashion Collection"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1719613049107-1a8814dce0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHN1bW1lciUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzA0NzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Summer Dress Collection"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1756483502816-d7d3547980ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZvcm1hbCUyMG91dGZpdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcwNDc4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Formal Outfit Collection"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1767785829375-4678f57a4f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNhc3VhbCUyMHdlYXIlMjBzdHlsaXNofGVufDF8fHx8MTc3MDQ3ODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Casual Wear Collection"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1756483510840-b0dda5f0dd0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGV2ZW5pbmclMjBkcmVzcyUyMGNsYXNzeXxlbnwxfHx8fDE3NzA0NzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Evening Dress Collection"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600201319331-27d31ecd7850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJvdXRpcXVlJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzcwNDc4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Boutique Collection"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4" style={{ color: '#19a3c8' }}>
            Our Collection
          </h2>
          <p className="font-['Lato'] text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of elegant women's wear, perfect for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="font-['Lato'] text-white px-4 text-center">
                  {product.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-['Lato'] text-lg mb-4" style={{ color: '#d5739d' }}>
            Love what you see? Connect with us to place your order!
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg font-['Lato'] border-2 cursor-pointer"
            style={{ 
              borderColor: '#d5739d',
              color: '#d5739d'
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}