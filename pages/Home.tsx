import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Camera, User, Heart } from 'lucide-react';
import { PORTFOLIO } from '../mockDb';

export const Home = () => {
  const featuredWorks = PORTFOLIO.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        >
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-white slide-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
            Искусство видеть <br />
            <span className="italic font-light text-stone-200">настоящее</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-100 max-w-lg mb-10 font-light tracking-wide">
            Профессиональная фотография, которая рассказывает вашу уникальную историю через свет, эмоции и детали.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/portfolio" 
              className="px-8 py-4 bg-terracotta-600 text-white rounded-full hover:bg-terracotta-700 transition-all duration-300 font-medium text-center shadow-lg hover:shadow-terracotta-600/30"
            >
              Смотреть портфолио
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 font-medium text-center"
            >
              Связаться со мной
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-stone-900 mb-2">Избранные работы</h2>
            <p className="text-stone-500">Лучшие моменты этого месяца</p>
          </div>
          <Link to="/portfolio" className="hidden md:flex items-center text-terracotta-600 hover:text-terracotta-700 transition-colors">
            Все работы <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer shadow-md">
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-terracotta-500 text-xs font-medium uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {work.category}
                </span>
                <h3 className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/portfolio" className="inline-flex items-center text-terracotta-600 font-medium">
             Все работы <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-stone-200 rounded-full flex items-center justify-center text-stone-900 mb-6 group-hover:bg-terracotta-100 group-hover:text-terracotta-600 transition-colors mx-auto md:mx-0">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-stone-900">Индивидуальный подход</h3>
              <p className="text-stone-600 leading-relaxed">
                Я не просто делаю снимки, я создаю историю о вас. Каждая съемка планируется детально, учитывая ваши пожелания и характер.
              </p>
            </div>
            
            <div className="text-center md:text-left group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-stone-200 rounded-full flex items-center justify-center text-stone-900 mb-6 group-hover:bg-terracotta-100 group-hover:text-terracotta-600 transition-colors mx-auto md:mx-0">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-stone-900">Топовое оборудование</h3>
              <p className="text-stone-600 leading-relaxed">
                Использую новейшие камеры и светосильную оптику, чтобы гарантировать качество журнального уровня в любых условиях.
              </p>
            </div>

            <div className="text-center md:text-left group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-stone-200 rounded-full flex items-center justify-center text-stone-900 mb-6 group-hover:bg-terracotta-100 group-hover:text-terracotta-600 transition-colors mx-auto md:mx-0">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-stone-900">Душевный комфорт</h3>
              <p className="text-stone-600 leading-relaxed">
                Помогаю расслабиться перед камерой. Даже если вы снимаетесь впервые, вы будете чувствовать себя уверенно.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
