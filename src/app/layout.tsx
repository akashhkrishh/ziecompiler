import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import ReduxProvider from "@/redux/Provider";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${poppins.className} antialiased `}>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
