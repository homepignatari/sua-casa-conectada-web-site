import type { Metadata } from "next";
import { Geist, Exo_2, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/whatsappButton";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo-2',
  display: 'swap',
});


const manrope = Manrope({
  variable: "--font-manrope-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sua Casa Conectada",
  description: "Aqui na Sua Casa Conectada, preparamos e transformamos lares em ambientes inteligentes e conectados, proporcionando mais conforto, segurança e eficiência para você e sua família. Combinamos tecnologia de ponta e expertise para garantir uma experiência de automação simples, intuitiva e acessível para todos.",
  icons: {
    icon: '/favicon.png', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${manrope.variable} ${exo2.variable} antialiased max-sm:relative max-sm:max-x-full bg-white overflow-x-hidden max-sm:overflow-x-hidden`}
      >

        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
