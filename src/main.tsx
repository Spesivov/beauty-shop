import { createRoot } from 'react-dom/client';
import App from './App';
import { ProductsProvider } from './context/Product_Context';
import { FilterProvider } from './context/Filter_Context';
import { CartProvider } from './context/Cart_Context';

createRoot(document.getElementById('root')!).render(
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
);