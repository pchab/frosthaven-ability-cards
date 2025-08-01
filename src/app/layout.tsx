import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import WebSocketProvider from '../context/WebSocketContext';
import { getImageProps } from 'next/image';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Frosthaven Ability Cards',
  description: 'Manage your Frosthaven Ability Cards',
  keywords: ['Frosthaven', 'Frosthaven Ability Cards', 'Frosthaven Cards', 'Frosthaven Cards Manager'],
};

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 1200, height: 817, src: '/fh-background.webp' });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = {
    height: '100vh',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    backgroundImage,
  };

  return (
    <html lang='en'>
      <body style={style}>
        <SpeedInsights />
        <main role='main'>
          <WebSocketProvider>
            {children}
          </WebSocketProvider>
        </main>
      </body>
    </html>
  );
}
