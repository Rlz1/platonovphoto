import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { useAuth } from '../AuthContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const NavLink = ({ to, children }: { to: string; children?: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setIsMenuOpen(false)}
        className={`text-sm tracking-wide transition-colors duration-300 ${
          isActive ? 'text-terracotta-600 font-medium' : 'text-stone-600 hover:text-stone-900'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Camera className="h-6 w-6 text-terracotta-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-serif text-2xl font-medium text-stone-900 tracking-tight">
              Denis<span className="text-terracotta-600">.</span>Ph
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/portfolio">Портфолио</NavLink>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/about">Обо мне</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
          </nav>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to={user.role === 'ADMIN' ? '/admin' : '/profile'}
                  className="text-stone-900 hover:text-terracotta-600 transition-colors font-medium text-sm"
                >
                  {user.role === 'ADMIN' ? 'Админ-панель' : 'Кабинет'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-stone-500 hover:text-stone-900 text-sm"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-full bg-stone-900 text-stone-50 text-sm hover:bg-terracotta-600 transition-all duration-300 shadow-lg shadow-stone-200"
              >
                Войти
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-900 hover:text-terracotta-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 absolute w-full h-screen">
          <div className="px-4 pt-4 pb-12 space-y-6 flex flex-col items-center justify-center h-3/4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Главная</Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Портфолио</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Услуги</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Обо мне</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Контакты</Link>
            
            <div className="pt-8 w-full px-8">
              {user ? (
                <div className="flex flex-col space-y-4">
                  <Link 
                    to={user.role === 'ADMIN' ? '/admin' : '/profile'}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center py-3 rounded-xl border border-stone-900 text-stone-900"
                  >
                    {user.role === 'ADMIN' ? 'Админ-панель' : 'Мой Кабинет'}
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-stone-500"
                  >
                    Выйти
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-xl bg-stone-900 text-white shadow-lg"
                >
                  Войти
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};