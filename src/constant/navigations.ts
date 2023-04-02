import { FiFileText } from 'react-icons/fi';

import { Navigation } from '@/types/navigate';

export const navigations: Navigation[] = [
  {
    name: 'Dashboard Admin',
    href: '/dashboard',
    exactMatch: true,
    icon: FiFileText,
  },
  {
    name: 'Buat Film',
    href: '/admin/create',
    exactMatch: true,
    icon: FiFileText,
  },
];
