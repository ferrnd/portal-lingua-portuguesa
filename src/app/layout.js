import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import Rodape from "@/components/Rodape";
import BarraRolagem from "@/components/BarraRolagem";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-letrar",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Portal de Língua Portuguesa",
  description: "Notícias, vídeos e simulado de Língua Portuguesa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable}`}>
      <body>
        <ClerkProvider>
          {children}
          <Rodape />
          <BarraRolagem />
        </ClerkProvider>
      </body>
    </html>
  );
}
