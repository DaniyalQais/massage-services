
export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  location: string;
}

export interface NavLink {
  name: string;
  href: string;
}
