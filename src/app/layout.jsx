import {
  Geist,
  Geist_Mono,
  Source_Sans_3,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HeaderComponent from "./components/Header/HeaderComponent";
import { UserProvider } from "./context/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-ui",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-num",
});
export const metadata = {
  title: "PlayStat",
  description: "Aplicacion para Estadistiacas de Baloncesto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${sourceSans.variable} ${robotoMono.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <HeaderComponent />
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
        </UserProvider>
      </body>
    </html>
  );
}
