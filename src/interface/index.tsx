export interface GamePreviewCardProps {
    name: string; 
    src: string;
    price: string;
    platforms: any[];
    width?: string;
    height?: string;
    isCustom?: boolean;
    isFirst?: boolean;
}

export interface GameCardHome {
    released: string,
    id: number;
    background_image: string;
    name: string;
    price: string;
    genres: {
        name: string,
      }[],
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
    released: string,
    id: number;
    background_image: string;
    name: string;
    website: string;
    price: string;
    genres: {
        name: string,
      }[],
    platforms: {
        platform: {
            name: string;
            slug: string;
        };
    }[];
    rating: number;
    slug: string;
    description_raw: string,
    short_screenshots: {
        id: number,
        image: string,
    }[],
}
