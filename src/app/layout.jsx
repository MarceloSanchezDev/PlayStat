import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PlayStat",
  description: "Aplicacion para Estadistiacas de Baloncesto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex wh-100 px-25">
          <Image src="/Icono.png" width={64} height={24} alt="Icono" />
          <h1 className="text-start m-5">PlayStat</h1>
        </header>
        {children}
        <footer className="border-t py-6 mt-auto">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm ">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-orange-700">PlayStat</span>.
              Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Link href="/privacy" className="hover:underline">
                Privacidad
              </Link>
              <Link href="/terms" className="hover:underline">
                Términos
              </Link>
              <a
                href="https://github.com/MarceloSanchezDev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
