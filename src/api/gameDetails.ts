import { get } from './api';
import { Game } from '@/interface';

interface Params {
  slug: string,
}

function gameDetails(params: Params): Promise<Game> {
  return get<Game>(`games/${params.slug}`);
}

export { gameDetails };