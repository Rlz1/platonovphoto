import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { Camera } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email)) {
      if (email === 'admin@example.com') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } else {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8 fade-in">
        <div className="mx-auto h-12 w-12 text-terracotta-600 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
          <Camera className="h-7 w-7" />
        </div>
        <h2 className="text-3xl font-serif text-stone-900">
          С возвращением
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          Войдите в личный кабинет
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-stone-200/50">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-stone-300 rounded-xl shadow-sm placeholder-stone-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 sm:text-sm bg-stone-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700">
                Пароль
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-stone-300 rounded-xl shadow-sm placeholder-stone-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 sm:text-sm bg-stone-50"
                />
              </div>
            </div>

            {error && <div className="text-red-500 text-sm text-center">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-terracotta-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
              >
                Войти
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-stone-500">
                  Тестовый доступ
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => { setEmail('client@example.com'); setPassword('password'); }}
                className="w-full inline-flex justify-center py-2 px-4 border border-stone-300 rounded-xl shadow-sm bg-white text-xs font-medium text-stone-500 hover:bg-stone-50"
              >
                Клиент
              </button>
              <button
                onClick={() => { setEmail('admin@example.com'); setPassword('password'); }}
                className="w-full inline-flex justify-center py-2 px-4 border border-stone-300 rounded-xl shadow-sm bg-white text-xs font-medium text-stone-500 hover:bg-stone-50"
              >
                Админ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
