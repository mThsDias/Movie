import { MovieProvider } from "@/context/ContextMovie";
import React from "react";

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
            <body style={{ background: "#141414" }}>
                <MovieProvider>{children}</MovieProvider>
            </body>
        </html>
    );
}
