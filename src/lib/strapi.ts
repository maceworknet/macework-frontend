const STRAPI_ENV = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
export const STRAPI_URL = STRAPI_ENV.endsWith('/') ? STRAPI_ENV.slice(0, -1) : STRAPI_ENV;

export async function fetchStrapi<T = any>(
  path: string,
  options: { populate?: string, filters?: Record<string, string> } = {}
): Promise<T> {
  const params = new URLSearchParams();
  
  if (options.populate) {
    params.append('populate', options.populate);
  }
  
  if (options.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      params.append('filters[' + key + '][$eq]', String(value));
    });
  }

  const urlQuery = params.toString() ? '?' + params.toString() : '';
  const url = STRAPI_URL + '/api/' + path + urlQuery;
  
  try {
    const res = await fetch(url, { cache: "no-store", next: { revalidate: 0 } });
    
    if (!res.ok) {
      console.warn('[Strapi API Error]:', res.status, url);
      return [] as any;
    }
    
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('[Strapi Fetch Failed]:', error);
    return [] as any;
  }
}

export function getStrapiMedia(url: string) {
  if (!url) return '/placeholder.jpg';
  if (url.startsWith('http')) return url;
  return STRAPI_URL + url;
}
