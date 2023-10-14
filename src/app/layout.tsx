import NavBar from "@/components/nav-bar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import SupabaseProvider from "./supabase-provider";
import FooterBar from "@/components/footer-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishnu Sahasranamam | VV17CH3R prod.",
  description: "Описание 1000 качеств Отца Вишну",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <SupabaseProvider>
          <Toaster />
          <NavBar />
          {children}
          <FooterBar/>
        </SupabaseProvider>
      </body>
    </html>
  );
}
