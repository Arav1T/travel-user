export interface Listing {
  id: string;
  name: string;
  price: number;
  city: string;
  imageUrl?: string;
  rating?: number;
  available: boolean;
  availablets?: any;
  [key: string]: any;
}