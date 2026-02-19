import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceParam || 'Портрет',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 py-12 md:py-20">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row fade-in">
        
        {/* Left Side (Info) */}
        <div className="bg-stone-900 text-stone-100 p-10 md:p-14 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-4xl mb-6">Свяжитесь со мной</h2>
            <p className="text-stone-400 mb-12 font-light leading-relaxed">
              Готовы создать что-то прекрасное? Заполните форму или напишите мне напрямую. Я отвечу в течение 24 часов.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-stone-800 p-3 rounded-full">
                   <Phone className="h-5 w-5 text-terracotta-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Телефон</p>
                  <p className="font-medium text-lg">+7 (999) 000-00-00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-stone-800 p-3 rounded-full">
                   <Mail className="h-5 w-5 text-terracotta-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-medium text-lg">hello@denis.ph</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-stone-800 p-3 rounded-full">
                   <MapPin className="h-5 w-5 text-terracotta-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Студия</p>
                  <p className="font-medium text-lg">Москва, Арт-квартал</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 pt-8 border-t border-stone-800">
            <div className="flex space-x-4">
              <div className="w-2 h-2 rounded-full bg-terracotta-600"></div>
              <div className="w-2 h-2 rounded-full bg-stone-700"></div>
              <div className="w-2 h-2 rounded-full bg-stone-700"></div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-10 md:p-14 md:w-3/5 bg-white">
          {isSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 slide-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Send className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-3xl text-stone-900">Сообщение отправлено!</h3>
              <p className="text-stone-500 max-w-sm">Спасибо за заявку. Я свяжусь с вами в ближайшее время для обсуждения деталей.</p>
              <button 
                onClick={() => { setIsSent(false); setFormData({...formData, message: ''}); }}
                className="text-terracotta-600 font-medium hover:underline"
              >
                Отправить еще одно
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Ваше имя</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border-stone-200 focus:border-terracotta-500 focus:ring-terracotta-500 outline-none transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border-stone-200 focus:border-terracotta-500 focus:ring-terracotta-500 outline-none transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Интересующая услуга</label>
                <select 
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border-stone-200 focus:border-terracotta-500 focus:ring-terracotta-500 outline-none transition-all"
                >
                  <option>Портрет</option>
                  <option>Свадебный день</option>
                  <option>Love Story</option>
                  <option>Бизнес съемка</option>
                  <option>Семейная съемка</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Сообщение</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border-stone-200 focus:border-terracotta-500 focus:ring-terracotta-500 outline-none transition-all resize-none"
                  placeholder="Расскажите немного о ваших пожеланиях..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-terracotta-600 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : 'Отправить'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
