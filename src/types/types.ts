export interface TProducts {
    _id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    image: string;
  }
  
  export type TCategoryInitialState = {
    category: string | null;
  };
  
  export type TFiltersInitialState = {
    searchTerm: string | null;
    categories: string[];
    sort: string | null;
  };
  
  interface ICartItem extends TProducts {
    quantity: number;
  }
  
  export type TCartInitialState = {
    items: ICartItem[];
  };



  // product details page type
export type TEmployee={
  name: string,
  role: string,
  image:string,
  socialLinks: {
    facebook: string
    twitter: string
    instagram: string
  }
}
export type TTestimonial={
    name: string,
    feedback: string,
    image:string,
    date: string
    rating: string
    _id: string
  }
  