const api = {
  url: process.env.url,
  key: process.env.key,
};

let cachedRequests: Record<string, any> = {};

if (typeof window !== 'undefined') {
  try {
    const storedRequests = localStorage.getItem('cachedRequests');
    if (storedRequests) {
      cachedRequests = JSON.parse(storedRequests);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
}

interface ResponseSchema<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

function saveToCache(key: string, value: any, maxItems: number = 100) {
  cachedRequests[key] = value;

  const keys = Object.keys(cachedRequests);
  if (keys.length > maxItems) {
    delete cachedRequests[keys[0]]; // Удалить самую старую запись
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('cachedRequests', JSON.stringify(cachedRequests));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
}

async function get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const searchParams = new URLSearchParams(params || {});
  const endpointAndParams = `${endpoint}?${searchParams.toString()}`;

  // Check cache
  if (cachedRequests[endpointAndParams]) {
    return cachedRequests[endpointAndParams] as T;
  }

  try {
    const response = await fetch(`${api.url}${endpointAndParams}&key=${api.key}`);
    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    // Cache the response
    if (typeof window !== 'undefined') {
      saveToCache(endpointAndParams, data);
    }

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export type { ResponseSchema };
export { get };