export type Role = 'ADMIN' | 'CLIENT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Свадьба' | 'Портрет' | 'Семья' | 'Бизнес';
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ClientWork {
  id: string;
  userId: string;
  title: string;
  date: string;
  location: string;
  previewUrl: string;
  downloadUrl: string;
  status: 'Оплачено' | 'Ожидает оплаты';
  imageCount: number;
}
