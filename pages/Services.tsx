import { Check } from 'lucide-react';
import { SERVICES } from '../mockDb';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Услуги и цены</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых доплат. Выберите пакет, который подходит именно вам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 fade-in ${
                service.isPopular 
                  ? 'border-terracotta-200 shadow-xl scale-105 z-10' 
                  : 'border-stone-100 shadow-sm hover:shadow-lg mt-0 md:mt-8'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-terracotta-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                  Популярное
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-stone-900 mb-2">{service.title}</h3>
                <div className="text-4xl font-light text-terracotta-600 mb-2">{service.price}</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-stone-600 text-sm">
                    <Check className="h-5 w-5 text-terracotta-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className={`block w-full py-3 rounded-xl text-center font-medium transition-colors ${
                  service.isPopular
                    ? 'bg-stone-900 text-white hover:bg-terracotta-600'
                    : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                }`}
              >
                Забронировать
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
