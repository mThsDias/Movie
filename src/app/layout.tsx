import React from "react";
import { MovieProvider } from "@/context/ContextMovie";
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
            <body>
                <MovieProvider>{children}</MovieProvider>
            </body>
        </html>
    );
}
