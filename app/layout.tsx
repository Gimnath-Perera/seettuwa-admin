import { Metadata } from 'next';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';
import { ConvexClientProvider } from '@/providers/ConvexClientProvider';
import { NextUIThemeProvider } from '@/providers//ThemeProvider';
import '@/styles/globals.css';
import Footer from '@/components/shared/footer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <NextUIThemeProvider themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <ConvexClientProvider>
            <div className='relative flex flex-col h-screen'>
              <Navbar />
              <Sidebar />
              <main className='mx-auto max-w-7xl pt-16 flex-grow'>{children}</main>
              <Footer />
            </div>
          </ConvexClientProvider>
        </NextUIThemeProvider>
      </body>
    </html>
  );
}
