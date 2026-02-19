import { User, PortfolioItem, Service, ClientWork } from './types';

export const USERS: User[] = [
  {
    id: '1',
    name: 'Денис Фотограф',
    email: 'admin@example.com',
    role: 'ADMIN',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    name: 'Анна Клиент',
    email: 'client@example.com',
    role: 'CLIENT',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Вечерняя прогулка',
    category: 'Портрет',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
    description: 'Атмосферная портретная съемка на закате в центре города.'
  },
  {
    id: '2',
    title: 'Свадьба Елены и Игоря',
    category: 'Свадьба',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    description: 'Трогательная церемония в загородном клубе.'
  },
  {
    id: '3',
    title: 'Семейный пикник',
    category: 'Семья',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000',
    description: 'Теплые моменты семейного отдыха.'
  },
  {
    id: '4',
    title: 'Бизнес портрет CEO',
    category: 'Бизнес',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    description: 'Строгий стиль для публикации в Forbes.'
  },
  {
    id: '5',
    title: 'Love Story в горах',
    category: 'Свадьба',
    imageUrl: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1000',
    description: 'Романтическая предсвадебная съемка.'
  },
  {
    id: '6',
    title: 'Студийный минимализм',
    category: 'Портрет',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1000',
    description: 'Игра света и тени в студии.'
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Портрет',
    price: '15 000 ₽',
    features: ['1 час съемки', '20 фото в ретуши', 'Онлайн галерея', 'Помощь в позировании'],
    isPopular: false,
  },
  {
    id: '2',
    title: 'Свадебный день',
    price: '65 000 ₽',
    features: ['8 часов съемки', '300+ фото в цветокоррекции', '50 фото в ретуши', 'Анонс через 2 дня', 'Флешка в деревянном боксе'],
    isPopular: true,
  },
  {
    id: '3',
    title: 'Love Story',
    price: '20 000 ₽',
    features: ['2 часа съемки', '40 фото в ретуши', 'Помощь с подбором локации', 'Смена 2-х образов'],
    isPopular: false,
  },
];

export const CLIENT_WORKS: ClientWork[] = [
  {
    id: '101',
    userId: '2',
    title: 'Съемка в студии Lumiere',
    date: '12.10.2023',
    location: 'Москва, Студия Lumiere',
    previewUrl: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd552?auto=format&fit=crop&q=80&w=1000',
    downloadUrl: '#',
    status: 'Оплачено',
    imageCount: 45
  },
  {
    id: '102',
    userId: '2',
    title: 'Осенняя прогулка',
    date: '25.09.2023',
    location: 'Парк Горького',
    previewUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1000',
    downloadUrl: '#',
    status: 'Оплачено',
    imageCount: 20
  }
];
