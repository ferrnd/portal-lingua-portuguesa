import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Manrope } from "next/font/google";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Vocábulo · Portal de Língua Portuguesa",
  description: "Notícias, dicas de estudo, carreiras e simulado de Língua Portuguesa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        <ClerkProvider>
          <Suspense>
            <Cabecalho />
          </Suspense>
          {children}
          <Rodape />
        </ClerkProvider>
      </body>
    </html>
  );
}
