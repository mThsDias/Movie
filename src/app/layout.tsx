"use client";

import React from "react";
import "./index.css";
import { NavBar } from "@/components/Header/NavBar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body style={{ background: "#000" }}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
