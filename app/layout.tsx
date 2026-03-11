import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSE Department Events",
  description: "Computer Science & Engineering department event portal",
};

import { ThemeProvider } from "@/components/theme-provider";
import { BrandingHeader } from "@/components/ui/branding-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BrandingHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
