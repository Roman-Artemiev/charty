import { get, ResponseSchema } from './api';

interface Params {
  page?: number,
  page_size?: number,
  // platforms?: string,
  search?: string,
  dates?: string,
  ordering?: string,
}

function gameList(params?: Params): Promise<ResponseSchema<any>> {
  return get<ResponseSchema<any>>('games', params as Record<string, string>);
}

export { gameList };