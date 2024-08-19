export interface GamePreviewCardProps {
  name: string;
  src: string;
  price: string;
  platforms: any[];
  width?: string;
  height?: string;
  isCustom?: boolean;
  isFirst?: boolean;
  href: string;
}

export interface RandomGame {
  slug: string;
}

export interface GameCardHome {
  released: string;
  id: number;
  background_image: string;
  name: string;
  price: string;
  genres: {
    name: string;
  }[];
  platforms: {
    platform: {
      name: string;
      slug: string;
    };
  }[];
  rating: number;
  slug: string;
}

export interface Game {
  released: string;
  id: number;
  background_image: string;
  name: string;
  website: string;
  price: string;
  metacritic: number;
  genres: {
    name: string;
  }[];
  platforms: {
    platform: {
      name: string;
      slug: string;
    };
  }[];
  developers: {
    name: string;
  }[];
  esrb_rating: {
    name: string;
  };
  publishers: {
    name: string;
  }[];
  ratings: {
    id: number;
    count: number;
    percent: number;
    title: string;
  }[];
  rating: number;
  slug: string;
  description_raw: string;
  short_screenshots: {
    id: number;
    image: string;
  }[];
  tags: {
    id: number;
    name: string;
  }[];
  stores: {
    store: {
      domain: string;
      name: string;
      slug: string;
    };
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  games: {
    id: number;
    name: string;
    price: string;
    slug: string;
  }[];
  wishlist: {
    id: number;
    name: string;
    price: string;
    slug: string;
  }[];
}

export interface AddToCart {
  isLoggedIn: boolean;
  user: User;
  id: number;
  name: string;
  price: string;
  slug: string;
}
