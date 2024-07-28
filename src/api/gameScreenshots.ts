import { get, ResponseSchema } from './api';

type Screenshot = {
  id: number,
  image: string,
}

interface Params {
  slug: string,
}

function gameScreenshots(params: Params): Promise<ResponseSchema<Screenshot>> {
  return get<ResponseSchema<Screenshot>>(`games/${params.slug}/screenshots`);
}

export { gameScreenshots };