import { v4 as uuidv4 } from 'uuid';

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  export const generateUUID = () => {
      const id = uuidv4();
      console.log(id);
      return id;
  };