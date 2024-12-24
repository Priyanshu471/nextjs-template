import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// TODO : Setup open-graph and other meta tags
// TODO : Change metadata
export const metadata: Metadata = {
    title: "NextJS Starter",
    description: "NextJS Starter",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
