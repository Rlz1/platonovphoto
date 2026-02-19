import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { CLIENT_WORKS } from '../mockDb';
import { ClientWork } from '../types';
import { X, Download, Calendar, MapPin, CreditCard } from 'lucide-react';

export const ClientProfile = () => {
  const { user } = useAuth();
  const [selectedWork, setSelectedWork] = useState<ClientWork | null>(null);

  if (!user) return <div className="text-center py-20">Пожалуйста, войдите в систему.</div>;

  const myWorks = CLIENT_WORKS.filter(w => w.userId === user.id);

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-12 fade-in">
          <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-2 border-white shadow-md" />
          <div>
            <h1 className="text-3xl font-serif text-stone-900">Добрый день, {user.name.split(' ')[0]}</h1>
            <p className="text-stone-500">Ваши персональные галереи</p>
          </div>
        </div>

        {myWorks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm text-stone-500">
            У вас пока нет доступных съемок.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myWorks.map((work, index) => (
              <div 
                key={work.id}
                onClick={() => setSelectedWork(work)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={work.previewUrl} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-stone-900 group-hover:text-terracotta-600 transition-colors">{work.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${work.status === 'Оплачено' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {work.status}
                    </span>
                  </div>
                  <div className="text-sm text-stone-500 flex items-center mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {work.date}
                  </div>
                  <div className="text-xs font-medium text-stone-400 uppercase tracking-wide">
                    {work.imageCount} фотографий
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            onClick={() => setSelectedWork(null)}
          ></div>
          <div className="relative bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row slide-up">
            <button 
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 md:left-4 md:top-4 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 md:text-stone-900 md:bg-white md:shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="md:w-3/5 h-64 md:h-auto bg-stone-200">
              <img 
                src={selectedWork.previewUrl} 
                alt={selectedWork.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col justify-between bg-stone-50">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">{selectedWork.title}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-terracotta-600">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-widest">Дата</p>
                      <p className="text-lg text-stone-800 font-medium">{selectedWork.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-terracotta-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-widest">Локация</p>
                      <p className="text-lg text-stone-800 font-medium">{selectedWork.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-terracotta-600">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-widest">Статус оплаты</p>
                      <p className="text-lg text-stone-800 font-medium">{selectedWork.status}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-stone-500 mb-4">
                   В галерее доступно {selectedWork.imageCount} фото. Вы можете скачать их в полном разрешении.
                </p>
                <button className="w-full flex items-center justify-center py-4 bg-stone-900 text-white rounded-xl hover:bg-terracotta-600 transition-colors font-medium shadow-lg">
                  <Download className="h-5 w-5 mr-2" />
                  Скачать оригинал
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
