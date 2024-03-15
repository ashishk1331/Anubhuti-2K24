import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Anubhuti 2024</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: linear-gradient(to bottom, #451952 , #2b124c , #000f1e); \n  border-radius: 21px;\n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #efc36a; \n}\n\n",
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
