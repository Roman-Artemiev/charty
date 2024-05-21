const { API_URL, API_KEY } = process.env;
const api = { url: API_URL, key: API_KEY };

const cachedRequests: Record<string, unknown> = JSON.parse(localStorage.getItem('cachedRequests') || '{}');


async function get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
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

export { get };