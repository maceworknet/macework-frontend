import { fetchStrapi, getStrapiMedia } from '@/lib/strapi';
import ContactClient from './contact-client';

export const metadata = {
  title: 'İletişim | Macework',
  description: 'Fikrinizi ürüne dönüştürmek veya markanızı dijitalde büyütmek için ilk adımı atın.'
};

export default async function ContactPage() {
  const settings = await fetchStrapi('global-setting', { populate: '*' }).catch(() => null);
  return <ContactClient strapiSettings={settings} />;
}
