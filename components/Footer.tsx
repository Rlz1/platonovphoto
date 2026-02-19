import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl text-stone-100 block mb-2">Denis<span className="text-terracotta-600">.</span>Ph</span>
            <p className="text-sm">Запечатлевая моменты, создавая историю.</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="hover:text-terracotta-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-terracotta-600 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-terracotta-600 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>

          <div className="text-sm text-stone-500">
            © {new Date().getFullYear()} Denis Photography. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
