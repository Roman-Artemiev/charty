import { get } from './api';

interface Params {
  page?: number,
  page_size?: number,
  search?: string,
  dates?: string,
  ordering?: string,
}

function gameList(params?: Params): Promise<unknown> {
  return get('games', params as Record<string, string>);
}

export { gameList };