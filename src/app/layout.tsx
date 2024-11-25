import type { Metadata } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import WebSocketProvider from '../context/WebSocketContext';

export const metadata: Metadata = {
  title: 'Frosthaven Ability Cards',
  description: 'Manage your Frosthaven Ability Cards',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
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
