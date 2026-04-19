export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Bakery' | 'Fast Food' | 'Pizza' | 'Chinese' | 'Beverages';
  isVeg: boolean;
  image?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
