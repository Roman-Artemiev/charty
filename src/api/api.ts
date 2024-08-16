const api = {
  url: process.env.url,
  key: process.env.key,
};

let cachedRequests: Record<string, any> = {};

if (typeof window !== 'undefined') {
  cachedRequests = JSON.parse(localStorage.getItem('cachedRequests') || '{}');
}

interface ResponseSchema<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

function saveToCache(key: string, value: any, maxItems: number = 100) {
  cachedRequests[key] = value;

  const keys = Object.keys(cachedRequests);
  if (keys.length > maxItems) {
    delete cachedRequests[keys[0]]; // Удалить самую старую запись
  }

  localStorage.setItem('cachedRequests', JSON.stringify(cachedRequests));
}

async function get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const searchParams = new URLSearchParams(params);
  const endpointAndParams = `${endpoint}?${searchParams}`;
  
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
