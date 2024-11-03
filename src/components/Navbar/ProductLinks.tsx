import { UUID } from "crypto"

interface IProductLink {
  id: UUID,
  text: string,
  url: string
}

export const ProductLinks: IProductLink[] = [
  {
    id: crypto.randomUUID(),
    text: 'home',
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    text: 'store',
    url: '/store',
  },
  {
    id: crypto.randomUUID(),
    text: 'about',
    url: '/about',
  }
]