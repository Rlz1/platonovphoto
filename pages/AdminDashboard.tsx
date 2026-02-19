import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { PORTFOLIO } from '../mockDb';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LayoutDashboard, Image, Users, Plus, Trash2 } from 'lucide-react';

export const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'portfolio'>('dashboard');
  const [items, setItems] = useState(PORTFOLIO);

  if (!user || user.role !== 'ADMIN') return <div className="text-center py-20">Доступ запрещен</div>;

  const data = [
    { name: 'Пн', visits: 400 },
    { name: 'Вт', visits: 300 },
    { name: 'Ср', visits: 550 },
    { name: 'Чт', visits: 450 },
    { name: 'Пт', visits: 600 },
    { name: 'Сб', visits: 800 },
    { name: 'Вс', visits: 750 },
  ];

  const handleDelete = (id: string) => {
    if(confirm('Удалить эту работу?')) {
        setItems(items.filter(i => i.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-stone-900 text-stone-300 hidden md:flex flex-col p-6">
        <div className="text-2xl font-serif text-white mb-10">Admin Panel</div>
        <nav className="space-y-4">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-colors ${activeTab === 'dashboard' ? 'bg-terracotta-600 text-white' : 'hover:bg-stone-800'}`}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Дашборд</span>
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-colors ${activeTab === 'portfolio' ? 'bg-terracotta-600 text-white' : 'hover:bg-stone-800'}`}
          >
            <Image className="h-5 w-5" />
            <span>Портфолио</span>
          </button>
          <div className="pt-8 border-t border-stone-800 mt-4">
            <div className="flex items-center space-x-3 p-3">
               <Users className="h-5 w-5" />
               <span>Клиенты</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' ? (
          <div className="fade-in">
            <h2 className="text-3xl font-serif text-stone-900 mb-8">Обзор статистики</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="text-sm text-stone-500 uppercase tracking-wide mb-1">Всего просмотров</div>
                <div className="text-3xl font-bold text-stone-900">12,450</div>
                <div className="text-xs text-green-600 mt-2">+12% с прошлой недели</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="text-sm text-stone-500 uppercase tracking-wide mb-1">Заявок</div>
                <div className="text-3xl font-bold text-stone-900">45</div>
                <div className="text-xs text-green-600 mt-2">5 новых сегодня</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="text-sm text-stone-500 uppercase tracking-wide mb-1">Работ в портфолио</div>
                <div className="text-3xl font-bold text-stone-900">{items.length}</div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 h-96">
              <h3 className="text-lg font-medium text-stone-900 mb-6">Посещаемость сайта</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#78716c'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c'}} />
                  <Tooltip 
                    cursor={{fill: '#f5f5f4'}} 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} 
                  />
                  <Bar dataKey="visits" fill="#9a4b37" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="fade-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif text-stone-900">Управление портфолио</h2>
              <button className="flex items-center space-x-2 bg-stone-900 text-white px-5 py-2.5 rounded-xl hover:bg-terracotta-600 transition-colors shadow-lg">
                <Plus className="h-5 w-5" />
                <span>Добавить</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
              <table className="min-w-full divide-y divide-stone-200">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Фото</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Название</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Категория</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-stone-500 uppercase tracking-wider">Действия</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-stone-200">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img className="h-12 w-12 rounded-lg object-cover" src={item.imageUrl} alt="" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-stone-900">{item.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-stone-100 text-stone-800">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
