import { redirect } from 'next/navigation';
import Home from '@/components/home/page';

export default function LocalizedPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  if (!['en', 'ur'].includes(lang)) {
    redirect('/en');
  }

  return <Home lang={lang} />;
}