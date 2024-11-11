type Product = {
    image?: string,
    price: number,
    title: string,
    slug?: string
    id: string,
    description: string,
    rating: Rating,
    count: number
    category: string
}

type Rating = {
    rate: number
    count: number
}

export default Product