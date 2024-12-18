import { Playfair_Display } from "next/font/google"
import "./globals.css"

const serif = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
