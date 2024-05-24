// const { API_URL, API_KEY } = process.env;
// const api = { url: API_URL, key: API_KEY };

const api = {
  url: process.env.url,
  key: process.env.key,
};

// console.log('API URL:', process.env.url);
// console.log('API KEY:', process.env.key);

const cachedRequests: Record<string, unknown> = JSON.parse(localStorage.getItem('cachedRequests') || '{}');

interface ResponseSchema<T> {
  count: number,
  next: string,
  previous: string,
  results: T[],
}

async function get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  // console.log(api.key, api.key);
  const searchParams = new URLSearchParams(params);
  const endpointAndParams = `${endpoint}?${searchParams}`;
  if (cachedRequests[endpointAndParams]) return cachedRequests[endpointAndParams] as Promise<T>;
  const response = await fetch(`${api.url}${endpointAndParams}&key=${api.key}`);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  cachedRequests[endpointAndParams] = data;
  localStorage.setItem('cachedRequests', JSON.stringify(cachedRequests));
  return data;
}

export type { ResponseSchema };
export { get };