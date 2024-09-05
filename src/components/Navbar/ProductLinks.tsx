import { UUID } from "crypto"

type ProductLink = {
  id: UUID,
  text: string,
  url: string
}

export const links: ProductLink [] = [
  {
    id: crypto.randomUUID(),
    text: 'home',
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    text: 'about',
    url: '/about',
  },
  {
    id: crypto.randomUUID(),
    text: 'store',
    url: '/store',
  }
]