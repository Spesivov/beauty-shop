import { generateUUID } from '../../utils/utils';

interface IProductLink {
  id: string,
  text: string,
  url: string
}

export const ProductLinks: IProductLink[] = [
  {
    id: generateUUID(),
    text: 'home',
    url: '/',
  },
  {
    id: generateUUID(),
    text: 'store',
    url: '/store',
  },
  {
    id: generateUUID(),
    text: 'about',
    url: '/about',
  }
]