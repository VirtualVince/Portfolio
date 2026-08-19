import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../../components/ThemeProvider";
import Navbar from "../../components/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Virtual Vince — Portfolio",
  description: "Freelance software engineer building production websites and apps.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/favicon_io/site.webmanifest",
};

// Runs before first paint so the theme class is on <html> before React hydrates,
// which avoids a flash of the wrong theme.
const themeScript = `
try {
  var stored = localStorage.getItem('theme');
  var dark = stored ? stored === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (dark) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {/* Navbar lives here rather than in a page so every route gets the same
            one. /resume used to be a Pages Router route and pulled its own copy
            in from _app.jsx. */}
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}