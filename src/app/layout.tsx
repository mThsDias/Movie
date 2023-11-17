import React from "react";
import "./index.css";

export const metadata = {
  title: "Movie",
  description: "Movie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
