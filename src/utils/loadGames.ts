import { gameList } from "@/api/gameList";
import getRandomPrice from "./gameCard/getRandomPrice";


export const loadGames = async (params: { page_size?: number, page?: number, platforms?: string, search_exact?: boolean, slug?: string, search?: string }) => {
    const response = await gameList(params);
    let { results } = response;
    results = results.filter((game: { ratings_count: number }) => game.ratings_count > (params.search ? 50 : 10));
    results.forEach((game) => game.price = getRandomPrice(game));
    return results;
};