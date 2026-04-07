import { fetchStrapi } from '@/lib/strapi';
import AboutClient from './about-client';

export const metadata = {
  title: 'Hakkımızda | Macework',
  description: 'Yenilikçi Teknoloji ve Tasarım Tutkusu.'
};

export default async function AboutPage() {
  const data = await fetchStrapi('about-page', { populate: 'stats,image,content' }).catch(() => null);
  const team = await fetchStrapi('team-members', { populate: '*' }).catch(() => []);
  
  return <AboutClient strapiData={data} strapiTeam={team} />;
}
