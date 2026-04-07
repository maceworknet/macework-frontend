import { fetchStrapi, getStrapiMedia } from '@/lib/strapi';
import TemplatesClient from './templates-client';

export const metadata = {
  title: 'Şablon Kütüphanesi | Macework',
  description: 'İşletmeniz için özelleştirilebilir, modern ve yüksek performanslı hazır web altyapıları.'
};

export default async function TemplatesPage() {
  const templates = await fetchStrapi('templates', { populate: '*' }).catch(() => []);
  return <TemplatesClient strapiTemplates={templates} />;
}
