import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <h3 className="font-['Playfair_Display'] text-2xl" style={{ color: '#d5739d' }}>
            Shree Collection
          </h3>
        </div>
        
        <p className="font-['Lato'] text-gray-600 mb-2">
          Your destination for elegant women's fashion
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <span className="font-['Lato'] text-sm">Made with</span>
          <Heart size={16} fill="#d5739d" style={{ color: '#d5739d' }} />
          <span className="font-['Lato'] text-sm">for fashion lovers</span>
        </div>
        
        <p className="font-['Lato'] text-sm text-gray-400 mt-4">
          © 2016 Shree Collection. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
