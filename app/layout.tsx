import type { Metadata } from 'next';
import { Quicksand, Rajdhani } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { FontSizeProvider } from '@/contexts/FontSizeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { TabProvider } from '@/contexts/TabContext';
import { Toaster } from 'sonner';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Potomac Analyst Workbench',
  description: 'Advanced AFL code generation and trading strategy analysis platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${quicksand.variable} ${rajdhani.variable}`}>
      <body className={quicksand.className}>
        <ThemeProvider>
          <FontSizeProvider>
            <AuthProvider>
              <TabProvider>
                {children}
                <Toaster richColors position="bottom-right" />
              </TabProvider>
            </AuthProvider>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
