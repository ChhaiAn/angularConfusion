import { Comment } from './comment'

export class Dish {
  id: number;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  comments: Comment[];
  label: string;
  price: string;
  description: string;
}

