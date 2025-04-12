import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/common/Providers";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Matgram",
  description: "Social Media App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        <Providers>
            {children}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                closeOnClick={true}
                pauseOnHover={false}
            />
        </Providers>
      </body>
    </html>
  );
}
