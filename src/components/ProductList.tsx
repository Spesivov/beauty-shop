import Product from '../types/Product.tsx'
import StoreProduct from './StoreProduct.tsx'

export const ProductList: React.FC<Product[]> = (products) => {
    return (
        <div>
            {products.map(product => {
                return (
                    <article>
                        <StoreProduct key={product.id} product={product}></StoreProduct>
                    </article>
                )
            })}
        </div>
    )
}