import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { ProductsProvider } from './context/Product_Context';
import { FilterProvider } from './context/Filter_Context';
import { CartProvider } from './context/Cart_Context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </StrictMode>
);