export interface GameCardProps {
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
}
