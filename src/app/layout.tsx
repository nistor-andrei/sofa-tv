import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "global/style/globals.css";
import Home from "./page";
import { Suspense } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sofa TV",
  description: "See that latest trends of movies",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="main">
          <Suspense>
            <Home />
          </Suspense>
        </main>
      </body>
    </html>
  );
}
